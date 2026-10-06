import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, mainNav, capabilities } from '@/lib/site-data';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="container-rgv py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-4 text-xs text-white/40">
              فعالیت مستمر از سال ۱۳۷۹
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white/90 mb-4 pb-2 border-b border-white/10">
              دسترسی سریع
            </h3>
            <ul className="space-y-2.5">
              {mainNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-bold text-white/90 mb-4 pb-2 border-b border-white/10">
              حوزه‌های فعالیت
            </h3>
            <ul className="space-y-2.5">
              {capabilities.slice(0, 7).map((cap) => (
                <li key={cap.id}>
                  <Link
                    href={cap.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white/90 mb-4 pb-2 border-b border-white/10">
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>آدرس دفتر مرکزی پس از تأیید نهایی درج خواهد شد</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>تلفن: {siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>ایمیل: {siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-rgv py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © شرکت راه گستر ولاش — کلیه حقوق محفوظ است.
          </p>
          <p className="text-xs text-white/40">
            طراحی و توسعه با تمرکز بر کیفیت فنی و تجربه کاربری
          </p>
        </div>
      </div>
    </footer>
  );
}
