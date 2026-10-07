import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-data';
import { t, type Locale } from '@/lib/i18n';
import { localizedMetadata } from '@/lib/metadata';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return localizedMetadata(
    params.locale,
    '/contact',
    t(params.locale, 'contact.metadataTitle'),
    t(params.locale, 'contact.metadataDescription'),
  );
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <>
      <PageHeader
        locale={locale}
        title={t(locale, 'contact.pageTitle')}
        subtitle={t(locale, 'contact.pageSubtitle')}
        image="/images/projects/roads/qom-jafarieh-asphalt-01.webp"
        breadcrumbs={[{ label: t(locale, 'contact.breadcrumb') }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="reveal">
                <h2 className="text-2xl font-bold text-navy mb-4">{t(locale, 'contact.contactInformation')}</h2>
                <p className="text-sm text-steel leading-relaxed">
                  {t(locale, 'contact.contactDetailsNote')}
                </p>
              </div>

              <div className="reveal reveal-delay-1 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.headOfficeAddress')}</h3>
                    <p className="text-sm text-steel mt-1">{t(locale, 'contact.addressPendingVerification')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.phone')}</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.email')}</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.workingHours')}</h3>
                    <p className="text-sm text-steel mt-1">{t(locale, 'contact.workingHoursValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <h2 className="text-2xl font-bold text-navy mb-6">{t(locale, 'contact.contactForm')}</h2>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
