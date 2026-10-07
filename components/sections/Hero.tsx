'use client';

import Link from '@/components/LocalizedLink';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { companyStats, type Stat } from '@/lib/site-data';
import { t, type Locale } from '@/lib/i18n';

function StatCounter({
  stat,
  index,
  locale,
}: {
  stat: Stat;
  index: number;
  locale: Locale;
}) {
  const statKeys = [
    ['home.yearsOfExperience', 'home.yearsOfExperienceSince2000'],
    ['home.roadGrade', 'home.roadGradeDetail'],
    ['home.buildingGrade', 'home.buildingGradeDetail'],
    ['home.waterGrade', 'home.waterGradeDetail'],
  ];
  const [labelKey, sublabelKey] = statKeys[index];

  return (
    <div
      className={`flex h-full flex-col items-center border-b border-white/10 px-6 py-6 text-center last:border-b-0 md:border-b-0 md:px-8 md:py-4 ${
        index % 2 === 1 ? 'md:border-l md:border-white/10' : ''
      } ${index > 0 ? 'xl:border-l xl:border-white/10' : ''}`}
    >
      <div className="flex h-14 items-end justify-center">
        <div className="flex items-baseline justify-center gap-0.5">
          {stat.prefix && (
            <span className="text-3xl md:text-4xl font-light text-accent">{stat.prefix}</span>
          )}
          <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
            {stat.value.toLocaleString('en-US')}
          </span>
          {stat.suffix && (
            <span className="text-2xl md:text-3xl font-light text-white/80">{stat.suffix}</span>
          )}
        </div>
      </div>
      <p className="mt-2 min-h-[3rem] text-sm font-semibold leading-snug text-white md:min-h-[4.5rem] md:text-base">
        {t(locale, labelKey)}
      </p>
      {stat.sublabel && <p className="mt-1 text-xs text-white/50">{t(locale, sublabelKey)}</p>}
    </div>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate flex min-h-[820px] flex-col overflow-hidden bg-navy text-white lg:min-h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/rah-gostar-valash-infrastructure-hero.webp"
          alt="Road infrastructure project by Rah Gostar Valash"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/35 via-transparent to-navy/80" />
      </div>

      {/* Content */}
      <div className="container-rgv relative z-10 flex w-full flex-1 items-center py-32 sm:py-36 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-7 border-l-2 border-accent pl-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-white">
              {t(locale, 'home.identifier')}
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs">
              {t(locale, 'home.industry')}
            </span>
          </div>

          <h1 className="max-w-4xl text-display text-white text-balance">
            <span className="block">{t(locale, 'home.headlineLine1')}</span>
            <span className="mt-1 block text-white/90">{t(locale, 'home.headlineLine2')}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-[clamp(1rem,1.45vw,1.25rem)] leading-relaxed text-white/85">
            {t(locale, 'home.introduction')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 sm:min-w-52"
            >
              {t(locale, 'home.exploreProjects')}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:min-w-52"
            >
              {t(locale, 'home.aboutCompany')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full border-t border-white/20 bg-navy/95 py-6 md:py-8">
        <div className="container-rgv">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((stat, i) => (
              <StatCounter key={i} stat={stat} index={i} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
