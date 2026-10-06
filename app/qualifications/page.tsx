import type { Metadata } from 'next';
import { Award, ShieldCheck, FileText, BadgeCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'صلاحیت‌ها و گواهینامه‌ها | راه گستر ولاش',
  description:
    'صلاحیت‌های پیمانکاری راه گستر ولاش: رتبه ۱ راه و ترابری، رتبه ۳ ابنیه و ساختمان، رتبه ۴ آب. گواهینامه‌ها و صلاحیت‌های رسمی.',
};

const qualifications = [
  {
    grade: '۱',
    field: 'راه و ترابری',
    fieldEn: 'Road & Transportation',
    desc: 'پایه ۱ — بالاترین رتبه پیمانکاری راه و ترابری',
    color: 'from-navy to-navy-light',
  },
  {
    grade: '۳',
    field: 'ابنیه و ساختمان',
    fieldEn: 'Building Construction',
    desc: 'پایه ۳ — پیمانکاری ابنیه و ساختمان',
    color: 'from-blue to-blue-light',
  },
  {
    grade: '۴',
    field: 'آب',
    fieldEn: 'Water',
    desc: 'پایه ۴ — پیمانکاری آب',
    color: 'from-cyan to-blue-light',
  },
];

export default function QualificationsPage() {
  return (
    <>
      <PageHeader
        title="صلاحیت‌ها و گواهینامه‌ها"
        subtitle="صلاحیت‌های پیمانکاری رسمی راه گستر ولاش از نظام پیش‌بندی کشور"
        image="https://images.pexels.com/photos/8961298/pexels-photo-8961298.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'صلاحیت‌ها و گواهینامه‌ها' }]}
      />

      {/* Qualification cards */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              رتبه‌های پیمانکاری
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              صلاحیت‌های پیمانکاری رسمی
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              رتبه‌های زیر از نظام پیش‌بندی کشور برای شرکت راه گستر ولاش صادر شده است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((qual, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-lg border border-border p-8 text-center bg-white hover:shadow-xl transition-shadow`}
              >
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${qual.color} opacity-10 rounded-bl-full`} />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-4">
                    <span className="text-3xl font-bold text-accent tabular-nums">{qual.grade}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{qual.field}</h3>
                  <p className="text-xs text-accent font-medium mt-1">{qual.fieldEn}</p>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{qual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate gallery */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal mb-10">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">گالری گواهینامه‌ها</h2>
            </div>
            <p className="text-sm text-steel leading-relaxed max-w-2xl">
              تصاویر گواهینامه‌ها و مدارک صلاحیت پس از تأیید نهایی و حذف اطلاعات حساس
              در این بخش قرار خواهند گرفت.
            </p>
          </div>

          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[3/4] bg-white rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center p-6 text-center"
              >
                <FileText className="w-10 h-10 text-border mb-3" />
                <p className="text-xs text-muted-foreground">
                  تصویر گواهینامه {(n).toLocaleString('fa-IR')}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  پس از تأیید نهایی درج می‌شود
                </p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2 mt-8 p-5 bg-amber-50 rounded-lg border-r-4 border-amber-400">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-steel leading-relaxed">
                در انتشار اسناد حقوقی و گواهینامه‌ها، از درج شماره‌های شناسایی شخصی،
                امضاها و اطلاعات حساس ثبت خودداری می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional credibility */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="reveal p-6 bg-light-gray rounded-lg border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <BadgeCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy">صلاحیت معتبر</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  رتبه‌های پیمانکاری شرکت از نظام پیش‌بندی کشور صادر شده و نشان‌دهنده
                  صلاحیت رسمی برای اجرای پروژه‌های دولتی و عمومی است.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 p-6 bg-light-gray rounded-lg border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy">تجربه مستند</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  سابقه اجرایی بیش از ۲۴ سال در پروژه‌های راه‌سازی، ابنیه، مسکونی و
                  زیرساختی، پشتوانه صلاحیت‌های شرکت است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
