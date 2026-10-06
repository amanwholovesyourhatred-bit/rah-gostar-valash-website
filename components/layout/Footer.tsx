import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, mainNav, capabilities } from '@/lib/site-data';
import { t, type Locale } from '@/lib/i18n';
import LocalizedLink from '@/components/LocalizedLink';
import Logo from './Logo';

const navTranslationKeys: Record<string, string> = {
  '/': 'nav.home',
  '/about': 'nav.about',
  '/expertise': 'nav.expertise',
  '/projects': 'nav.projects',
  '/capabilities': 'nav.capabilities',
  '/equipment': 'nav.equipment',
  '/qualifications': 'nav.qualifications',
  '/contact': 'nav.contact',
};

const capabilityTranslationKeys: Record<string, string> = {
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

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-navy text-white">
      <div className="container-rgv py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {t(locale, 'footer.shortDescription')}
            </p>
            <p className="mt-4 text-xs text-white/40">
              {t(locale, 'footer.continuousOperations')}
            </p>
          </div>

          <div>
            <h3 className="mb-4 border-b border-white/10 pb-2 text-sm font-bold text-white/90">
              {t(locale, 'footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5">
              {mainNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <LocalizedLink
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {t(locale, navTranslationKeys[item.href])}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-white/10 pb-2 text-sm font-bold text-white/90">
              {t(locale, 'footer.expertise')}
            </h3>
            <ul className="space-y-2.5">
              {capabilities.slice(0, 7).map((cap) => (
                <li key={cap.id}>
                  <LocalizedLink
                    href={cap.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {t(locale, `expertise.${capabilityTranslationKeys[cap.id]}.title`)}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-white/10 pb-2 text-sm font-bold text-white/90">
              {t(locale, 'footer.contactUs')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t(locale, 'footer.headOfficeAddressPending')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>
                  {t(locale, 'footer.phonePrefix')} {siteConfig.contact.phone}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>
                  {t(locale, 'footer.emailPrefix')} {siteConfig.contact.email}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{t(locale, 'contact.workingHoursValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rgv flex flex-col items-center justify-between gap-3 py-5 md:flex-row">
          <p className="text-xs text-white/50">
            {t(locale, 'footer.copyright')}
          </p>
          <p className="text-xs text-white/40">
            {t(locale, 'footer.designCredit')}
          </p>
        </div>
      </div>
    </footer>
  );
}
