import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ProjectsList from '@/components/projects/ProjectsList';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'پروژه‌ها | پروژه‌های عمرانی راه گستر ولاش',
  description:
    'پروژه‌های راه‌سازی، پل، بتن غلتکی RCC، تثبیت خاک، ابنیه، مسکونی، دیوار پیش‌ساخته و زیرساخت شهری اجرا شده توسط شرکت راه گستر ولاش.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="پروژه‌ها"
        subtitle="پروژه‌های عمرانی و زیرساختی اجرا شده توسط راه گستر ولاش در حوزه‌های راه‌سازی، پل، RCC، تثبیت خاک، ابنیه، مسکونی و زیرساخت شهری"
        image="https://images.pexels.com/photos/11701517/pexels-photo-11701517.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'پروژه‌ها' }]}
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
