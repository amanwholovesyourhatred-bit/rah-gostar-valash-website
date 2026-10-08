import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ProjectsList from '@/components/projects/ProjectsList';
import CTASection from '@/components/sections/CTASection';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/projects',
    t(params.locale, 'projects.metadataTitle'),
    t(params.locale, 'projects.metadataDescription'),
  );
}

export default function ProjectsPage({
  params,
  searchParams,
}: {
  params: { locale: Locale };
  searchParams?: { category?: string | string[] };
}) {
  const { locale } = params;
  const categoryParam = searchParams?.category;
  const initialCategory = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'projects.pageTitle')}
        subtitle={t(locale, 'projects.pageSubtitle')}
        image="/images/projects/roads/pardisan-parand-asphalt-02.webp"
        breadcrumbs={[{ label: t(locale, 'projects.breadcrumb') }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <ProjectsList locale={locale} initialCategory={initialCategory} />
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
