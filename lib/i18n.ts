import en from '@/locales/en';
import ru from '@/locales/ru';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = {
  readonly [key: string]: string | Dictionary;
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function t(locale: Locale, key: string): string {
  const value = key.split('.').reduce<unknown>((current, part) => {
    if (typeof current !== 'object' || current === null) return undefined;
    return (current as Record<string, unknown>)[part];
  }, dictionaries[locale]);
  if (typeof value !== 'string' || value.length === 0) {
    const message = `Missing "${locale}" translation for "${key}"`;
    if (process.env.NODE_ENV !== 'production') console.error(message);
    throw new Error(message);
  }
  return value;
}

export function localizePath(locale: Locale, path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const withoutLocale = path.replace(/^\/(?:en|ru)(?=\/|$)/, '') || '/';
  if (locale === 'en') return withoutLocale;
  return withoutLocale === '/' ? '/ru' : `/ru${withoutLocale}`;
}

export function localizedRoutePath(locale: Locale, path: string): string {
  if (path === '/') return locale === 'ru' ? '/ru' : '/';
  return locale === 'ru' ? `/ru${path}` : path;
}

export function routeAlternates(path: string) {
  const englishPath = localizedRoutePath('en', path);
  const russianPath = localizedRoutePath('ru', path);
  return {
    canonical: englishPath,
    languages: {
      en: englishPath,
      ru: russianPath,
      'x-default': englishPath,
    },
  };
}
