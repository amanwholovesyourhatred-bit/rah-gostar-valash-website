'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { mainNav } from '@/lib/site-data';
import { t, type Locale } from '@/lib/i18n';
import LocalizedLink from '@/components/LocalizedLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from './Logo';

const navTranslationKeys: Record<string, string> = {
  '/': 'nav.home',
  '/about': 'nav.about',
  '/expertise': 'nav.expertise',
  '/projects': 'nav.projects',
  '/capabilities': 'nav.capabilities',
  '/equipment': 'nav.equipment',
  '/qualifications': 'nav.qualifications',
  '/contact': 'nav.contact',
};

export default function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname?.replace(/^\/en(?=\/|$)/, '') || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-navy py-2'
            : 'border-b border-white/10 bg-navy/90 py-3'
        }`}
      >
        <div className="container-rgv">
          <div className="flex items-center justify-between gap-4">
            <LocalizedLink
              href="/"
              className="shrink-0"
              aria-label={t(locale, 'nav.homeLink')}
            >
              <Logo variant="light" />
            </LocalizedLink>

            <nav
              aria-label={t(locale, 'nav.mainNavigation')}
              className="hidden min-w-0 items-center gap-0.5 xl:flex"
            >
              {mainNav
                .filter((item) => item.href !== '/')
                .map((item) => {
                  const active =
                    currentPath === item.href ||
                    currentPath.startsWith(`${item.href}/`);
                  return (
                    <LocalizedLink
                      key={item.href}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative whitespace-nowrap px-2 py-3 text-xs font-medium transition-colors 2xl:text-sm after:absolute after:inset-x-2 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform ${
                        active
                          ? 'text-white after:scale-x-100'
                          : 'text-white/75 hover:text-white hover:after:scale-x-100'
                      }`}
                    >
                      {t(locale, navTranslationKeys[item.href])}
                    </LocalizedLink>
                  );
                })}
              <LanguageSwitcher locale={locale} />
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white transition-colors hover:text-accent xl:hidden"
              aria-label={
                mobileOpen
                  ? t(locale, 'nav.closeMenu')
                  : t(locale, 'nav.openMenu')
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 overflow-y-auto border-t border-white/10 bg-navy px-6 pt-20"
          onClick={(event) =>
            event.target === event.currentTarget && setMobileOpen(false)
          }
        >
          <nav
            aria-label={t(locale, 'nav.mobileNavigation')}
            className="flex flex-col"
          >
            {mainNav.map((item) => {
              const active =
                currentPath === item.href ||
                (item.href !== '/' && currentPath.startsWith(`${item.href}/`));
              return (
                <LocalizedLink
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-white/10 px-2 py-4 text-base font-medium transition-colors ${
                    active ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {t(locale, navTranslationKeys[item.href])}
                  <ChevronRight className="h-5 w-5 opacity-50" />
                </LocalizedLink>
              );
            })}
            <LanguageSwitcher locale={locale} mobile />
          </nav>
        </div>
      </div>
    </>
  );
}
