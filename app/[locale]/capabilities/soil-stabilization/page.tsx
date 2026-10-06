import type { Metadata } from 'next';
import Link from '@/components/LocalizedLink';
import { ChevronRight, TrendingUp, Gauge, Layers, Clock, DollarSign, Wrench, Mountain, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';
import { localizeProject } from '@/lib/localized-projects';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/capabilities/soil-stabilization',
    t(params.locale, 'soilStabilization.metadataTitle'),
    t(params.locale, 'soilStabilization.metadataDescription'),
  );
}

const benefits = [
  { icon: TrendingUp, title: 'increasedSoilStrength', desc: 'increasedSoilStrengthDescription' },
  { icon: Mountain, title: 'reducedSwelling', desc: 'reducedSwellingDescription' },
  { icon: ShieldCheck, title: 'improvedShearStrength', desc: 'improvedShearStrengthDescription' },
  { icon: Layers, title: 'improvedPlasticity', desc: 'improvedPlasticityDescription' },
  { icon: Clock, title: 'fasterExecution', desc: 'fasterExecutionDescription' },
  { icon: DollarSign, title: 'reducedMaterialConsumption', desc: 'reducedMaterialConsumptionDescription' },
  { icon: Gauge, title: 'reducedProjectDuration', desc: 'reducedProjectDurationDescription' },
  { icon: Wrench, title: 'economicAdvantage', desc: 'economicAdvantageDescription' },
];

export default function SoilStabilizationPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const stabProjects = projects
    .filter((project) => project.category === 'soil-stab')
    .map((project) => localizeProject(project, locale));

  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'soilStabilization.pageTitle')}
        subtitle={t(locale, 'soilStabilization.pageSubtitle')}
        image="https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: t(locale, 'capabilities.breadcrumb'), href: '/capabilities' },
          { label: t(locale, 'soilStabilization.breadcrumb') },
        ]}
      />

      {/* Technology explanation */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7910082/pexels-photo-7910082.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt={t(locale, 'soilStabilization.soilStabilizationAlt')}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 bg-navy text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold text-accent">500+ m</p>
                <p className="text-xs text-white/80 mt-1">{t(locale, 'soilStabilization.stabilizedPerDay')}</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                {t(locale, 'soilStabilization.stabilizationTechnology')}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                {t(locale, 'soilStabilization.stabilizationHeading')}
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                {t(locale, 'soilStabilization.technologyDescription1')}
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                {t(locale, 'soilStabilization.technologyDescription2')}
              </p>

              <div className="mt-6 p-4 bg-light-gray rounded-lg border-l-4 border-accent">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">{t(locale, 'soilStabilization.executionCapacityLabel')}</strong> {t(locale, 'soilStabilization.executionCapacity')}
                </p>
              </div>

              <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">{t(locale, 'soilStabilization.companyTechnicalStudyLabel')}</strong> {t(locale, 'soilStabilization.companyTechnicalStudy')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="section-padding bg-light-gray blueprint-bg">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'soilStabilization.advantages')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'soilStabilization.advantagesHeading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-white p-5 rounded-lg border border-border hover:shadow-md transition-shadow`}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-navy">{t(locale, `soilStabilization.${benefit.title}`)}</h3>
                <p className="mt-1.5 text-xs text-steel leading-relaxed">{t(locale, `soilStabilization.${benefit.desc}`)}</p>
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
              {t(locale, 'soilStabilization.projectExperience')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight text-balance">
              {t(locale, 'soilStabilization.companyProjectsHeading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stabProjects.map((project, i) => (
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
                  <span className="text-xs text-accent font-semibold mb-1">{t(locale, 'soilStabilization.soilStabilizationProject')}</span>
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
            {t(locale, 'soilStabilization.viewAllProjects')}
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
