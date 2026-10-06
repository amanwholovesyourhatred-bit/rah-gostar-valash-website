import Link from '@/components/LocalizedLink';
import { ChevronRight, MapPin, Calendar, Building2 } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';
import { localizeProject } from '@/lib/localized-projects';
import { t, type Locale } from '@/lib/i18n';

export default function FeaturedProjects({ locale }: { locale: Locale }) {
  const featured = getFeaturedProjects().map((project) =>
    localizeProject(project, locale)
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-rgv">
        {/* Section header */}
        <div className="reveal flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'home.featuredProjectsEyebrow')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'home.featuredProjectsHeading')}
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              {t(locale, 'home.featuredProjectsDescription')}
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 text-navy hover:text-accent font-semibold text-base transition-colors group"
          >
            {t(locale, 'home.viewAllProjects')}
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects grid — featured layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group block bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'h-64 lg:h-[440px]' : 'h-56'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-5">
                  <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded mb-3">
                    {project.categoryLabel}
                  </span>
                  <h3 className={`font-bold text-white leading-snug ${i === 0 ? 'text-xl md:text-2xl' : 'text-base'}`}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-steel">
                  {project.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {project.location}
                    </span>
                  )}
                  {project.employer && (
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-accent" />
                      {project.employer}
                    </span>
                  )}
                </div>
                <span
                  className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded ${
                    project.status === 'completed'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {project.statusLabel}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
