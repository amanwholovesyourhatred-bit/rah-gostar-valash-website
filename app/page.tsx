import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import EquipmentSection from '@/components/sections/EquipmentSection';
import ResidentialSection from '@/components/sections/ResidentialSection';
import EmployersSection from '@/components/sections/EmployersSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CapabilitiesSection />
      <FeaturedProjects />
      <EquipmentSection />
      <ResidentialSection />
      <EmployersSection />
      <CTASection />
    </>
  );
}
