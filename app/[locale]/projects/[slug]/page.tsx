import Link from '@/components/LocalizedLink';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  MapPin,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Wrench,
} from 'lucide-react';
import { projects, getProjectBySlug, getRelatedProjects } from '@/lib/projects';
import { localizeProject } from '@/lib/localized-projects';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Metadata {
  const sourceProject = getProjectBySlug(params.slug);
  if (!sourceProject) return { title: t(params.locale, 'projectDetail.notFound') };
  const project = localizeProject(sourceProject, params.locale);

  return localizedMetadata(
    params.locale,
    `/projects/${project.slug}`,
    project.title,
    project.intro || `${project.categoryLabel} — ${project.title}`,
  );
}

export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const sourceProject = getProjectBySlug(params.slug);
  if (!sourceProject) notFound();
  const project = localizeProject(sourceProject, params.locale);

  const related = getRelatedProjects(project, 3).map((relatedProject) =>
    localizeProject(relatedProject, params.locale)
  );

  const infoItems = [
    { icon: Building2, label: 'employer', value: project.employer },
    { icon: Wrench, label: 'consultant', value: project.consultant },
    { icon: MapPin, label: 'location', value: project.location },
    { icon: Calendar, label: 'startDate', value: project.startDate },
    { icon: Clock, label: 'contractDuration', value: project.duration },
    { icon: DollarSign, label: 'contractValue', value: project.contractValue },
  ].filter((item) => item.value);

  return (
    <>
      {/* Hero with project image */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/90" />
        </div>

        <div className="relative z-10 container-rgv">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t(params.locale, 'projectDetail.home')}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/projects" className="hover:text-white transition-colors">{t(params.locale, 'projectDetail.projects')}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{project.categoryLabel}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded">
              {project.categoryLabel}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded ${
                project.status === 'completed'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-amber-500/20 text-amber-300'
              }`}
            >
              {project.status === 'completed' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {project.statusLabel}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-4xl text-balance text-shadow-lg">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project info grid */}
      <section className="py-12 bg-light-gray border-b border-border">
        <div className="container-rgv">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {infoItems.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border border-border"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-xs font-medium text-steel">{t(params.locale, `projectDetail.${item.label}`)}</span>
                </div>
                <p className="text-sm font-semibold text-navy leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              {project.intro && (
                <div className="reveal">
                  <h2 className="text-2xl font-bold text-navy mb-4 pb-2 border-b-2 border-accent inline-block">
                    {t(params.locale, 'projectDetail.overview')}
                  </h2>
                  <p className="text-base text-steel leading-relaxed">{project.intro}</p>
                </div>
              )}

              {/* Scope */}
              {project.scope && project.scope.length > 0 && (
                <div className="reveal reveal-delay-1">
                  <h2 className="text-2xl font-bold text-navy mb-4 pb-2 border-b-2 border-accent inline-block">
                    {t(params.locale, 'projectDetail.scopeOfWork')}
                  </h2>
                  <ul className="space-y-3">
                    {project.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        <span className="text-base text-steel leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="reveal reveal-delay-2">
                  <h2 className="text-2xl font-bold text-navy mb-4 pb-2 border-b-2 border-accent inline-block">
                    {t(params.locale, 'projectDetail.executionChallenges')}
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-base text-steel leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <div className="reveal reveal-delay-3">
                  <h2 className="text-2xl font-bold text-navy mb-4 pb-2 border-b-2 border-accent inline-block">
                    {t(params.locale, 'projectDetail.technicalSolutions')}
                  </h2>
                  <ul className="space-y-3">
                    {project.solutions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-base text-steel leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="reveal reveal-delay-4">
                  <h2 className="text-2xl font-bold text-navy mb-4 pb-2 border-b-2 border-accent inline-block">
                    {t(params.locale, 'projectDetail.gallery')}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-lg h-48 md:h-64"
                      >
                        <Image
                          src={img}
                          alt={t(params.locale, 'projectDetail.imageAlt')
                            .replace('{title}', project.title)
                            .replace('{number}', (i + 1).toLocaleString('en-US'))}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover img-hover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Project summary card */}
              <div className="bg-light-gray rounded-lg p-6 border border-border sticky top-28">
                <h3 className="text-sm font-bold text-navy mb-4 pb-2 border-b border-border">
                  {t(params.locale, 'projectDetail.projectInformation')}
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-steel">{t(params.locale, 'projectDetail.category')}</dt>
                    <dd className="font-semibold text-navy">{project.categoryLabel}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-steel">{t(params.locale, 'projectDetail.status')}</dt>
                    <dd className="font-semibold text-navy">{project.statusLabel}</dd>
                  </div>
                  {project.employer && (
                    <div className="flex justify-between text-sm gap-4">
                      <dt className="text-steel shrink-0">{t(params.locale, 'projectDetail.employer')}</dt>
                      <dd className="font-semibold text-navy text-left">{project.employer}</dd>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex justify-between text-sm gap-4">
                      <dt className="text-steel shrink-0">{t(params.locale, 'projectDetail.location')}</dt>
                      <dd className="font-semibold text-navy text-left">{project.location}</dd>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-steel">{t(params.locale, 'projectDetail.contractDuration')}</dt>
                      <dd className="font-semibold text-navy">{project.duration}</dd>
                    </div>
                  )}
                </dl>

                <Link
                  href="/projects"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-4 py-3 text-sm font-semibold rounded-md transition-colors"
                >
                  {t(params.locale, 'projectDetail.backToProjects')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-xl font-bold text-navy mb-6">{t(params.locale, 'projectDetail.relatedProjects')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/projects/${rp.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover img-hover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-accent font-medium">{rp.categoryLabel}</span>
                      <h3 className="mt-1 text-sm font-bold text-navy leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection locale={params.locale} />
    </>
  );
}
