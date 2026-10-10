import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Globe2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/ContactForm';
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
  const offices = [
    { name: t(locale, 'contact.tehranOffice'), address: t(locale, 'contact.tehranAddress') },
    { name: t(locale, 'contact.khorramabadOffice'), address: t(locale, 'contact.khorramabadAddress') },
    { name: t(locale, 'contact.qomOffice'), address: t(locale, 'contact.qomAddress') },
  ];
  const phoneGroups = [
    {
      office: t(locale, 'contact.tehranOffice'),
      numbers: [
        { value: '+98 21 88781354', note: t(locale, 'contact.phoneLineCount') },
        { value: '+98 21 88781351' },
      ],
    },
    {
      office: t(locale, 'contact.khorramabadOffice'),
      numbers: [{ value: '+98 66 33243821' }],
    },
  ];
  const websites = ['https://velash-holding.ir', 'https://velash-holding.com'];

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
          <div className="grid grid-cols-1 gap-x-10 gap-y-0 lg:grid-cols-3">
            <h2 className="reveal order-1 mb-6 text-2xl font-bold text-navy lg:col-start-1 lg:row-start-1">
              {t(locale, 'contact.contactInformation')}
            </h2>
            <h2 className="reveal reveal-delay-2 order-3 mb-6 text-2xl font-bold text-navy lg:col-start-2 lg:col-span-2 lg:row-start-1">
              {t(locale, 'contact.contactForm')}
            </h2>

            <div className="reveal reveal-delay-1 order-2 mb-10 space-y-4 lg:col-start-1 lg:row-start-2 lg:mb-0">
                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.officeAddresses')}</h3>
                    <div className="mt-3 space-y-3">
                      {offices.map((office) => (
                        <div key={office.name} className="min-w-0">
                          <h4 className="text-sm font-semibold text-navy">{office.name}</h4>
                          <p className="mt-1 break-words text-sm leading-relaxed text-steel" dir="ltr">
                            {office.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.phoneNumbers')}</h3>
                    <div className="mt-3 space-y-3">
                      {phoneGroups.map((group) => (
                        <div key={group.office}>
                          <h4 className="text-sm font-semibold text-navy">{group.office}</h4>
                          <ul className="mt-1 space-y-1">
                            {group.numbers.map((number) => (
                              <li key={number.value} className="flex flex-wrap items-baseline gap-x-2">
                                <a
                                  href={`tel:${number.value.replace(/\s/g, '')}`}
                                  className="text-sm text-steel hover:text-accent"
                                  dir="ltr"
                                >
                                  {number.value}
                                </a>
                                {number.note && (
                                  <span className="text-xs text-steel">{number.note}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.email')}</h3>
                    <a
                      href="mailto:rgvelash@gmail.com"
                      className="mt-1 block break-all text-sm text-steel hover:text-accent"
                      dir="ltr"
                    >
                      rgvelash@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Globe2 className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.websites')}</h3>
                    <ul className="mt-1 space-y-1">
                      {websites.map((website) => (
                        <li key={website} dir="ltr">
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-sm text-steel hover:text-accent"
                          >
                            {website}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy">{t(locale, 'contact.workingHours')}</h3>
                    <p className="text-sm text-steel mt-1">{t(locale, 'contact.workingHoursValue')}</p>
                  </div>
                </div>
            </div>

            <div className="reveal reveal-delay-2 order-4 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:[&>div]:h-full">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
