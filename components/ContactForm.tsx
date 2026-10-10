'use client';

import { useRef, useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { t, type Locale } from '@/lib/i18n';

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'configuration'>('idle');
  const [loading, setLoading] = useState(false);
  const submitting = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    submitting.current = true;
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          website: formData.get('website'),
          locale,
        }),
      });
      const result: { ok?: boolean; error?: string } = await response.json();
      if (!response.ok || result.ok !== true) {
        setStatus(result.error === 'configuration' ? 'configuration' : 'error');
        return;
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-lg border border-border bg-white p-6 md:p-8 lg:h-full">
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-green-800">{t(locale, 'form.successTitle')}</p>
            <p className="text-xs text-green-700 mt-1">
              {t(locale, 'form.successDescription')}
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{t(locale, 'form.error')}</p>
        </div>
      )}

      {status === 'configuration' && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{t(locale, 'form.configurationError')}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
        <div aria-hidden="true" className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
              {t(locale, 'form.fullName')} <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={120}
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder={t(locale, 'form.fullNamePlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
              {t(locale, 'form.companyOrganization')}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              maxLength={160}
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder={t(locale, 'form.companyOrganizationPlaceholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
              {t(locale, 'form.phoneNumber')} <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={30}
              pattern="\\+?[0-9][0-9\\s().-]{5,29}"
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder={t(locale, 'form.phonePlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
              {t(locale, 'form.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={254}
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder={t(locale, 'form.emailPlaceholder')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
          {t(locale, 'form.subject')} <span className="text-accent">*</span>
          </label>
            <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">{t(locale, 'form.selectSubject')}</option>
            <option value="cooperation">{t(locale, 'form.collaborationProposal')}</option>
            <option value="projects">{t(locale, 'form.projectInquiry')}</option>
            <option value="technical">{t(locale, 'form.technicalConsultation')}</option>
            <option value="other">{t(locale, 'form.other')}</option>
          </select>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
            {t(locale, 'form.message')} <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={5000}
            className="w-full min-h-[180px] flex-1 resize-y rounded-md border border-border bg-white px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            placeholder={t(locale, 'form.messagePlaceholder')}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 disabled:opacity-60 text-white px-7 py-3 text-sm font-semibold rounded-md transition-colors w-full md:w-auto"
        >
          {loading ? t(locale, 'form.sending') : t(locale, 'form.sendMessage')}
          {!loading && <Send className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}
