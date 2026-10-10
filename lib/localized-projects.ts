import {
  projectTranslations,
  categoryLabelsRu,
  statusLabelsRu,
} from '@/locales/projects-ru';
import {
  categoryLabels,
  type Project,
  type ProjectTranslation,
} from '@/lib/projects';
import type { Locale } from '@/lib/i18n';

function assertTranslationCompleteness(
  project: Project,
  translation: ProjectTranslation,
): void {
  if (
    (project.scope?.length ?? 0) !== (translation.scope?.length ?? 0) ||
    (project.facts?.length ?? 0) !== (translation.facts?.length ?? 0) ||
    Boolean(project.employer) !== Boolean(translation.employer) ||
    Boolean(project.location) !== Boolean(translation.location) ||
    Boolean(project.statusLabel) !== Boolean(translation.statusLabel)
  ) {
    throw new Error(`Incomplete Russian project translation for "${project.slug}"`);
  }
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === 'en') return project;

  const translation = projectTranslations[project.slug];
  if (!translation) {
    throw new Error(`Missing Russian project translation for "${project.slug}"`);
  }

  assertTranslationCompleteness(project, translation);

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
      ongoing: 'In progress',
      unknown: '',
    }[status];
  }
  const label = statusLabelsRu[status];
  if (!label) throw new Error(`Missing Russian status label for "${status}"`);
  return label;
}
