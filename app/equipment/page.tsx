import type { Metadata } from 'next';
import { Construction, Layers, Truck, HardHat, Wrench, Gauge, Route, Building2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Machinery & Equipment | Rah Gostar Valash',
  description:
    'Rah Gostar Valash specialized machinery and equipment includes WR/WM soil stabilization equipment, RCC equipment, earthmoving machinery, road construction and asphalt equipment.',
};

const equipmentCategories = [
  {
    icon: Gauge,
    title: 'Soil Stabilization Equipment',
    items: [
      'Specialized in-situ stabilization equipment (WR/WM)',
      'Soil-Cement Mixing Machinery',
    ],
    image: 'https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Layers,
    title: 'RCC Equipment',
    items: [
      'Asphalt paver for RCC placement',
      'Vibratory rollers for RCC compaction',
    ],
    image: 'https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Construction,
    title: 'Earthmoving Machinery',
    items: [
      'Excavator',
      'Bulldozer',
      'Grader',
    ],
    image: 'https://images.pexels.com/photos/12230651/pexels-photo-12230651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Route,
    title: 'Road Construction & Asphalt Equipment',
    items: [
      'Subgrade Preparation & Grading Equipment',
      'Compaction Rollers',
      'Asphalt Equipment',
    ],
    image: 'https://images.pexels.com/photos/7910082/pexels-photo-7910082.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Building & Concrete Equipment',
    items: [
      'Concrete Placement Equipment',
      'Construction Machinery',
    ],
    image: 'https://images.pexels.com/photos/18082446/pexels-photo-18082446.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: HardHat,
    title: 'Auxiliary & Support Equipment',
    items: [
      'Light Construction Equipment',
      'Project Support Equipment',
    ],
    image: 'https://images.pexels.com/photos/1145465/pexels-photo-1145465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        title="Machinery & Equipment"
        subtitle="Access to specialized machinery for soil stabilization, RCC, earthworks, compaction, road construction and concrete works"
        image="https://images.pexels.com/photos/34338597/pexels-photo-34338597.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'Machinery & Equipment' }]}
      />

      {/* Equipment categories */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal max-w-2xl mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Machinery
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Machinery & Equipment Categories
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              Rah Gostar Valash has access to a range of specialized machinery for civil engineering projects. Specific equipment models are listed only when documented in the company profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((cat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover img-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-md flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-navy" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy">{cat.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-steel">
                        <span className="mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="reveal mt-10 p-6 bg-light-gray rounded-lg border-l-4 border-accent">
            <div className="flex items-start gap-4">
              <Wrench className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-steel leading-relaxed">
                A complete equipment list with verified models and specifications can be provided after final confirmation. Unverified model information is intentionally omitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
