'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { localizePath } from '@/lib/i18n';
import { useLocale } from '@/lib/LocaleProvider';

type LocalizedLinkProps = PropsWithChildren<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    Pick<LinkProps, 'href' | 'replace' | 'scroll' | 'prefetch' | 'shallow' | 'locale'>
>;

export default function LocalizedLink({
  href,
  children,
  ...props
}: LocalizedLinkProps) {
  const locale = useLocale();
  const localizedHref =
    typeof href === 'string' ? localizePath(locale, href) : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
