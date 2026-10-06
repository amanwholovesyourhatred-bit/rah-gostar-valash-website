'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { mainNav } from '@/lib/site-data';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-navy/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-rgv">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Logo variant="light" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 bg-accent hover:bg-cyan-600 text-white px-4 py-2 text-sm font-semibold rounded-md transition-colors"
              >
                مشاهده پروژه‌ها
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="منو"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/95 backdrop-blur-md pt-20 px-6 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setMobileOpen(false)}
        >
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-white bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.title}
                  <ChevronLeft className="w-5 h-5 opacity-50" />
                </Link>
              );
            })}
            <Link
              href="/projects"
              className="mt-4 flex items-center justify-center gap-2 bg-accent hover:bg-cyan-600 text-white px-4 py-3 text-base font-semibold rounded-lg transition-colors"
            >
              مشاهده پروژه‌ها
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
