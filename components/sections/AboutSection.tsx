import Link from '@/components/LocalizedLink';
import { ChevronRight } from 'lucide-react';
import { t, type Locale } from '@/lib/i18n';

export default function AboutSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-rgv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt={t(locale, 'about.engineersAlt')}
                className="w-full h-[480px] object-cover img-hover"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold text-accent">+24</p>
              <p className="text-sm text-white/80 mt-1">{t(locale, 'home.experienceBadge')}</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'home.aboutEyebrow')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'home.aboutHeading')}
            </h2>
            <p className="mt-6 text-base text-steel leading-relaxed">
              {t(locale, 'home.aboutParagraph1')}
            </p>
            <p className="mt-4 text-base text-steel leading-relaxed">
              {t(locale, 'home.aboutParagraph2')}
            </p>

            {/* Mini features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['home.fullProjectLifecycle'],
                ['home.specialistPersonnel'],
                ['home.specializedMachinery'],
                ['home.validQualifications'],
              ].map((item) => (
                <div key={item[0]} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <span className="text-sm text-steel font-medium">{t(locale, item[0])}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-navy hover:text-accent font-semibold text-base transition-colors group"
            >
              {t(locale, 'home.learnAboutCompany')}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
