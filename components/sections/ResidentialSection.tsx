import Link from 'next/link';
import { ChevronLeft, Home, Building2, TrendingUp } from 'lucide-react';

export default function ResidentialSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-rgv">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="reveal lg:col-span-1">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              تجربه مسکونی
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              سابقه ساخت بیش از ۱۰۰۰ واحد مسکونی
            </h2>
            <p className="mt-5 text-base text-steel leading-relaxed">
              شرکت راه گستر ولاش در حوزه ساخت مسکن سابقه اجرای حدود ۱۰۰۰ واحد مسکونی
              و بیش از ۱٫۵ میلیون متر مربع ساخت در تهران و قم را دارد.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <Home className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">حدود ۱۰۰۰ واحد مسکونی</p>
                  <p className="text-xs text-steel mt-0.5">پروژه‌های مسکن ملی و مسکن مهر</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">~۱٫۵ میلیون متر مربع</p>
                  <p className="text-xs text-steel mt-0.5">ساخت مسکونی در تهران و قم</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">حدود ۸۰٪ پیشرفت فیزیکی</p>
                  <p className="text-xs text-steel mt-0.5">پروژه‌های مسکونی جاری در زمان تدوین پروفایل</p>
                </div>
              </div>
            </div>

            <Link
              href="/expertise#residential"
              className="mt-8 inline-flex items-center gap-2 text-navy hover:text-accent font-semibold text-base transition-colors group"
            >
              مشاهده پروژه‌های مسکونی
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* Right: Image grid */}
          <div className="reveal reveal-delay-1 lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img
                src="https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="پروژه مسکونی در حال ساخت"
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80 mt-12">
              <img
                src="https://images.pexels.com/photos/34360419/pexels-photo-34360419.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="مجتمع مسکونی"
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img
                src="https://images.pexels.com/photos/16453466/pexels-photo-16453466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ساخت سازه‌های مسکونی"
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80 mt-12">
              <img
                src="https://images.pexels.com/photos/5335018/pexels-photo-5335018.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عملیات ساختمانی"
                className="w-full h-full object-cover img-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
