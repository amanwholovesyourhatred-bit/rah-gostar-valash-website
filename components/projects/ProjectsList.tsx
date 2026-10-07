'use client';

import { useState, useMemo } from 'react';
import Link from '@/components/LocalizedLink';
import Image from 'next/image';
import { MapPin, Building2, ChevronRight } from 'lucide-react';
import { projects, type ProjectCategory } from '@/lib/projects';
import { localizeProject, localizedCategoryLabel } from '@/lib/localized-projects';
import { t, type Locale } from '@/lib/i18n';

const allCategories: (ProjectCategory | 'all')[] = [
  'all',
  'road',
  'bridge',
  'rcc',
  'soil-stab',
  'building',
  'residential',
  'precast',
  'urban-infra',
  'water',
];

export default function ProjectsList({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeCategory === cat
                ? 'bg-navy text-white'
                : 'bg-light-gray text-steel hover:bg-secondary hover:text-navy'
            }`}
          >
            {cat === 'all'
              ? t(locale, 'projects.all')
              : localizedCategoryLabel(locale, cat)}
            {cat !== 'all' && (
              <span className="mr-1.5 text-xs opacity-60">
                ({projects.filter((p) => p.category === cat).length.toLocaleString('en-US')})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-steel">
          <p>{t(locale, 'projects.noProjectsAvailable')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sourceProject, i) => {
            const project = localizeProject(sourceProject, locale);
            return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group block bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover img-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {project.categoryLabel}
                </span>
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded ${
                    project.status === 'completed'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-amber-500/90 text-white'
                  }`}
                >
                  {project.statusLabel}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-navy leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <div className="mt-3 space-y-1.5">
                  {project.employer && (
                    <div className="flex items-center gap-2 text-xs text-steel">
                      <Building2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">{project.employer}</span>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center gap-2 text-xs text-steel">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                    {t(locale, 'projects.viewProject')}
                  </span>
                  <ChevronRight className="w-4 h-4 text-navy group-hover:text-accent transition-all group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
          })}
        </div>
      )}
    </div>
  );
}
