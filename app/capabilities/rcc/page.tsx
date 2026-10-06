import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Zap, DollarSign, ThermometerSnowflake, ThermometerSun, Layers, Truck, Gauge, Shield, Wrench, TrendingDown } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'روسازی بتن غلتکی (RCC) | تکنولوژی اجرای بتن غلتکی',
  description:
    'اجرای روسازی بتن غلتکی RCC توسط شرکت راه گستر ولاش. بتن با اسلمپ صفر، اجرا با فینیشر آسفالت و غلتک‌های لرزه‌ای با مقاومت بالا و عمر مفید طولانی.',
};

const advantages = [
  { icon: Zap, title: 'سرعت اجرای بالا', desc: 'امکان اجرای سریع روسازی در حجم زیاد' },
  { icon: DollarSign, title: 'هزینه اجرای نسبتاً پایین', desc: 'مقرون‌به‌صرفه در مقایسه با روسازی بتنی معمول' },
  { icon: TrendingDown, title: 'مصرف کمتر سیمان', desc: 'کاهش مصرف سیمان نسبت به بتن معمولی' },
  { icon: ThermometerSun, title: 'مقاومت در اقلیم گرم', desc: 'عملکرد مناسب در شرایط دمای بالا' },
  { icon: ThermometerSnowflake, title: 'مقاومت در اقلیم سرد', desc: 'عملکرد مناسب در شرایط دمای پایین' },
  { icon: Wrench, title: 'بدون قالب‌بندی معمول', desc: 'عدم نیاز به قالب‌های مرسوم بتن‌ریزی' },
  { icon: Truck, title: 'اجرای با فینیشر آسفالت', desc: 'استفاده از فینیشر برای پخش بتن' },
  { icon: Gauge, title: 'تراکم با غلتک لرزه‌ای', desc: 'متراکم‌سازی با غلتک‌های ویبره‌ای' },
  { icon: Shield, title: 'عمر مفید طولانی', desc: 'کاهش نیاز به تعمیر و نگهداری' },
];

export default function RCCPage() {
  const rccProjects = projects.filter((p) => p.category === 'rcc');

  return (
    <>
      <PageHeader
        title="روسازی بتن غلتکی (RCC)"
        subtitle="تکنولوژی روسازی با بتن با اسلمپ صفر، اجرا با فینیشر آسفالت و متراکم‌کننده‌های لرزه‌ای"
        image="https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: 'توانمندی‌های فنی', href: '/capabilities' },
          { label: 'روسازی بتن غلتکی (RCC)' },
        ]}
      />

      {/* Technology explanation */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                تکنولوژی RCC
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                بتن غلتکی؛ روسازی مقاوم و اقتصادی
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                روسازی بتن غلتکی (Roller Compacted Concrete) نوعی روسازی بتنی است که
                با بتن بسیار خشک (با اسلمپ صفر) اجرا می‌شود. این بتن توسط فینیشر آسفالت
                پخش شده و با غلتک‌های لرزه‌ای متراکم می‌گردد.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                روش اجرای RCC مزایای متعددی از جمله سرعت اجرای بالا، هزینه نسبتاً پایین،
                مصرف کمتر سیمان نسبت به بتن معمولی و مقاومت بالا در اقلیم‌های گرم و سرد
                را به همراه دارد. این تکنولوژی به دلیل عدم نیاز به قالب‌بندی معمول و
                امکان استفاده از ماشین‌آلات راه‌سازی، برای پروژه‌های بزرگ زیرساختی
                مناسب است.
              </p>
            </div>

            <div className="reveal reveal-delay-1 relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1145465/pexels-photo-1145465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="اجرای بتن غلتکی RCC"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">اسلمپ صفر</p>
                <p className="text-xs text-white/80 mt-1">بتن بسیار خشک</p>
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
              مزایا
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              مزایای تکنولوژی RCC
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
                <h3 className="text-base font-bold text-navy">{adv.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{adv.desc}</p>
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
              مراحل اجرای RCC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '۰۱', title: 'تهیه بتن با اسلمپ صفر', desc: 'اختلاط بتن بسیار خشک با نسبت آب به سیمان پایین' },
              { num: '۰۲', title: 'پخش با فینیشر آسفالت', desc: 'انتقال و پخش بتن با ماشین‌آلات راه‌سازی' },
              { num: '۰۳', title: 'تراکم با غلتک لرزه‌ای', desc: 'متراکم‌سازی بتن با غلتک‌های ویبره‌ای' },
              { num: '۰۴', title: 'پرداخت و عمل‌آوری', desc: 'پرداخت سطح نهایی و عمل‌آوری بتن' },
            ].map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative`}>
                <div className="text-4xl font-bold text-accent/20 tabular-nums">{step.num}</div>
                <h3 className="mt-2 text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{step.desc}</p>
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
              تجربه اجرایی
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight text-balance">
              تجربه راه گستر ولاش در اجرای RCC
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
                  <span className="text-xs text-accent font-semibold mb-1">پروژه RCC</span>
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
            مشاهده همه پروژه‌ها
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
