import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact Us | Rah Gostar Valash',
  description:
    'Contact Rah Gostar Valash Co. for head-office details, phone, email, collaboration and civil engineering project inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Contact Rah Gostar Valash for collaboration, project inquiries or technical consultation"
        image="https://images.pexels.com/photos/8913514/pexels-photo-8913514.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="reveal">
                <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
                <p className="text-sm text-steel leading-relaxed">
                  The contact details below will be added after final verification. For immediate inquiries, please complete the contact form.
                </p>
              </div>

              <div className="reveal reveal-delay-1 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Head Office Address</h3>
                    <p className="text-sm text-steel mt-1">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Phone</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Email</h3>
                    <p className="text-sm text-steel mt-1" dir="ltr">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-light-gray rounded-lg border border-border">
                  <div className="w-10 h-10 bg-navy rounded-md flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Working Hours</h3>
                    <p className="text-sm text-steel mt-1">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 reveal reveal-delay-2">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Form</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
