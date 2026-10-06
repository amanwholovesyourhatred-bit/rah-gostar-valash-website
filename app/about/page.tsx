import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Target, History, Award, Users, Settings, ShieldCheck, Layers } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { companyStats, capabilities } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'درباره ما | شرکت راه گستر ولاش',
  description:
    'شرکت راه گستر ولاش با بیش از ۲۴ سال تجربه در پروژه‌های عمرانی و زیرساختی. معرفی شرکت، تاریخچه، حوزه‌های تخصصی، توان فنی و صلاحیت‌های پیمانکاری.',
};

const projectPhases = [
  { title: 'پایگاه‌سازی', desc: 'استقرار پایگاه پروژه و آماده‌سازی سایت' },
  { title: 'عملیات خاکی', desc: 'حفاری، پر کردن و تسطیح زمین' },
  { title: 'عملیات سازه‌ای', desc: 'اجرای فونداسیون و ساختار اصلی' },
  { title: 'اسکلت', desc: 'اجرای اسکلت بتنی یا فلزی' },
  { title: 'کارهای خام', desc: 'دیوارچینی و عملیات خام ساختمان' },
  { title: 'تأسیسات مکانیکی', desc: 'نصب سیستم‌های مکانیکی و حرارتی' },
  { title: 'تأسیسات برقی', desc: 'نصب سیستم‌های برقی و نورپردازی' },
  { title: 'نازک‌کاری', desc: 'عملیات نازک‌کاری و پایان کار' },
  { title: 'تکمیل پروژه', desc: 'تحویل نهایی پروژه به کارفرما' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="درباره راه گستر ولاش"
        subtitle="بیش از ۲۴ سال فعالیت مستمر در پروژه‌های عمرانی و زیرساختی با تکیه بر مدیریت باتجربه و پرسنل فنی متخصص"
        image="https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'درباره ما' }]}
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
                    {stat.value.toLocaleString('fa-IR')}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white/80">{stat.label}</p>
                {stat.sublabel && <p className="text-xs text-white/40 mt-0.5">{stat.sublabel}</p>}
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
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="مهندسان راه گستر ولاش"
                  className="w-full h-[440px] object-cover img-hover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-xl font-bold">۱۳۷۹</p>
                <p className="text-xs text-white/80 mt-0.5">سال تأسیس</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                معرفی شرکت
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                مجری پروژه‌های عمرانی با تجربه و توان فنی
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                شرکت راه گستر ولاش با بیش از ۲۴ سال فعالیت مستمر در پروژه‌های عمرانی و
                ساختمانی، از مدیریت باتجربه، پرسنل فنی متخصص، ماشین‌آلات ساختمانی تخصصی
                و صلاحیت‌های پیمانکاری حرفه‌ای بهره‌مند است.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                این شرکت در زمینه اجرای پروژه‌های راه‌سازی، ابنیه، زیرساخت‌های شهری،
                آب و فاضلاب و پروژه‌های تخصصی عمرانی دارای سابقه اجرایی مستند است.
                راه گستر ولاش پروژه‌ها را از مرحله پایگاه‌سازی تا تکمیل نهایی مدیریت
                می‌کند.
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
              <h2 className="text-2xl font-bold text-navy">تاریخچه و تجربه</h2>
            </div>
            <p className="text-base text-steel leading-relaxed">
              فعالیت شرکت از سال ۱۳۷۹ آغاز شده و در طول بیش از دو دهه فعالیت مستمر،
              پروژه‌های متعددی در حوزه راه و ترابری، ابنیه و ساختمان، پروژه‌های مسکونی،
              زیرساخت‌های شهری و پروژه‌های تخصصی اجرا کرده است. تجربه شرکت شامل
              پروژه‌هایی در مناطق مختلف ایران از جمله قم، تهران، گیلان، کردستان،
              سیستان و بلوچستان و مناطق مرزی است.
            </p>
          </div>
        </div>
      </section>

      {/* Project lifecycle */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              چرخه اجرای پروژه
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              مدیریت کامل از پایگاه‌سازی تا تحویل
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              راه گستر ولاش تجربه مدیریت پروژه‌ها را در تمام مراحل اجرایی دارد
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectPhases.map((phase, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 p-5 bg-light-gray rounded-lg border border-border hover:border-accent/30 transition-colors`}
              >
                <span className="shrink-0 w-8 h-8 bg-navy text-white text-sm font-bold rounded-md flex items-center justify-center tabular-nums">
                  {(i + 1).toLocaleString('fa-IR')}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">{phase.title}</h3>
                  <p className="mt-1 text-xs text-steel">{phase.desc}</p>
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
              <h2 className="text-2xl font-bold text-navy">حوزه‌های تخصصی</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
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
                <ChevronLeft className="w-4 h-4 text-steel group-hover:text-accent transition-all group-hover:-translate-x-1" />
              </Link>
            ))}
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
                title: 'رویکرد مدیریتی',
                desc: 'مدیریت پروژه با تمرکز بر کیفیت، زمان‌بندی و کنترل هزینه، با نظارت بر تمام مراحل اجرایی از پایگاه‌سازی تا تحویل.',
              },
              {
                icon: Users,
                title: 'توان فنی و اجرایی',
                desc: 'پرسنل فنی متخصص و ماشین‌آلات تخصصی ساختمانی برای اجرای پروژه‌های راه‌سازی، RCC، تثبیت خاک و ساختمانی.',
              },
              {
                icon: Award,
                title: 'صلاحیت‌های پیمانکاری',
                desc: 'دارای رتبه ۱ راه و ترابری، رتبه ۳ ابنیه و ساختمان و رتبه ۴ آب از نظام پیش‌بندی کشور.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-6 bg-light-gray rounded-lg border border-border`}
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">{item.desc}</p>
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
              صلاحیت‌ها و گواهینامه‌ها
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-navy border border-border px-6 py-3 text-sm font-semibold rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              ماشین‌آلات و تجهیزات
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
