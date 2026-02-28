import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import chattingIcon from '../../assets/images/chatting.svg'
import growthIcon from '../../assets/images/growth.svg'
import ideaIcon from '../../assets/images/idea.svg'
import financeSecurityIcon from '../../assets/images/finance-security.svg'

interface Feature {
  label: string
  icon: string
}

const TABS = [
  {
    label: 'Artificial Intelligence & Automation',
    title: 'Artificial Intelligence & Automation',
    description:
      'As an AI development company, we provide artificial intelligence services and custom AI software development that enhance operational efficiency, automation, and enterprise decision-making.',
    features: [
      { label: 'Conversational AI & enterprise chat systems', icon: chattingIcon },
      { label: 'Predictive analytics & workflow automation', icon: growthIcon },
      { label: 'Intelligent decision-support platforms', icon: ideaIcon },
      { label: 'Secure AI integration into core business systems', icon: financeSecurityIcon },
    ] as Feature[],
    summary: 'Built for measurable outcomes, governance, and production readiness.',
  },
  {
    label: 'Custom Software Development',
    title: 'Custom Software Development',
    description:
      'End-to-end development of tailored enterprise applications, from architecture and design to deployment, built for performance, security, and scalability.',
    features: [
      { label: 'Full-stack web & mobile application development', icon: chattingIcon },
      { label: 'API design, development & integration', icon: chattingIcon },
      { label: 'Legacy system modernization & migration', icon: chattingIcon },
      { label: 'Enterprise resource planning (ERP) solutions', icon: chattingIcon },
    ] as Feature[],
    summary: 'Engineered for long-term maintainability and business growth.',
  },
  {
    label: 'Technology Consulting & Delivery Management',
    title: 'Technology Consulting & Delivery Management',
    description:
      'Strategic technology advisory and project delivery services that align digital initiatives with measurable business outcomes.',
    features: [
      { label: 'Technology roadmap & architecture advisory', icon: chattingIcon },
      { label: 'Agile delivery management & PMO', icon: chattingIcon },
      { label: 'Digital transformation strategy', icon: chattingIcon },
      { label: 'Vendor evaluation & technology selection', icon: chattingIcon },
    ] as Feature[],
    summary: 'Structured execution from strategy to production.',
  },
  {
    label: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure design, migration, and management with CI/CD automation for reliable, scalable deployments.',
    features: [
      { label: 'Cloud architecture & migration (AWS, Azure, GCP)', icon: chattingIcon },
      { label: 'CI/CD pipeline design & implementation', icon: chattingIcon },
      { label: 'Infrastructure as Code & container orchestration', icon: chattingIcon },
      { label: 'Performance monitoring & cost optimization', icon: chattingIcon },
    ] as Feature[],
    summary: 'Built for uptime, security, and operational efficiency.',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const tab = TABS[active]

  return (
    <section id="services">
      <div className="mx-auto max-w-[1440px] px-14">
        <div className="bg-light-bg rounded-2xl px-10 pt-16 pb-10">
          <p className="mx-auto mb-4 w-fit font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
            Our Services
          </p>
          <SectionHeading
            title="Comprehensive Technology & AI Capabilities"
            subtitle="Zentrixel is a software development company and IT solutions company delivering scalable digital systems and intelligent automation for complex business environments. We combine disciplined engineering with practical AI to modernize platforms and build systems designed for long-term value."
          />

          {/* Tabs */}
          <div className="mt-10 mx-auto flex h-[60px] max-w-[1062px] items-center gap-0 rounded-[60px] border border-[#475569] p-[6px] max-md:h-auto max-md:flex-wrap max-md:rounded-2xl">
            {TABS.map((t, idx) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(idx)}
                className={`h-[48px] cursor-pointer whitespace-nowrap rounded-[40px] px-4 py-2.5 text-center font-body text-sm transition-colors max-md:w-full max-md:rounded-xl ${
                  idx === active
                    ? 'bg-active-tab font-medium text-white'
                    : 'bg-transparent font-normal text-[#475569] hover:bg-gray-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-10 mx-auto max-w-[1062px]">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              {tab.title}
            </h3>

            <p className="mt-4 max-w-[759px] font-body text-base leading-relaxed text-muted">
              {tab.description}
            </p>

            <div className="bg-white rounded-2xl p-5 mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {tab.features.map((feature, idx) => (
                <div key={idx} className={`relative ${idx > 0 ? 'pl-5' : ''}`}>
                  {idx > 0 && <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent" />}
                  <div className="mb-2 flex h-8 w-8 items-center justify-center">
                    <img src={feature.icon} alt="" width={32} height={32} />
                  </div>
                  <p className="font-body text-sm leading-snug text-navy">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-body text-base font-medium text-muted">
              {tab.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}