import Link from '@/components/LocalizedLink';
import { ChevronRight, Home, Building2, TrendingUp } from 'lucide-react';
import { t, type Locale } from '@/lib/i18n';

export default function ResidentialSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-rgv">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="reveal lg:col-span-1">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              {t(locale, 'home.residentialEyebrow')}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight text-balance">
              {t(locale, 'home.residentialHeading')}
            </h2>
            <p className="mt-5 text-base text-steel leading-relaxed">
              {t(locale, 'home.residentialDescription')}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <Home className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{t(locale, 'home.residentialUnits')}</p>
                  <p className="text-xs text-steel mt-0.5">{t(locale, 'home.nationalAndMehrHousing')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{t(locale, 'home.residentialArea')}</p>
                  <p className="text-xs text-steel mt-0.5">{t(locale, 'home.residentialConstructionInTehranQom')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-md flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{t(locale, 'home.physicalProgress')}</p>
                  <p className="text-xs text-steel mt-0.5">{t(locale, 'home.ongoingProjectsAtProfile')}</p>
                </div>
              </div>
            </div>

            <Link
              href="/expertise#residential"
              className="mt-8 inline-flex items-center gap-2 text-navy hover:text-accent font-semibold text-base transition-colors group"
            >
              {t(locale, 'home.viewResidentialProjects')}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Image grid */}
          <div className="reveal reveal-delay-1 lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img
                src="https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t(locale, 'home.residentialUnderConstructionAlt')}
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80 mt-12">
              <img
                src="https://images.pexels.com/photos/34360419/pexels-photo-34360419.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t(locale, 'home.residentialComplexAlt')}
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img
                src="https://images.pexels.com/photos/16453466/pexels-photo-16453466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t(locale, 'home.residentialStructuresAlt')}
                className="w-full h-full object-cover img-hover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80 mt-12">
              <img
                src="https://images.pexels.com/photos/5335018/pexels-photo-5335018.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t(locale, 'home.buildingWorksAlt')}
                className="w-full h-full object-cover img-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
