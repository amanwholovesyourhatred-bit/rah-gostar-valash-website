import type { Metadata } from 'next';
import Image from 'next/image';
import { Construction, Layers, Truck, HardHat, Wrench, Gauge, Route, Building2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/equipment',
    t(params.locale, 'equipment.metadataTitle'),
    t(params.locale, 'equipment.metadataDescription'),
  );
}

const equipmentCategories = [
  {
    icon: Gauge,
    title: 'soilStabilizationEquipment',
    items: ['inSituStabilizationEquipment', 'soilCementMixing'],
    image: '/images/projects/soil-stabilization/northeast-border-stabilization-01.webp',
  },
  {
    icon: Layers,
    title: 'rccEquipment',
    items: ['asphaltPaverForRcc', 'vibratoryRollersForRcc'],
    image: '/images/projects/rcc/boroujerdi-rcc-01.webp',
  },
  {
    icon: Construction,
    title: 'earthmovingMachinery',
    items: ['excavator', 'bulldozer', 'grader'],
    image: '/images/projects/precast-walls/precast-installation-01.webp',
  },
  {
    icon: Route,
    title: 'roadAndAsphaltEquipment',
    items: ['subgradePreparation', 'compactionRollers', 'asphaltEquipment'],
    image: '/images/projects/roads/pardisan-parand-asphalt-01.webp',
  },
  {
    icon: Building2,
    title: 'buildingAndConcreteEquipment',
    items: ['concretePlacementEquipment', 'constructionMachinery'],
    image: 'https://images.pexels.com/photos/18082446/pexels-photo-18082446.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: HardHat,
    title: 'auxiliaryEquipment',
    items: ['lightConstructionEquipment', 'projectSupportEquipment'],
    image: '/images/projects/roads/malard-industrial-town-02.webp',
  },
];

export default function EquipmentPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'equipment.pageTitle')}
        subtitle={t(locale, 'equipment.pageSubtitle')}
        image="/images/projects/soil-stabilization/northeast-border-stabilization-02.webp"
        breadcrumbs={[{ label: t(locale, 'equipment.breadcrumb') }]}
      />

      {/* Equipment categories */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal max-w-2xl mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'equipment.machinery')}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'equipment.categoriesHeading')}
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              {t(locale, 'equipment.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((cat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={t(locale, `equipment.${cat.title}`)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover img-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-md flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-navy" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy">{t(locale, `equipment.${cat.title}`)}</h3>
                  <ul className="mt-3 space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-steel">
                        <span className="mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                        {t(locale, `equipment.${item}`)}
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
                {t(locale, 'equipment.equipmentNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
