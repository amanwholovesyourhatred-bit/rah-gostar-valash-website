import Link from '@/components/LocalizedLink';
import { ChevronRight } from 'lucide-react';
import { t, type Locale } from '@/lib/i18n';

export default function CTASection({ locale }: { locale: Locale }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11701517/pexels-photo-11701517.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative z-10 container-rgv text-center">
        <div className="reveal max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
            {t(locale, 'cta.heading')}
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            {t(locale, 'cta.description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 text-white px-7 py-3.5 text-base font-semibold rounded-md transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              {t(locale, 'common.contactUs')}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 text-base font-semibold rounded-md transition-colors"
            >
              {t(locale, 'common.viewProjects')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
