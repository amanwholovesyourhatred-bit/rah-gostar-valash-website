import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '@/components/LocalizedLink';
import { ChevronRight, Target, History, Award, Users, Settings, ShieldCheck, Layers } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { companyStats, capabilities, siteConfig } from '@/lib/site-data';
import { localizeCapability } from '@/lib/localized-site-data';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/about',
    t(params.locale, 'about.metadataTitle'),
    t(params.locale, 'about.metadataDescription'),
  );
}

const projectPhases = [
  { title: 'siteMobilization', desc: 'siteMobilizationDescription' },
  { title: 'earthworks', desc: 'earthworksDescription' },
  { title: 'structuralWorks', desc: 'structuralWorksDescription' },
  { title: 'structuralFrame', desc: 'structuralFrameDescription' },
  { title: 'roughConstruction', desc: 'roughConstructionDescription' },
  { title: 'mechanicalSystems', desc: 'mechanicalSystemsDescription' },
  { title: 'electricalSystems', desc: 'electricalSystemsDescription' },
  { title: 'finishing', desc: 'finishingDescription' },
  { title: 'projectCompletion', desc: 'projectCompletionDescription' },
];

const statisticKeys = [
  ['home.yearsOfExperience', 'home.yearsOfExperienceSince2000'],
  ['home.roadGrade', 'home.roadGradeDetail'],
  ['home.buildingGrade', 'home.buildingGradeDetail'],
  ['home.waterGrade', 'home.waterGradeDetail'],
];

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'about.pageTitle')}
        subtitle={t(locale, 'about.pageSubtitle')}
        image="/images/projects/roads/gilan-sabz-siahkal-01.webp"
        breadcrumbs={[{ label: t(locale, 'about.breadcrumb') }]}
      />

      {/* Stats */}
      <section className="py-12 bg-navy text-white border-b border-white/10">
        <div className="container-rgv">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  {stat.prefix && <span className="text-2xl font-light text-accent">{stat.prefix}</span>}
                  <span className="text-3xl md:text-4xl font-bold tabular-nums">
                    {stat.value.toLocaleString('en-US')}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white/80">{t(locale, statisticKeys[i][0])}</p>
                {stat.sublabel && <p className="text-xs text-white/40 mt-0.5">{t(locale, statisticKeys[i][1])}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal relative">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white shadow-2xl">
                <Image
                  src="/images/company/velash-holding-logo.webp"
                  alt="Velash Holding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8 sm:p-12"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-xl font-bold">{siteConfig.established}</p>
                <p className="text-xs text-white/80 mt-0.5">{t(locale, 'about.establishedYear')}</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                {t(locale, 'about.companyOverview')}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                {t(locale, 'about.overviewHeading')}
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                {t(locale, 'about.overviewParagraph1')}
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                {t(locale, 'about.overviewParagraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Experience */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">{t(locale, 'about.historyHeading')}</h2>
            </div>
            <p className="text-base text-steel leading-relaxed">
              {t(locale, 'about.historyParagraph')}
            </p>
          </div>
        </div>
      </section>

      {/* Project lifecycle */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'about.deliveryCycle')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'about.lifecycleHeading')}
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              {t(locale, 'about.lifecycleDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectPhases.map((phase, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 p-5 bg-light-gray rounded-lg border border-border hover:border-accent/30 transition-colors`}
              >
                <span className="shrink-0 w-8 h-8 bg-navy text-white text-sm font-bold rounded-md flex items-center justify-center tabular-nums">
                  {(i + 1).toLocaleString('en-US')}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">{t(locale, `about.${phase.title}`)}</h3>
                  <p className="mt-1 text-xs text-steel">{t(locale, `about.${phase.desc}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized areas */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">{t(locale, 'about.areasHeading')}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((sourceCap, i) => {
              const cap = localizeCapability(sourceCap, locale);
              return (
              <Link
                key={cap.id}
                href={cap.href}
                className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:border-accent/30 hover:shadow-sm transition-all`}
              >
                <span className="text-sm font-bold text-accent tabular-nums">{cap.number}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-navy group-hover:text-accent transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-steel mt-0.5">{cap.titleEn}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-steel group-hover:text-accent transition-all group-hover:translate-x-1" />
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* Management approach */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'about.managementApproach',
                desc: 'about.managementApproachDescription',
              },
              {
                icon: Users,
                title: 'about.technicalExecution',
                desc: 'about.technicalExecutionDescription',
              },
              {
                icon: Award,
                title: 'about.contractorQualifications',
                desc: 'about.contractorQualificationsDescription',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-6 bg-light-gray rounded-lg border border-border`}
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{t(locale, item.title)}</h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">{t(locale, item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links to other pages */}
      <section className="py-12 bg-light-gray border-t border-border">
        <div className="container-rgv">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/qualifications"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 text-sm font-semibold rounded-md transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              {t(locale, 'about.qualificationsLink')}
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-navy border border-border px-6 py-3 text-sm font-semibold rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              {t(locale, 'about.equipmentLink')}
            </Link>
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
