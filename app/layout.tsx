import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/layout/ScrollReveal';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'شرکت راه گستر ولاش | پیمانکار راه و ترابری و پروژه‌های عمرانی',
    template: '%s | راه گستر ولاش',
  },
  description:
    'شرکت راه گستر ولاش با بیش از ۲۴ سال تجربه در اجرای پروژه‌های راه‌سازی، ابنیه، زیرساخت‌های شهری، آب و فاضلاب و پروژه‌های تخصصی عمرانی. رتبه ۱ راه و ترابری، رتبه ۳ ابنیه و ساختمان، رتبه ۴ آب.',
  keywords: [
    'شرکت راه سازی',
    'پیمانکار راه و ترابری',
    'شرکت عمرانی',
    'اجرای بتن غلتکی RCC',
    'تثبیت خاک با سیمان',
    'پیمانکار ابنیه',
    'ساخت پل',
    'پروژه‌های عمرانی',
    'راه گستر ولاش',
    'RCC',
    'زیرساخت',
    'پروژه‌های مسکونی',
  ],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    title: 'شرکت راه گستر ولاش | پیمانکار راه و ترابری و پروژه‌های عمرانی',
    description:
      'بیش از دو دهه تجربه در اجرای پروژه‌های عمرانی و زیرساختی. راه‌سازی، پل، RCC، تثبیت خاک، ابنیه و پروژه‌های مسکونی.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-fa bg-background text-foreground antialiased">
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
