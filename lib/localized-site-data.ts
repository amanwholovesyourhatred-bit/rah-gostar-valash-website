import type { Capability } from './site-data';
import { t, type Locale } from './i18n';

const capabilityKeys: Record<string, string> = {
  'road-infra': 'roadInfrastructure',
  bridges: 'bridges',
  rcc: 'rcc',
  'soil-stab': 'soilStabilization',
  building: 'building',
  residential: 'residential',
  precast: 'precast',
  water: 'water',
  'urban-infra': 'urbanInfrastructure',
};

export function localizeCapability(capability: Capability, locale: Locale) {
  const key = `expertise.${capabilityKeys[capability.id]}`;
  return {
    ...capability,
    title: t(locale, `${key}.title`),
    titleEn: t(locale, `${key}.titleEn`),
    description: t(locale, `${key}.description`),
  };
}
