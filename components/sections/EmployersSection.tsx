import { employers } from '@/lib/site-data';

export default function EmployersSection() {
  return (
    <section className="py-16 md:py-20 bg-light-gray border-y border-border">
      <div className="container-rgv">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">
            کارفرمایان و سازمان‌ها
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-navy leading-tight text-balance">
            سازمان‌های کارفرمای پروژه‌ها
          </h2>
          <p className="mt-3 text-sm text-steel leading-relaxed">
            نمونه‌ای از سازمان‌ها و نهادهایی که در سابقه پروژه‌های راه گستر ولاش حضور دارند
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {employers.map((emp) => (
            <div
              key={emp.name}
              className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg border border-border hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="text-sm font-semibold text-navy leading-snug">{emp.name}</p>
              <span className="mt-2 text-xs text-accent font-medium">{emp.type}</span>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-2 mt-8 text-center text-xs text-muted-foreground">
          نام سازمان‌ها بر اساس سابقه پروژه‌های شرکت درج شده و به معنای تأیید رسمی نیست.
        </p>
      </div>
    </section>
  );
}
