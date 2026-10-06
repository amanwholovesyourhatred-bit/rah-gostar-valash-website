import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import EquipmentSection from '@/components/sections/EquipmentSection';
import ResidentialSection from '@/components/sections/ResidentialSection';
import EmployersSection from '@/components/sections/EmployersSection';
import CTASection from '@/components/sections/CTASection';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  return localizedMetadata(
    params.locale,
    '/',
    t(params.locale, 'home.metadataTitle'),
    t(params.locale, 'home.metadataDescription'),
  );
}

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <>
      <Hero locale={locale} />
      <AboutSection locale={locale} />
      <CapabilitiesSection locale={locale} />
      <FeaturedProjects locale={locale} />
      <EquipmentSection locale={locale} />
      <ResidentialSection locale={locale} />
      <EmployersSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
