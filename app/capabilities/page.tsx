import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Layers, Gauge, Truck, ShieldCheck, HardHat } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Technical Capabilities | Rah Gostar Valash',
  description:
    'Rah Gostar Valash technical and execution capabilities include RCC technology, cement soil stabilization, specialized machinery and contractor qualifications.',
};

const technicalPages = [
  {
    title: 'Roller Compacted Concrete (RCC) Pavement',
    desc: 'Pavement construction using zero-slump concrete, asphalt pavers and vibratory rollers, offering rapid execution and long service life.',
    href: '/capabilities/rcc',
    image: 'https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Layers,
  },
  {
    title: 'Cement Soil Stabilization',
    desc: 'In-situ soil stabilization with WR/WM equipment to increase strength, reduce swelling and achieve a documented minimum execution rate of about 500 m per day.',
    href: '/capabilities/soil-stabilization',
    image: 'https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Gauge,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        title="Technical Capabilities"
        subtitle="Rah Gostar Valash specialized technologies and construction machinery"
        image="https://images.pexels.com/photos/12230651/pexels-photo-12230651.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'Technical Capabilities' }]}
      />

      {/* Technical pages highlight */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal mb-10">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Specialized Technologies
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Technical Capability Pages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalPages.map((page, i) => (
              <Link
                key={i}
                href={page.href}
                className={`reveal reveal-delay-${i + 1} group block bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover img-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute bottom-4 right-5 left-5">
                    <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center mb-3">
                      <page.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{page.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-steel leading-relaxed">{page.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                    View Technical Page
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid from homepage */}
      <CapabilitiesSection />

      <CTASection />
    </>
  );
}
