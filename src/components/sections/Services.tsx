import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'

const TABS = [
  {
    label: 'Artificial Intelligence & Automation',
    title: 'Artificial Intelligence & Automation',
    description:
      'As an AI development company, we provide artificial intelligence services and custom AI software development that enhance operational efficiency, automation, and enterprise decision-making.',
    features: [
      'Conversational AI & enterprise chat systems',
      'Predictive analytics & workflow automation',
      'Intelligent decision-support platforms',
      'Secure AI integration into core business systems',
    ],
    summary: 'Built for measurable outcomes, governance, and production readiness.',
  },
  {
    label: 'Custom Software Development',
    title: 'Custom Software Development',
    description:
      'End-to-end development of tailored enterprise applications, from architecture and design to deployment, built for performance, security, and scalability.',
    features: [
      'Full-stack web & mobile application development',
      'API design, development & integration',
      'Legacy system modernization & migration',
      'Enterprise resource planning (ERP) solutions',
    ],
    summary: 'Engineered for long-term maintainability and business growth.',
  },
  {
    label: 'Technology Consulting & Delivery Management',
    title: 'Technology Consulting & Delivery Management',
    description:
      'Strategic technology advisory and project delivery services that align digital initiatives with measurable business outcomes.',
    features: [
      'Technology roadmap & architecture advisory',
      'Agile delivery management & PMO',
      'Digital transformation strategy',
      'Vendor evaluation & technology selection',
    ],
    summary: 'Structured execution from strategy to production.',
  },
  {
    label: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure design, migration, and management with CI/CD automation for reliable, scalable deployments.',
    features: [
      'Cloud architecture & migration (AWS, Azure, GCP)',
      'CI/CD pipeline design & implementation',
      'Infrastructure as Code & container orchestration',
      'Performance monitoring & cost optimization',
    ],
    summary: 'Built for uptime, security, and operational efficiency.',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section className="bg-light-bg py-20" id="services">
      <div className="mx-auto max-w-[1440px] px-14">
        <SectionHeading
          title="Comprehensive Technology & AI Capabilities"
          subtitle="Zentrixel\u00a0is a software development company and IT solutions company delivering scalable digital systems and intelligent automation for complex business environments. We combine disciplined engineering with practical AI to modernize platforms and build systems designed for long-term value."
        />

        {/* Tabs */}
        <div className="mt-10 mx-auto max-w-[1062px] overflow-hidden rounded-[60px] border border-muted">
          <div className="flex max-md:flex-wrap">
            {TABS.map((t, idx) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(idx)}
                className={`flex-1 px-4 py-3 text-center font-body text-sm font-medium transition-colors ${
                  idx === active
                    ? 'bg-active-tab text-white'
                    : 'bg-white text-muted hover:bg-gray-50'
                } ${idx === 0 ? 'rounded-l-[40px] max-md:rounded-l-none' : ''} ${idx === TABS.length - 1 ? 'rounded-r-[40px] max-md:rounded-r-none' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-10 mx-auto max-w-[1062px] rounded-xl bg-white p-10">
          <h3 className="font-heading text-2xl font-semibold text-navy">
            {tab.title}
          </h3>

          <p className="mt-4 max-w-[759px] font-body text-base leading-relaxed text-muted">
            {tab.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {tab.features.map((feature, idx) => (
              <div key={idx} className="relative pl-5">
                <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                <div className="mb-2 flex h-8 w-8 items-center justify-center">
                  <FeatureIcon index={idx} />
                </div>
                <p className="font-body text-sm leading-snug text-navy">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-body text-base font-medium text-muted">
            {tab.summary}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-[20px] bg-primary/10 px-4 py-1.5 font-sub-heading text-2xl text-primary-dark transition-colors hover:bg-primary/20"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>,
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
      <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 6-10" />
    </svg>,
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" /><path d="M12 1v4m0 14v4m-9-9h4m14 0h-4m-1.5-7.5L16 5m-8 14l-1.5-1.5m0-11L5 5m14 14l-1.5-1.5" />
    </svg>,
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>,
  ]
  return icons[index] || icons[0]
}
