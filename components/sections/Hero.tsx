'use client';

import Link from 'next/link';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
import { companyStats, type Stat } from '@/lib/site-data';

function StatCounter({ stat, index }: { stat: Stat; index: number }) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} text-center px-6 py-8 border-l border-white/10 last:border-l-0 md:px-8 md:py-10`}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        {stat.prefix && (
          <span className="text-3xl md:text-4xl font-light text-accent">{stat.prefix}</span>
        )}
        <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
          {stat.value.toLocaleString('fa-IR')}
        </span>
        {stat.suffix && (
          <span className="text-2xl md:text-3xl font-light text-white/80">{stat.suffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm md:text-base font-semibold text-white">
        {stat.label}
      </p>
      {stat.sublabel && (
        <p className="mt-1 text-xs text-white/50">{stat.sublabel}</p>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="پروژه زیرساختی راه‌سازی"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-rgv pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-accent rounded-full" />
              شرکت راه گستر ولاش
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow-lg text-balance">
            بیش از دو دهه تجربه در اجرای پروژه‌های عمرانی و زیرساختی
          </h1>

          <p className="reveal reveal-delay-2 mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl text-shadow">
            راه گستر ولاش؛ مجری پروژه‌های راه‌سازی، ابنیه، زیرساخت‌های شهری، آب و فاضلاب و پروژه‌های تخصصی عمرانی
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 text-white px-7 py-3.5 text-base font-semibold rounded-md transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              مشاهده پروژه‌ها
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 text-base font-semibold rounded-md transition-colors"
            >
              آشنایی با شرکت
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 inset-x-0 bg-navy/80 backdrop-blur-md border-t border-white/10">
        <div className="container-rgv">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {companyStats.map((stat, i) => (
              <StatCounter key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
