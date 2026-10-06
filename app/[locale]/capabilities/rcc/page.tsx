import type { Metadata } from 'next';
import Link from '@/components/LocalizedLink';
import { ChevronRight, Zap, DollarSign, ThermometerSnowflake, ThermometerSun, Layers, Truck, Gauge, Shield, Wrench, TrendingDown } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';
import { localizeProject } from '@/lib/localized-projects';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/capabilities/rcc',
    t(params.locale, 'rcc.metadataTitle'),
    t(params.locale, 'rcc.metadataDescription'),
  );
}

const advantages = [
  { icon: Zap, title: 'highExecutionSpeed', desc: 'rapidLargeScaleConstruction' },
  { icon: DollarSign, title: 'relativelyLowCost', desc: 'costEffectiveComparedToConcrete' },
  { icon: TrendingDown, title: 'lowerCementConsumption', desc: 'lowerCementComparedToConventional' },
  { icon: ThermometerSun, title: 'hotClimate', desc: 'hotClimateDescription' },
  { icon: ThermometerSnowflake, title: 'coldClimate', desc: 'coldClimateDescription' },
  { icon: Wrench, title: 'noConventionalFormwork', desc: 'noConventionalFormworkDescription' },
  { icon: Truck, title: 'asphaltPaverPlacement', desc: 'asphaltPaverPlacementDescription' },
  { icon: Gauge, title: 'vibratoryCompaction', desc: 'vibratoryCompactionDescription' },
  { icon: Shield, title: 'longServiceLife', desc: 'longServiceLifeDescription' },
];

const processSteps = [
  { num: '01', title: 'zeroSlumpProduction', desc: 'zeroSlumpProductionDescription' },
  { num: '02', title: 'asphaltPaverStep', desc: 'asphaltPaverStepDescription' },
  { num: '03', title: 'rollerCompactionStep', desc: 'rollerCompactionStepDescription' },
  { num: '04', title: 'finishingAndCuring', desc: 'finishingAndCuringDescription' },
];

export default function RCCPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const rccProjects = projects
    .filter((project) => project.category === 'rcc')
    .map((project) => localizeProject(project, locale));

  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'rcc.pageTitle')}
        subtitle={t(locale, 'rcc.pageSubtitle')}
        image="https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: t(locale, 'capabilities.breadcrumb'), href: '/capabilities' },
          { label: t(locale, 'rcc.breadcrumb') },
        ]}
      />

      {/* Technology explanation */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                {t(locale, 'rcc.technology')}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                {t(locale, 'rcc.technologyHeading')}
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                {t(locale, 'rcc.technologyDescription1')}
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                {t(locale, 'rcc.technologyDescription2')}
              </p>
            </div>

            <div className="reveal reveal-delay-1 relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1145465/pexels-photo-1145465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt={t(locale, 'rcc.pavementAlt')}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">{t(locale, 'rcc.zeroSlump')}</p>
                <p className="text-xs text-white/80 mt-1">{t(locale, 'rcc.veryDryConcrete')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section className="section-padding bg-light-gray blueprint-bg">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'rcc.advantages')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'rcc.advantagesHeading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow`}
              >
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-base font-bold text-navy">{t(locale, `rcc.${adv.title}`)}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{t(locale, `rcc.${adv.desc}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'rcc.constructionProcess')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative`}>
                <div className="text-4xl font-bold text-accent/20 tabular-nums">{step.num}</div>
                <h3 className="mt-2 text-base font-bold text-navy">{t(locale, `rcc.${step.title}`)}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{t(locale, `rcc.${step.desc}`)}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 -left-3 w-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company experience */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container-rgv relative z-10">
          <div className="reveal mb-10">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'rcc.projectExperience')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight text-balance">
              {t(locale, 'rcc.companyExperienceHeading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rccProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`reveal reveal-delay-${(i % 2) + 1} group flex bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all`}
              >
                <div className="w-32 h-32 shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-xs text-accent font-semibold mb-1">{t(locale, 'rcc.rccProject')}</span>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="mt-2 text-xs text-white/50">{project.location}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="reveal mt-8 inline-flex items-center gap-2 text-accent hover:text-white font-semibold transition-colors group"
          >
            {t(locale, 'rcc.viewAllProjects')}
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
