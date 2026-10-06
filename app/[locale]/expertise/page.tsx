import type { Metadata } from 'next';
import Link from '@/components/LocalizedLink';
import { ChevronRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { capabilities } from '@/lib/site-data';
import { localizeCapability } from '@/lib/localized-site-data';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/expertise',
    t(params.locale, 'expertise.metadataTitle'),
    t(params.locale, 'expertise.metadataDescription'),
  );
}

export default function ExpertisePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'expertise.pageTitle')}
        subtitle={t(locale, 'expertise.pageSubtitle')}
        image="https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: t(locale, 'expertise.breadcrumb') }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="space-y-8">
            {capabilities.map((sourceCap, i) => {
              const cap = localizeCapability(sourceCap, locale);
              return (
              <div
                key={cap.id}
                id={cap.id}
                className={`reveal grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg border border-border hover:shadow-md transition-shadow scroll-mt-24 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-light-gray'
                }`}
              >
                {/* Image */}
                <div className="relative h-48 md:h-40 overflow-hidden rounded-lg md:col-span-1">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover img-hover"
                  />
                  <span className="absolute top-3 right-3 text-2xl font-bold text-white/90 tabular-nums text-shadow">
                    {cap.number}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-xl font-bold text-navy">{cap.title}</h2>
                    <span className="text-xs text-accent font-medium">{cap.titleEn}</span>
                  </div>
                  <p className="text-sm text-steel leading-relaxed">{cap.description}</p>
                  <div className="mt-4 flex gap-3">
                    <Link
                      href={`/projects?category=${cap.id === 'road-infra' ? 'road' : cap.id === 'bridges' ? 'bridge' : cap.id === 'rcc' ? 'rcc' : cap.id === 'soil-stab' ? 'soil-stab' : cap.id === 'building' ? 'building' : cap.id === 'residential' ? 'residential' : cap.id === 'precast' ? 'precast' : cap.id === 'water' ? 'water' : 'urban-infra'}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-accent transition-colors group"
                    >
                      {t(locale, 'expertise.relatedProjects')}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    {(cap.id === 'rcc' || cap.id === 'soil-stab') && (
                      <Link
                        href={cap.id === 'rcc' ? '/capabilities/rcc' : '/capabilities/soil-stabilization'}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-navy transition-colors"
                      >
                        {t(locale, 'expertise.specialistPage')}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
