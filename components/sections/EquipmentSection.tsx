import Link from '@/components/LocalizedLink';
import Image from 'next/image';
import { ChevronRight, Truck, HardHat, Layers, Construction } from 'lucide-react';
import { t, type Locale } from '@/lib/i18n';

export default function EquipmentSection({ locale }: { locale: Locale }) {
  const equipmentCategories = [
    {
      icon: Construction,
      titleKey: 'equipment.soilStabilizationEquipment',
      descriptionKeys: ['equipment.inSituStabilizationEquipment'],
    },
    {
      icon: Layers,
      titleKey: 'equipment.rccEquipment',
      descriptionKeys: [
        'equipment.asphaltPaverForRcc',
        'equipment.vibratoryRollersForRcc',
      ],
    },
    {
      icon: Truck,
      titleKey: 'equipment.earthmovingMachinery',
      descriptionKeys: [
        'equipment.excavator',
        'equipment.bulldozer',
        'equipment.grader',
      ],
    },
    {
      icon: HardHat,
      titleKey: 'equipment.roadAndAsphaltEquipment',
      descriptionKeys: [
        'equipment.subgradePreparation',
        'equipment.compactionRollers',
        'equipment.asphaltEquipment',
      ],
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
              <Image
                src="/images/projects/precast-walls/precast-installation-02.webp"
                alt="Precast wall installation equipment by Rah Gostar Valash"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-hover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            {/* Floating stat */}
            <div className="absolute -top-5 -right-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
              <p className="text-2xl font-bold">500 m</p>
              <p className="text-xs text-white/80 mt-1">{t(locale, 'soilStabilization.stabilizedPerDay')}</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'equipment.pageTitle')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-balance">
              {t(locale, 'equipment.categoriesHeading')}
            </h2>
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              {t(locale, 'equipment.description')}
            </p>

            <div className="mt-8 space-y-4">
              {equipmentCategories.map((cat) => (
                <div
                  key={cat.titleKey}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 bg-accent/20 rounded-md flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{t(locale, cat.titleKey)}</h3>
                    <p className="text-sm text-white/60 mt-0.5">
                      {cat.descriptionKeys.map((key) => t(locale, key)).join(' · ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/equipment"
              className="mt-8 inline-flex items-center gap-2 text-accent hover:text-white font-semibold text-base transition-colors group"
            >
              {t(locale, 'equipment.pageTitle')}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
