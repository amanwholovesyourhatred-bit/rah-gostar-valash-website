import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, TrendingUp, Gauge, Layers, Clock, DollarSign, Wrench, Mountain, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'تثبیت خاک با سیمان | تثبیت درجای خاک با دستگاه WR/WM',
  description:
    'تثبیت خاک با سیمان توسط دستگاه‌های WR/WM در شرکت راه گستر ولاش. افزایش مقاومت خاک، کاهش تورم و بهبود مشخصات پلاستیسیته با سرعت اجرای حداقل ۵۰۰ متر در روز.',
};

const benefits = [
  { icon: TrendingUp, title: 'افزایش مقاومت خاک', desc: 'افزایش چشمگیر مقاومت بستر' },
  { icon: Mountain, title: 'کاهش پتانسیل تورم', desc: 'بهبود رفتار خاک‌های متورم‌شونده' },
  { icon: ShieldCheck, title: 'بهبود مقاومت برشی', desc: 'افزایش مقاومت برشی خاک' },
  { icon: Layers, title: 'بهبود پلاستیسیته', desc: 'بهبود مشخصات پلاستیسیته خاک' },
  { icon: Clock, title: 'سرعت اجرای بیشتر', desc: 'امکان اجرای حداقل ۵۰۰ متر در روز' },
  { icon: DollarSign, title: 'کاهش مصرف مصالح', desc: 'بهینه‌سازی مصرف مصالح ساخت' },
  { icon: Gauge, title: 'کاهش زمان پروژه', desc: 'تسریع روند اجرای پروژه' },
  { icon: Wrench, title: 'مزیت اقتصادی', desc: 'صرفه‌جویی حدودی ۳۰–۴۵٪ در مقایسه با روسازی آسفالتی منعطف (بر اساس مطالعه فنی شرکت)' },
];

export default function SoilStabilizationPage() {
  const stabProjects = projects.filter((p) => p.category === 'soil-stab');

  return (
    <>
      <PageHeader
        title="تثبیت خاک با سیمان"
        subtitle="تثبیت درجای خاک با دستگاه‌های تخصصی WR/WM برای بهبود مشخصات ژوتکنیکی بستر راه"
        image="https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: 'توانمندی‌های فنی', href: '/capabilities' },
          { label: 'تثبیت خاک با سیمان' },
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
                  alt="تثبیت خاک با سیمان"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 bg-navy text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold text-accent">۵۰۰+ متر</p>
                <p className="text-xs text-white/80 mt-1">تثبیت در روز (حداقل)</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                تکنولوژی تثبیت
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                تثبیت درجای خاک با دستگاه‌های WR/WM
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                تثبیت خاک با سیمان روشی است که در آن سیمان مستقیماً با خاک بستر به‌صورت
                درجا مخلوط می‌شود. این عملیات با استفاده از دستگاه‌های تخصصی تثبیت
                نظیر WR (Wirtgen Recycler) و WM انجام می‌گیرد.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                تثبیت با سیمان باعث افزایش مقاومت خاک، کاهش پتانسیل تورم، بهبود مقاومت
                برشی و بهبود مشخصات پلاستیسیته می‌شود. این روش با سرعت اجرای بالا و
                کاهش مصرف مصالح، زمان پروژه را کاهش می‌دهد.
              </p>

              <div className="mt-6 p-4 bg-light-gray rounded-lg border-r-4 border-accent">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">ظرفیت اجرایی:</strong> با ماشین‌آلات تثبیت
                  شرکت، امکان اجرای حداقل حدود ۵۰۰ متر طول در روز با عرض ۲٫۷ متر وجود دارد.
                </p>
              </div>

              <div className="mt-4 p-4 bg-amber-50 rounded-lg border-r-4 border-amber-400">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">یافته مطالعه فنی شرکت:</strong> مطالعه فنی
                  شرکت تخمین می‌زند که روسازی تثبیت‌شده با سیمان می‌تواند در شرایط مورد
                  تحلیل، حدود ۳۰–۴۵٪ صرفه‌جویی در مقایسه با روسازی آسفالتی منعطف داشته
                  باشد. این رقم نتیجه مطالعه داخلی شرکت است و به‌عنوان ضمانت جهانی ارائه
                  نمی‌شود.
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
              مزایا
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              مزایای تثبیت خاک با سیمان
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
                <h3 className="text-sm font-bold text-navy">{benefit.title}</h3>
                <p className="mt-1.5 text-xs text-steel leading-relaxed">{benefit.desc}</p>
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
              پروژه‌های تثبیت خاک راه گستر ولاش
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
                  <span className="text-xs text-accent font-semibold mb-1">تثبیت خاک</span>
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
