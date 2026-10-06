import type { Metadata } from 'next';
import { routeAlternates, type Locale } from './i18n';

const siteOrigin = 'https://rahgostarvalash.ir';

export function localizedMetadata(
  locale: Locale,
  route: string,
  title: string,
  description: string,
): Metadata {
  const alternates = routeAlternates(route);
  const canonical =
    locale === 'ru' ? alternates.languages.ru : alternates.languages.en;

  return {
    title: title.includes('|') ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: alternates.languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: new URL(canonical, siteOrigin).toString(),
      title,
      description,
    },
  };
}
