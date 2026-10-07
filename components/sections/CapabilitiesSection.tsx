import Link from '@/components/LocalizedLink';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { capabilities } from '@/lib/site-data';
import { localizeCapability } from '@/lib/localized-site-data';
import { t, type Locale } from '@/lib/i18n';

export default function CapabilitiesSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-padding bg-light-gray blueprint-bg">
      <div className="container-rgv">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">
            {t(locale, 'capabilities.areasOfExpertise')}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
            {t(locale, 'capabilities.technicalExecutionCapabilities')}
          </h2>
          <p className="mt-4 text-base text-steel leading-relaxed">
            {t(locale, 'capabilities.capabilitiesDescription')}
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((sourceCap, i) => {
            const cap = localizeCapability(sourceCap, locale);
            return (
            <Link
              key={cap.id}
              href={cap.href}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="absolute top-4 right-4 text-2xl font-bold text-white/90 tabular-nums">
                  {cap.number}
                </span>
                <h3 className="absolute bottom-4 right-4 left-4 text-lg font-bold text-white leading-snug">
                  {cap.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-accent font-medium mb-2">{cap.titleEn}</p>
                <p className="text-sm text-steel leading-relaxed line-clamp-3">
                  {cap.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                  View Details
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </section>
  );
}
