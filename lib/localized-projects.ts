import {
  projectTranslations,
  categoryLabelsRu,
  statusLabelsRu,
} from '@/locales/projects-ru';
import {
  categoryLabels,
  type Project,
} from '@/lib/projects';
import type { Locale } from '@/lib/i18n';

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === 'en') return project;

  const translation = projectTranslations[project.slug];
  if (!translation) {
    throw new Error(`Missing Russian project translation for "${project.slug}"`);
  }

  if (
    (project.scope?.length ?? 0) !== translation.scope.length ||
    (project.challenges?.length ?? 0) !== (translation.challenges?.length ?? 0) ||
    (project.solutions?.length ?? 0) !== (translation.solutions?.length ?? 0)
  ) {
    throw new Error(`Incomplete Russian project translation for "${project.slug}"`);
  }

  return {
    ...project,
    ...translation,
  };
}

export function localizedCategoryLabel(
  locale: Locale,
  category: Project['category'],
): string {
  if (locale === 'en') return categoryLabels[category];
  const label = categoryLabelsRu[category];
  if (!label) throw new Error(`Missing Russian category label for "${category}"`);
  return label;
}

export function localizedStatusLabel(
  locale: Locale,
  status: Project['status'],
): string {
  if (locale === 'en') {
    return {
      completed: 'Completed',
      ongoing: 'Ongoing',
      unknown: 'Unknown',
    }[status];
  }
  const label = statusLabelsRu[status];
  if (!label) throw new Error(`Missing Russian status label for "${status}"`);
  return label;
}
