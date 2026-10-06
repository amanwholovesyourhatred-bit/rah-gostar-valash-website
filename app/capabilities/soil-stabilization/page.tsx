import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, TrendingUp, Gauge, Layers, Clock, DollarSign, Wrench, Mountain, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Cement Soil Stabilization | In-Situ Stabilization with WR/WM Equipment',
  description:
    'Cement soil stabilization by Rah Gostar Valash using WR/WM equipment to increase soil strength, reduce swelling and improve plasticity, with a documented minimum execution rate of about 500 m per day.',
};

const benefits = [
  { icon: TrendingUp, title: 'Increased Soil Strength', desc: 'Significant increase in subgrade strength' },
  { icon: Mountain, title: 'Reduced Swelling Potential', desc: 'Improved behavior of expansive soils' },
  { icon: ShieldCheck, title: 'Improved Shear Strength', desc: 'Increased soil shear strength' },
  { icon: Layers, title: 'Improved Plasticity', desc: 'Improved soil plasticity characteristics' },
  { icon: Clock, title: 'Faster Execution', desc: 'Capacity for at least 500 m of execution per day' },
  { icon: DollarSign, title: 'Reduced Material Consumption', desc: 'Optimized construction material consumption' },
  { icon: Gauge, title: 'Reduced Project Duration', desc: 'Accelerated project delivery' },
  { icon: Wrench, title: 'Economic Advantage', desc: 'Estimated 30–45% savings compared with flexible asphalt pavement (based on the company technical study)' },
];

export default function SoilStabilizationPage() {
  const stabProjects = projects.filter((p) => p.category === 'soil-stab');

  return (
    <>
      <PageHeader
        title="Cement Soil Stabilization"
        subtitle="In-situ stabilization using specialized WR/WM equipment to improve road subgrade geotechnical properties"
        image="https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: 'Technical Capabilities', href: '/capabilities' },
          { label: 'Cement Soil Stabilization' },
        ]}
      />

      {/* Technology explanation */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7910082/pexels-photo-7910082.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Cement Soil Stabilization"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 bg-navy text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold text-accent">500+ m</p>
                <p className="text-xs text-white/80 mt-1">stabilized per day (minimum)</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Stabilization Technology
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                In-Situ Soil Stabilization with WR/WM Equipment
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                Cement soil stabilization is an in-situ process in which cement is mixed directly with subgrade soil using specialized stabilization equipment such as WR (Wirtgen Recycler) and WM machines.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                Cement stabilization increases soil strength, reduces swelling potential, improves shear strength and plasticity characteristics, while faster execution and reduced material consumption can shorten project duration.
              </p>

              <div className="mt-6 p-4 bg-light-gray rounded-lg border-l-4 border-accent">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">Execution capacity:</strong> With the company’s stabilization machinery, at least approximately 500 linear metres per day can be executed at a width of 2.7 m.
                </p>
              </div>

              <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-sm text-steel leading-relaxed">
                  <strong className="text-navy">Company technical study:</strong> The company’s technical study estimates that cement-stabilized pavement may provide approximately 30–45% savings compared with flexible asphalt pavement under the analyzed conditions. This figure comes from the company’s internal study and is not presented as a universal guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="section-padding bg-light-gray blueprint-bg">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Advantages
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Advantages of Cement Soil Stabilization
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-white p-5 rounded-lg border border-border hover:shadow-md transition-shadow`}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-navy">{benefit.title}</h3>
                <p className="mt-1.5 text-xs text-steel leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company experience */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container-rgv relative z-10">
          <div className="reveal mb-10">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Project Experience
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight text-balance">
              Rah Gostar Valash Soil Stabilization Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stabProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`reveal reveal-delay-${(i % 2) + 1} group flex bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:bg-white/10 transition-all`}
              >
                <div className="w-32 h-32 shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-xs text-accent font-semibold mb-1">Soil Stabilization</span>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="mt-2 text-xs text-white/50">{project.location}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="reveal mt-8 inline-flex items-center gap-2 text-accent hover:text-white font-semibold transition-colors group"
          >
            View All Projects
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
