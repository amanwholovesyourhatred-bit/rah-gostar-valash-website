import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Zap, DollarSign, ThermometerSnowflake, ThermometerSun, Layers, Truck, Gauge, Shield, Wrench, TrendingDown } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Roller Compacted Concrete (RCC) Pavement | RCC Technology',
  description:
    'RCC pavement construction by Rah Gostar Valash Co. using zero-slump concrete, asphalt-paver placement and vibratory rollers for high strength and long service life.',
};

const advantages = [
  { icon: Zap, title: 'High Execution Speed', desc: 'Rapid pavement construction at large scale' },
  { icon: DollarSign, title: 'Relatively Low Execution Cost', desc: 'Cost-effective compared with conventional concrete pavement' },
  { icon: TrendingDown, title: 'Lower Cement Consumption', desc: 'Lower cement consumption than conventional concrete' },
  { icon: ThermometerSun, title: 'Hot-Climate Performance', desc: 'Suitable performance in high-temperature conditions' },
  { icon: ThermometerSnowflake, title: 'Cold-Climate Performance', desc: 'Suitable performance in low-temperature conditions' },
  { icon: Wrench, title: 'No Conventional Formwork', desc: 'No need for conventional concrete formwork' },
  { icon: Truck, title: 'Placement with an asphalt paver', desc: 'Use of an asphalt paver for concrete placement' },
  { icon: Gauge, title: 'Vibratory Roller Compaction', desc: 'Compaction with vibratory rollers' },
  { icon: Shield, title: 'Long Service Life', desc: 'Reduced maintenance requirements' },
];

export default function RCCPage() {
  const rccProjects = projects.filter((p) => p.category === 'rcc');

  return (
    <>
      <PageHeader
        title="Roller Compacted Concrete (RCC) Pavement"
        subtitle="Pavement technology using zero-slump concrete, asphalt-paver placement and vibratory compaction"
        image="https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[
          { label: 'Technical Capabilities', href: '/capabilities' },
          { label: 'Roller Compacted Concrete (RCC) Pavement' },
        ]}
      />

      {/* Technology explanation */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                RCC Technology
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                Roller Compacted Concrete: Durable and Economical Pavement
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                Roller Compacted Concrete (RCC) is a concrete pavement constructed with very dry, zero-slump concrete. It is placed using an asphalt paver and compacted with vibratory rollers.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                RCC offers several advantages, including rapid execution, relatively low cost, lower cement consumption than conventional concrete and strong performance in hot and cold climates. Because it does not require conventional formwork and can use road-construction machinery, it is well suited to large infrastructure projects.
              </p>
            </div>

            <div className="reveal reveal-delay-1 relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1145465/pexels-photo-1145465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="RCC pavement construction"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">Zero Slump</p>
                <p className="text-xs text-white/80 mt-1">Very Dry Concrete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages grid */}
      <section className="section-padding bg-light-gray blueprint-bg">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Advantages
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Advantages of RCC Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow`}
              >
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-base font-bold text-navy">{adv.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy leading-tight text-balance">
              RCC Construction Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Production of Zero-Slump Concrete', desc: 'Mixing very dry concrete with a low water-cement ratio' },
              { num: '02', title: 'Placement with Asphalt Paver', desc: 'Transport and placement of concrete using road construction machinery' },
              { num: '03', title: 'Vibratory Roller Compaction', desc: 'Concrete compaction with vibratory rollers' },
              { num: '04', title: 'Finishing & Curing', desc: 'Final surface finishing and concrete curing' },
            ].map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative`}>
                <div className="text-4xl font-bold text-accent/20 tabular-nums">{step.num}</div>
                <h3 className="mt-2 text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 -left-3 w-6 h-px bg-border" />
                )}
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
              Rah Gostar Valash RCC Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rccProjects.map((project, i) => (
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
                  <span className="text-xs text-accent font-semibold mb-1">RCC Project</span>
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
