import type { Metadata } from 'next';
import { Award, ShieldCheck, FileText, BadgeCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Qualifications & Certificates | Rah Gostar Valash',
  description:
    'Rah Gostar Valash contractor qualifications: Grade 1 Road & Transportation, Grade 3 Building Construction, and Grade 4 Water, supported by official certificates and qualifications.',
};

const qualifications = [
  {
    grade: '1',
    field: 'Road & Transportation',
    fieldEn: 'Road & Transportation',
    desc: 'Grade 1 — Highest Road & Transportation Contractor Grade',
    color: 'from-navy to-navy-light',
  },
  {
    grade: '3',
    field: 'Building Construction',
    fieldEn: 'Building Construction',
    desc: 'Grade 3 — Building Construction Contractor',
    color: 'from-blue to-blue-light',
  },
  {
    grade: '4',
    field: 'Water',
    fieldEn: 'Water',
    desc: 'Grade 4 — Water Contractor',
    color: 'from-cyan to-blue-light',
  },
];

export default function QualificationsPage() {
  return (
    <>
      <PageHeader
        title="Qualifications & Certificates"
        subtitle="Official Rah Gostar Valash contractor qualifications under the national contractor grading system"
        image="https://images.pexels.com/photos/8961298/pexels-photo-8961298.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'Qualifications & Certificates' }]}
      />

      {/* Qualification cards */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Contractor Grades
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Official Contractor Qualifications
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              The following contractor grades have been issued to Rah Gostar Valash Co. under the national contractor grading system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((qual, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-lg border border-border p-8 text-center bg-white hover:shadow-xl transition-shadow`}
              >
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${qual.color} opacity-10 rounded-bl-full`} />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-4">
                    <span className="text-3xl font-bold text-accent tabular-nums">{qual.grade}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{qual.field}</h3>
                  <p className="text-xs text-accent font-medium mt-1">{qual.fieldEn}</p>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{qual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate gallery */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal mb-10">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">Certificate Gallery</h2>
            </div>
            <p className="text-sm text-steel leading-relaxed max-w-2xl">
              Certificate and qualification document images will be displayed here after final verification and removal of sensitive information.
            </p>
          </div>

          <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[3/4] bg-white rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center p-6 text-center"
              >
                <FileText className="w-10 h-10 text-border mb-3" />
                <p className="text-xs text-muted-foreground">
                  Certificate Image {(n).toLocaleString('en-US')}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  To be added after final verification
                </p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-2 mt-8 p-5 bg-amber-50 rounded-lg border-l-4 border-amber-400">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-steel leading-relaxed">
                Published legal documents and certificates will omit personal identification numbers, signatures and other sensitive registration information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional credibility */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="reveal p-6 bg-light-gray rounded-lg border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <BadgeCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy">Valid Qualifications</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  The company’s contractor grades are issued under the national grading system and demonstrate formal qualification for government and public-sector projects.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 p-6 bg-light-gray rounded-lg border border-border flex items-start gap-4">
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy">Documented Experience</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  More than 24 years of documented experience in road construction, buildings, residential development and infrastructure supports the company’s qualifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
