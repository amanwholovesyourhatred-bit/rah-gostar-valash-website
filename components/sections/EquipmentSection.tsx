import Link from 'next/link';
import { ChevronRight, Truck, HardHat, Layers, Construction } from 'lucide-react';

export default function EquipmentSection() {
  const equipmentCategories = [
    {
      icon: Construction,
      title: 'Machinery Soil Stabilization',
      desc: 'WR/WM equipment for in-situ cement soil stabilization',
    },
    {
      icon: Layers,
      title: 'RCC Equipment',
      desc: 'Asphalt pavers and vibratory rollers for RCC',
    },
    {
      icon: Truck,
      title: 'Earthmoving Machinery',
      desc: 'Excavators, bulldozers, graders and heavy machinery',
    },
    {
      icon: HardHat,
      title: 'Road Construction & Asphalt Equipment',
      desc: 'Subgrade preparation, compaction and asphalt equipment',
    },
  ];

  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      {/* Decorative grid */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/12230651/pexels-photo-12230651.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Machinery Road Construction Rah Gostar Valash"
                className="w-full h-[420px] object-cover img-hover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            {/* Floating stat */}
            <div className="absolute -top-5 -right-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
              <p className="text-2xl font-bold">500 m</p>
              <p className="text-xs text-white/80 mt-1">stabilized per day</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Machinery & Equipment
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-balance">
              Specialized Machinery Capability
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              Rah Gostar Valash has access to specialized machinery for soil stabilization, RCC, earthworks, compaction, road construction, asphalt and concrete works.
            </p>

            <div className="mt-8 space-y-4">
              {equipmentCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 bg-accent/20 rounded-md flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                    <p className="text-sm text-white/60 mt-0.5">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/equipment"
              className="mt-8 inline-flex items-center gap-2 text-accent hover:text-white font-semibold text-base transition-colors group"
            >
              View Machinery & Equipment
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
