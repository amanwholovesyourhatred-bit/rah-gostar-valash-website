import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import { LocaleProvider } from '@/lib/LocaleProvider';
import { isLocale, localizedRoutePath, t, type Locale } from '@/lib/i18n';

type LocaleParams = { locale: string };

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Metadata {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const rootEn = localizedRoutePath('en', '/');
  const rootRu = localizedRoutePath('ru', '/');

  return {
    metadataBase: new URL('https://rahgostarvalash.ir'),
    title: {
      default: t(locale, 'site.title'),
      template: t(locale, 'site.titleTemplate'),
    },
    description: t(locale, 'site.description'),
    keywords: t(locale, 'site.keywords'),
    openGraph: {
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      title: t(locale, 'site.title'),
      description: t(locale, 'site.description'),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: rootEn,
      languages: {
        en: rootEn,
        ru: rootRu,
        'x-default': rootEn,
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <LocaleProvider locale={locale}>
      <ScrollReveal />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </LocaleProvider>
  );
}
