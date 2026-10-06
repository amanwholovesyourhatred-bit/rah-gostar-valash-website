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
            <p className="text-sm font-semibold text-green-800">Your message has been sent</p>
            <p className="text-xs text-green-700 mt-1">
              We will contact you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">There was an error sending your message. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
              Company / Organization
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="Company / Organization"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="09123456789"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              dir="ltr"
              className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
            Subject <span className="text-accent">*</span>
          </label>
            <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">Select a subject</option>
            <option value="cooperation">Collaboration Proposal</option>
            <option value="projects">Project Inquiry</option>
            <option value="technical">Technical Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-y"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 disabled:opacity-60 text-white px-7 py-3 text-sm font-semibold rounded-md transition-colors w-full md:w-auto"
        >
          {loading ? 'Sending...' : 'Send Message'}
          {!loading && <Send className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}
