'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6 md:p-8">
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-green-800">پیام شما ارسال شد</p>
            <p className="text-xs text-green-700 mt-1">
              در اسرع وقت با شما تماس خواهیم گرفت.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">خطا در ارسال پیام. لطفاً مجدداً تلاش کنید.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
              نام و نام خانوادگی <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="نام و نام خانوادگی"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
              شرکت / سازمان
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="نام شرکت یا سازمان"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
              شماره تماس <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-right focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
              ایمیل
            </label>
            <input
              id="email"
              name="email"
              type="email"
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-right focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
            موضوع <span className="text-accent">*</span>
          </label>
            <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">انتخاب موضوع</option>
            <option value="cooperation">پیشنهاد همکاری</option>
            <option value="projects">استعلام پروژه</option>
            <option value="technical">مشاوره فنی</option>
            <option value="other">سایر</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
            پیام <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-y"
            placeholder="متن پیام خود را وارد کنید"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 disabled:opacity-60 text-white px-7 py-3 text-sm font-semibold rounded-md transition-colors w-full md:w-auto"
        >
          {loading ? 'در حال ارسال...' : 'ارسال پیام'}
          {!loading && <Send className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}
