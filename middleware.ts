import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  if (/^\/en(?:\/|$)/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    return NextResponse.redirect(url);
  }

  if (/^\/ru(?:\/|$)/.test(pathname)) {
    requestHeaders.set('x-locale', 'ru');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  requestHeaders.set('x-locale', 'en');
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? '/en' : `/en${pathname}`;
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
