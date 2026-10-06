import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function PageHeader({
  title,
  subtitle,
  image,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy/90" />
      </div>

      <div className="relative z-10 container-rgv">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronLeft className="w-3 h-3" />
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-white transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{bc.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronLeft className="w-3 h-3" />}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance text-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl text-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
