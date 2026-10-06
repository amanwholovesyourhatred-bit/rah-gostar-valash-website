import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Target, History, Award, Users, Settings, ShieldCheck, Layers } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { companyStats, capabilities } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About Us | Rah Gostar Valash Co.',
  description:
    'Rah Gostar Valash Co. has more than 24 years of experience in civil engineering and infrastructure projects. Learn about the company, its history, expertise, technical capabilities and contractor qualifications.',
};

const projectPhases = [
  { title: 'Site Mobilization', desc: 'Project mobilization and site preparation' },
  { title: 'Earthworks', desc: 'Excavation, filling and grading' },
  { title: 'Structural Works', desc: 'Foundation and primary structural works' },
  { title: 'Structural Frame', desc: 'Construction of concrete or steel structural frames' },
  { title: 'Rough Construction', desc: 'Masonry and rough building works' },
  { title: 'Mechanical Systems', desc: 'Installation of mechanical and heating systems' },
  { title: 'Electrical Systems', desc: 'Installation of electrical and lighting systems' },
  { title: 'Finishing', desc: 'Finishing and completion works' },
  { title: 'Project Completion', desc: 'Final project handover to the employer' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Rah Gostar Valash"
        subtitle="More than 24 years of continuous activity in civil engineering and infrastructure projects, supported by experienced management and specialist technical personnel"
        image="https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Stats */}
      <section className="py-12 bg-navy text-white border-b border-white/10">
        <div className="container-rgv">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  {stat.prefix && <span className="text-2xl font-light text-accent">{stat.prefix}</span>}
                  <span className="text-3xl md:text-4xl font-bold tabular-nums">
                    {stat.value.toLocaleString('en-US')}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-white/80">{stat.label}</p>
                {stat.sublabel && <p className="text-xs text-white/40 mt-0.5">{stat.sublabel}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Rah Gostar Valash Engineers"
                  className="w-full h-[440px] object-cover img-hover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-accent text-white p-5 rounded-lg shadow-xl hidden md:block">
                <p className="text-xl font-bold">1379</p>
                <p className="text-xs text-white/80 mt-0.5">Year Established</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Company Overview
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
                Civil Engineering Delivery Backed by Experience and Technical Capability
              </h2>
              <p className="mt-5 text-base text-steel leading-relaxed">
                With more than 24 years of continuous activity in civil engineering and construction, Rah Gostar Valash Co. combines experienced management, specialist technical personnel, specialized construction machinery and professional contractor qualifications.
              </p>
              <p className="mt-4 text-base text-steel leading-relaxed">
                The company has a documented track record in road construction, building construction, urban infrastructure, water and wastewater, and specialized civil engineering works. Rah Gostar Valash manages projects from site mobilization through final completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Experience */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">History & Experience</h2>
            </div>
            <p className="text-base text-steel leading-relaxed">
              The company began operations in 2000 and, over more than two decades of continuous activity, has delivered numerous projects in road and transportation, building construction, residential development, urban infrastructure and specialized civil works across Iran, including Qom, Tehran, Gilan, Kurdistan, Sistan and Baluchestan, and border regions.
            </p>
          </div>
        </div>
      </section>

      {/* Project lifecycle */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Project Delivery Cycle
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy leading-tight text-balance">
              Full management from site mobilization to handover
            </h2>
            <p className="mt-4 text-base text-steel leading-relaxed">
              Rah Gostar Valash has experience managing projects through every stage of execution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectPhases.map((phase, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 p-5 bg-light-gray rounded-lg border border-border hover:border-accent/30 transition-colors`}
              >
                <span className="shrink-0 w-8 h-8 bg-navy text-white text-sm font-bold rounded-md flex items-center justify-center tabular-nums">
                  {(i + 1).toLocaleString('en-US')}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">{phase.title}</h3>
                  <p className="mt-1 text-xs text-steel">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized areas */}
      <section className="py-16 bg-light-gray border-y border-border">
        <div className="container-rgv">
          <div className="reveal mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-navy">Areas of Expertise</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <Link
                key={cap.id}
                href={cap.href}
                className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-3 p-4 bg-white rounded-lg border border-border hover:border-accent/30 hover:shadow-sm transition-all`}
              >
                <span className="text-sm font-bold text-accent tabular-nums">{cap.number}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-navy group-hover:text-accent transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-steel mt-0.5">{cap.titleEn}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-steel group-hover:text-accent transition-all group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Management approach */}
      <section className="section-padding bg-white">
        <div className="container-rgv">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Management Approach',
                desc: 'Project management focused on quality, schedule and cost control, with oversight from site mobilization through final handover.',
              },
              {
                icon: Users,
                title: 'Technical & Execution Capability',
                desc: 'Specialist technical personnel and construction machinery for road, RCC, soil stabilization and building projects.',
              },
              {
                icon: Award,
                title: 'Contractor Qualifications',
                desc: 'Holder of Grade 1 Road & Transportation, Grade 3 Building Construction and Grade 4 Water contractor qualifications under the national grading system.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} p-6 bg-light-gray rounded-lg border border-border`}
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-steel leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links to other pages */}
      <section className="py-12 bg-light-gray border-t border-border">
        <div className="container-rgv">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/qualifications"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 text-sm font-semibold rounded-md transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              Qualifications & Certificates
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-navy border border-border px-6 py-3 text-sm font-semibold rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              Machinery & Equipment
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
