import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'تماس با ما | راه گستر ولاش',
  description:
    'تماس با شرکت راه گستر ولاش. آدرس دفتر مرکزی، تلفن، ایمیل و فرم تماس برای همکاری و استعلام پروژه‌های عمرانی.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="تماس با ما"
        subtitle="برای همکاری، استعلام پروژه یا مشاوره فنی با راه گستر ولاش در ارتباط باشید"
        image="https://images.pexels.com/photos/8913514/pexels-photo-8913514.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'تماس با ما' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="reveal">
                <h2 className="text-2xl font-bold text-navy mb-4">اطلاعات تماس</h2>
                <p className="text-sm text-steel leading-relaxed">
                  اطلاعات تماس زیر پس از تأیید نهایی درج خواهد شد. برای ارتباط فوری،
                  فرم تماس را تکمیل کنید.
                </p>
              </div>

              <div className="reveal reveal-delay-1 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">آدرس دفتر مرکزی</h3>
                    <p className="text-sm text-steel mt-1">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">تلفن</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">ایمیل</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">ساعات کاری</h3>
                    <p className="text-sm text-steel mt-1">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <h2 className="text-2xl font-bold text-navy mb-6">فرم تماس</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
