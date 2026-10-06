import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/layout/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rah Gostar Valash Co. | Road & Transportation Contractor and Civil Engineering Projects',
    template: '%s | Rah Gostar Valash',
  },
  description:
    'Rah Gostar Valash Co. has more than 24 years of experience in road construction, buildings, urban infrastructure, water and wastewater, and specialized civil engineering projects. Grade 1 Road & Transportation, Grade 3 Building Construction, Grade 4 Water.',
  keywords: [
    'Road Construction Company',
    'Road & Transportation Contractor',
    'Civil Engineering Company',
    'RCC pavement construction',
    'Cement Soil Stabilization',
    'Building Contractor',
    'Bridge Construction',
    'Civil Engineering Projects',
    'Rah Gostar Valash',
    'RCC',
    'Infrastructure',
    'Residential Projects',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rah Gostar Valash Co. | Road & Transportation Contractor and Civil Engineering Projects',
    description:
      'More than two decades of experience delivering civil engineering and infrastructure projects across roads, bridges, RCC, soil stabilization, buildings and residential construction.',
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
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="font-sans bg-background text-foreground antialiased">
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
