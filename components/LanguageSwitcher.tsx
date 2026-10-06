'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';

export default function LanguageSwitcher({
  locale,
  mobile = false,
}: {
  locale: Locale;
  mobile?: boolean;
}) {
  const pathname = usePathname();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;

    const currentPath =
      typeof window === 'undefined' ? pathname : window.location.pathname;
    const basePath = currentPath.replace(/^\/(?:en|ru)(?=\/|$)/, '') || '/';
    const targetPath =
      nextLocale === 'ru'
        ? basePath === '/'
          ? '/ru'
          : `/ru${basePath}`
        : basePath;

    if (typeof window !== 'undefined') {
      window.location.assign(
        `${targetPath}${window.location.search}${window.location.hash}`
      );
    }
  }

  const classes = mobile
    ? 'inline-flex items-center gap-3 border-t border-white/10 px-2 py-5 text-sm'
    : 'inline-flex shrink-0 items-center gap-2 border-l border-white/20 pl-4 text-xs';

  return (
    <div className={classes} aria-label={t(locale, 'language.switch')}>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        aria-current={locale === 'en' ? 'true' : undefined}
        aria-label={t(locale, 'language.english')}
        className={`transition-colors ${
          locale === 'en'
            ? 'font-semibold text-white'
            : 'text-white/55 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-white/35" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => switchLocale('ru')}
        aria-current={locale === 'ru' ? 'true' : undefined}
        aria-label={t(locale, 'language.russian')}
        className={`transition-colors ${
          locale === 'ru'
            ? 'font-semibold text-white'
            : 'text-white/55 hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  );
}
