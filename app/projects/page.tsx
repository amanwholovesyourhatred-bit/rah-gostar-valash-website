import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ProjectsList from '@/components/projects/ProjectsList';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Projects | Civil Engineering Projects Rah Gostar Valash',
  description:
    'Road, bridge, RCC, soil stabilization, building, residential, precast wall and urban infrastructure projects delivered by Rah Gostar Valash Co.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Civil engineering and infrastructure projects delivered by Rah Gostar Valash across road construction, bridges, RCC, soil stabilization, building construction, residential development and urban infrastructure"
        image="https://images.pexels.com/photos/11701517/pexels-photo-11701517.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <ProjectsList />
        </div>
      </section>

      <CTASection />
    </>
  );
}
