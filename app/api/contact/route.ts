import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 12_000;
const MAX_MESSAGE_LENGTH = 5_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const SUBJECT_LABELS: Record<string, Record<string, string>> = {
  en: {
    cooperation: 'Collaboration Proposal',
    projects: 'Project Inquiry',
    technical: 'Technical Consultation',
    other: 'Other',
  },
  ru: {
    cooperation: 'Предложение о сотрудничестве',
    projects: 'Запрос по проекту',
    technical: 'Техническая консультация',
    other: 'Другое',
  },
};

type ContactSubmission = {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  locale: 'en' | 'ru';
  website: string;
};

type RateLimitEntry = { count: number; resetAt: number };
type RateLimitGlobal = typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>;
};

const globalState = globalThis as RateLimitGlobal;
const rateLimit = (globalState.contactRateLimit ??= new Map<string, RateLimitEntry>());

function jsonError(message: string, status: number, retryAfter?: number) {
  const headers = new Headers();
  if (retryAfter) headers.set('Retry-After', String(retryAfter));
  return NextResponse.json({ ok: false, error: message }, { status, headers });
}

async function readRequestBody(request: NextRequest): Promise<string | null> {
  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) return null;
  if (!request.body) return '';

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let result = '';
  let bytesRead = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesRead += value.byteLength;
      if (bytesRead > MAX_BODY_BYTES) return null;
      result += decoder.decode(value, { stream: true });
    }
    return result + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function parseSubmission(value: unknown): ContactSubmission | null {
  if (!isRecord(value)) return null;
  if (value.locale !== 'en' && value.locale !== 'ru') return null;

  const submission: ContactSubmission = {
    name: getString(value.name),
    company: getString(value.company),
    phone: getString(value.phone),
    email: getString(value.email),
    subject: getString(value.subject),
    message: getString(value.message),
    locale: value.locale,
    website: getString(value.website),
  };

  const phoneDigits = submission.phone.replace(/\D/g, '');
  const validPhone =
    /^\+?[0-9][0-9\s().-]{5,29}$/.test(submission.phone) &&
    phoneDigits.length >= 7 &&
    phoneDigits.length <= 15;

  if (
    !submission.name ||
    submission.name.length > 120 ||
    submission.company.length > 160 ||
    !validPhone ||
    (submission.email !== '' && !isValidEmail(submission.email)) ||
    !Object.prototype.hasOwnProperty.call(
      SUBJECT_LABELS[submission.locale],
      submission.subject,
    ) ||
    !submission.message ||
    submission.message.length > MAX_MESSAGE_LENGTH ||
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(
      `${submission.name}${submission.company}${submission.phone}${submission.email}${submission.message}`,
    )
  ) {
    return null;
  }

  return submission;
}

function takeRateLimit(ip: string, now: number): number {
  rateLimit.forEach((entry, key) => {
    if (entry.resetAt <= now) rateLimit.delete(key);
  });

  const entry = rateLimit.get(ip);
  if (entry && entry.resetAt > now) {
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
      return Math.ceil((entry.resetAt - now) / 1000);
    }
    entry.count += 1;
    return 0;
  }

  if (rateLimit.size >= 10_000) return Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);
  rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  return 0;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function buildEmail(submission: ContactSubmission) {
  const fields = [
    ['Full Name', submission.name],
    ['Company / Organization', submission.company || '—'],
    ['Phone Number', submission.phone],
    ['Email', submission.email || '—'],
    ['Subject', SUBJECT_LABELS[submission.locale][submission.subject]],
    ['Message', submission.message],
  ] as const;

  const html = `
    <h1>New Website Inquiry — Rah Gostar Valash</h1>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d1d5db">
      <tbody>
        ${fields
          .map(
            ([label, value]) =>
              `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`,
          )
          .join('')}
      </tbody>
    </table>
  `;

  const text = [
    'New Website Inquiry — Rah Gostar Valash',
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join('\n\n');

  return { html, text };
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return jsonError('Invalid request.', 415);
  }

  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-real-ip') ||
    forwardedFor?.split(',')[0].trim() ||
    'unknown';
  const retryAfter = takeRateLimit(ip, Date.now());
  if (retryAfter > 0) {
    return jsonError('Too many requests. Please try again later.', 429, retryAfter);
  }

  const body = await readRequestBody(request);
  if (body === null) return jsonError('Request is too large.', 413);

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return jsonError('Invalid request.', 400);
  }

  if (isRecord(payload) && getString(payload.website)) {
    return jsonError('Invalid request.', 400);
  }

  const submission = parseSubmission(payload);
  if (!submission) return jsonError('Please check the submitted fields.', 400);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    return NextResponse.json(
      { ok: false, error: 'configuration' },
      { status: 503 },
    );
  }

  const { html, text } = buildEmail(submission);
  const emailPayload: Record<string, unknown> = {
    from,
    to: ['rgvelash@gmail.com'],
    subject: 'New Website Inquiry — Rah Gostar Valash',
    html,
    text,
  };
  if (submission.email) emailPayload.reply_to = submission.email;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
      signal: controller.signal,
    });

    if (!response.ok) return jsonError('Email delivery failed.', 502);

    const result: unknown = await response.json();
    if (!isRecord(result) || typeof result.id !== 'string' || !result.id) {
      return jsonError('Email delivery failed.', 502);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return jsonError('Email delivery failed.', 502);
  } finally {
    clearTimeout(timeout);
  }
}
