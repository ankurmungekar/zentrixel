import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// ── Service Data ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'ai-and-ml',
    tab: 'AI & ML Solutions',
    heading: 'Transform Your Business with Advanced AI & ML Solutions',
    intro:
      'At Zentrixel, we deliver end-to-end AI solutions for business, offering machine learning services and artificial intelligence consulting to transform complex data into strategic advantages for your company.',
    whatWeOffer: [
      'Agentic AI systems that autonomously execute tasks and make decisions',
      'Multi-modal AI for insights from text, images, and audio',
      'Sophisticated predictive analytics and forecasting',
      'Advanced natural language processing (NLP) and generative AI',
      'Intelligent computer vision and image analysis',
      'Custom AI model development using TensorFlow, PyTorch, and scikit-learn',
      'Robust data engineering and cloud-based AI deployment (AWS, Azure, GCP)',
      'Scalable, explainable AI systems for critical business needs',
    ],
    approach:
      'We guide you through the entire AI/ML lifecycle—from data strategy and engineering to model development, testing, and seamless cloud deployment. Our team specializes in building secure, scalable, and explainable AI systems, ensuring each solution is tailored to your business goals and industry requirements.',
    industries: ['Banking & Financial Services (BFSI)', 'Real Estate', 'Startups & SMEs', 'Healthcare'],
    useCases: [
      'Autonomous customer service chatbots with natural language understanding',
      'Predictive analytics for sales, risk, and operations',
      'AI-driven document processing and extraction',
      'Real-time video and image recognition for security and compliance',
    ],
    whyZentrixel:
      'We have an experienced team who has delivered advanced, production-ready AI/ML solutions for leading organizations across the Middle East and beyond. We leverage the latest deep learning frameworks and cloud platforms to help you automate processes, unlock new insights, and drive innovation.',
    ctaLabel: 'Get a Free Consultation',
  },
  {
    id: 'web-and-mobile',
    tab: 'Web & Mobile Apps',
    heading: 'Intelligent Web & Mobile Apps for a Connected World',
    intro:
      'At Zentrixel, we specialize in web application development, mobile app development, and API development services—crafting responsive, high-performance applications tailored to your business vision and user needs.',
    whatWeOffer: [
      'Modern web application development (React.js, AngularJS)',
      'Native iOS and Android app development',
      'Cross-platform app development (React Native, Flutter)',
      'REST API and SOAP API development for integrations',
      'Robust back-end development (.NET, Node.js, Python)',
      'Custom Python development for web, automation, and data-driven apps',
      'UI/UX design and responsive web design',
      'Secure API integration and third-party services',
      'App store deployment, support, and maintenance',
      'End-to-end testing for quality and performance',
    ],
    approach:
      'We start by understanding your goals and audience, then design, develop, and deliver seamless digital experiences—leveraging the latest frameworks and best practices. Every project is optimized for speed, scalability, and user engagement across all devices.',
    industries: ['Startups & SMEs', 'Banking & Financial Services (BFSI)', 'Real Estate', 'E-commerce & Retail', 'Healthcare'],
    useCases: [
      'Customer engagement mobile apps for retailers',
      'Secure online banking platforms and dashboards',
      'Real estate listing web portals with interactive maps',
      'Healthcare apps for patient engagement and data access',
    ],
    whyZentrixel:
      'Our team combines deep technical expertise with a creative, user-focused mindset. We deliver robust, future-ready apps that drive business growth and delight your users—backed by our experience across multiple industries and technologies.',
    ctaLabel: 'Start Your App Journey',
  },
  {
    id: 'cloud',
    tab: 'Cloud Computing',
    heading: 'Scalable, Secure Cloud Solutions for Future-Ready Businesses',
    intro:
      "Future-proof your business with Zentrixel's robust, scalable cloud computing solutions. As a leading cloud consulting company, we design, migrate, and manage intelligent cloud environments—offering seamless cloud migration services tailored to your needs.",
    whatWeOffer: [
      'Seamless migration from legacy systems to the cloud',
      'Custom cloud architecture and deployment',
      'IaaS, PaaS, and SaaS implementation',
      'DevOps automation and CI/CD pipelines',
      'Containerisation with Docker & Kubernetes',
      'Strategic multi-cloud management (AWS, Azure, GCP)',
      'Cost optimisation and resource management',
      'Real-time security monitoring and compliance',
      'Intelligent infrastructure automation',
    ],
    approach:
      'Zentrixel partners with you through every stage of your cloud journey. We assess your requirements, plan a smooth migration, build resilient architectures, and implement best-in-class DevOps and automation. Our experts ensure your cloud is cost-efficient, secure, and ready to scale as your business grows.',
    industries: ['Banking & Financial Services (BFSI)', 'Real Estate & Property Management', 'Startups & SMEs', 'E-commerce', 'Healthcare'],
    useCases: [
      'Migrating financial applications to the cloud for enhanced security and uptime',
      'Cloud-native platforms for real-time property listings and analytics',
      'Scalable retail solutions for peak traffic management',
      'Secure, compliant patient data storage for healthcare',
    ],
    whyZentrixel:
      'Our team has delivered successful cloud solutions for leading businesses across diverse industries and geographies. We combine deep technical expertise in AWS, Azure, and GCP with a commitment to your business goals—ensuring your cloud transformation is efficient, secure, and future-ready.',
    ctaLabel: 'Get a Free Cloud Assessment',
  },
  {
    id: 'automation',
    tab: 'Automation Solutions',
    heading: 'Drive Efficiency with Intelligent Automation',
    intro:
      'Zentrixel delivers intelligent business process automation, advanced RPA services, and seamless workflow automation solutions that boost productivity, eliminate manual effort, and drive scalable growth for your business.',
    whatWeOffer: [
      'Workflow automation to streamline business processes',
      'Robotic Process Automation (RPA) using UiPath, Power Automate',
      'Test automation with Selenium and custom frameworks',
      'Infrastructure automation and scripting',
      'Automated data extraction and report generation',
      'Integration automation between platforms and tools',
      'Custom automation solutions tailored to business needs',
      'Accuracy improvements and reduction of operational overhead',
    ],
    approach:
      'We analyse your processes to identify automation opportunities, then design and implement tailored solutions that deliver measurable efficiency gains. Our team combines industry-leading tools with deep technical expertise to ensure seamless, reliable automation at scale.',
    industries: ['Banking & Financial Services (BFSI)', 'Healthcare & Life Sciences', 'Real Estate', 'Retail & E-commerce', 'Startups & SMEs'],
    useCases: [
      'Automated invoice processing for finance teams',
      'Data entry automation in healthcare systems',
      'Customer onboarding automation for real estate firms',
      'Inventory management automation for retailers',
      'Workflow and lead allocation automation',
    ],
    whyZentrixel:
      'Our automation experts have helped businesses in diverse sectors save time, reduce costs, and increase accuracy. With proven success in workflow, test, and RPA automation, Zentrixel is your partner for intelligent, future-ready operations.',
    ctaLabel: 'Start Your Automation Journey',
  },
  {
    id: 'database',
    tab: 'Database Management',
    heading: 'Intelligent & Secure Database Management Services',
    intro:
      'Zentrixel delivers secure, optimised database management services as a trusted database migration company, providing expert database performance tuning to ensure your business data is always protected, available, and high-performing.',
    whatWeOffer: [
      'Database design and architecture (relational & NoSQL)',
      'Performance tuning and query optimisation',
      'Backup, disaster recovery, and data restoration',
      'High-availability and failover solutions',
      'Security hardening and data encryption',
      'Migration between platforms and cloud databases',
      'Monitoring, health checks, and proactive maintenance',
      'Expertise in MySQL, PostgreSQL, MongoDB, and SQL Server',
      'Scalable solutions for analytics and business intelligence',
    ],
    approach:
      'We start by assessing your current data environment, then design robust, scalable solutions to ensure reliability and security. Our team handles everything from migration to ongoing maintenance, with a proactive focus on performance and business continuity.',
    industries: ['Banking & Financial Services (BFSI)', 'Healthcare & Life Sciences', 'Real Estate & Property Tech', 'Retail & E-commerce', 'Startups & SMEs'],
    useCases: [
      'High-availability banking database systems',
      'Healthcare data migration and secure storage',
      'Real estate platform analytics with NoSQL integration',
      'E-commerce performance tuning for faster transactions',
    ],
    whyZentrixel:
      "Our database specialists combine deep technical expertise with a proactive, security-first approach. Zentrixel's solutions empower businesses to scale, optimise, and protect their most valuable asset—data.",
    ctaLabel: 'Optimise Your Database',
  },
]

// ── Content Panel ────────────────────────────────────────────────────────────

function ServiceContent({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Heading + Intro */}
      <div>
        <h2 className="font-heading text-3xl font-semibold leading-snug text-navy max-md:text-2xl">
          {service.heading}
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-muted">{service.intro}</p>
      </div>

      {/* What We Offer */}
      <div>
        <h3 className="font-sub-heading text-lg font-semibold text-[#103592]">What We Offer</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.whatWeOffer.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Approach */}
      <div>
        <h3 className="font-sub-heading text-lg font-semibold text-[#103592]">Our Approach</h3>
        <p className="mt-3 font-body text-base leading-relaxed text-muted">{service.approach}</p>
      </div>

      {/* Industries + Use Cases side by side */}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-sub-heading text-lg font-semibold text-[#103592]">Industries We Understand</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {service.industries.map((ind) => (
              <li key={ind} className="flex items-center gap-2.5 font-body text-sm text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {ind}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sub-heading text-lg font-semibold text-[#103592]">Sample Use Cases</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {service.useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-2.5 font-body text-sm text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {uc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Zentrixel */}
      <div className="rounded-xl bg-light-bg p-6" style={{ borderLeft: '4px solid #19AAE9' }}>
        <h3 className="font-sub-heading text-lg font-semibold text-navy">Why Zentrixel?</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted">{service.whyZentrixel}</p>
      </div>

      {/* CTA */}
      <div>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
        >
          {service.ctaLabel}
        </Link>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const initialId = SERVICES.find((s) => s.id === tabParam)?.id ?? SERVICES[0].id
  const [activeId, setActiveId] = useState(initialId)

  // Sync if URL changes externally (e.g. footer nav link)
  useEffect(() => {
    const id = SERVICES.find((s) => s.id === tabParam)?.id
    if (id) setActiveId(id)
  }, [tabParam])

  const activeService = SERVICES.find((s) => s.id === activeId)!

  function selectTab(id: string) {
    setActiveId(id)
    setSearchParams({ tab: id }, { replace: true })
  }

  return (
    <>
      <Helmet>
        <title>Services | Zentrixel</title>
        <meta
          name="description"
          content="Explore Zentrixel's comprehensive technology services — AI & ML, Web & Mobile Apps, Cloud Computing, Automation, and Database Management."
        />
      </Helmet>

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20 max-md:pt-28 max-md:pb-14">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Our Services</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Comprehensive Technology & AI Capabilities
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              We combine disciplined engineering with practical AI to modernise platforms and build
              systems designed for long-term value.
            </p>
          </div>
        </section>

        {/* ── Tab Layout ────────────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="flex gap-12 max-lg:flex-col">

              {/* Left — Sticky Tab List */}
              <aside className="lg:w-[280px] lg:shrink-0">
                <nav className="flex flex-col gap-1 max-lg:flex-row max-lg:flex-wrap max-lg:gap-2 lg:sticky lg:top-28">
                  {SERVICES.map((service) => {
                    const isActive = activeId === service.id
                    return (
                      <button
                        key={service.id}
                        onClick={() => selectTab(service.id)}
                        className={[
                          'w-full rounded-lg px-4 py-3.5 text-left font-body text-base transition-all',
                          'max-lg:w-auto',
                          isActive
                            ? 'bg-light-bg font-semibold text-navy'
                            : 'text-muted hover:bg-gray-50 hover:text-navy',
                        ].join(' ')}
                        style={{
                          borderLeft: isActive ? '3px solid #19AAE9' : '3px solid transparent',
                        }}
                      >
                        {service.tab}
                      </button>
                    )
                  })}
                </nav>
              </aside>

              {/* Right — Content */}
              <div className="flex-1 min-w-0">
                <ServiceContent service={activeService} />
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────── */}
        <section className="bg-light-bg py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 text-center max-md:px-5">
            <h2 className="font-heading text-3xl font-semibold text-navy max-md:text-2xl">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 font-body text-base text-muted">
              Book a free consultation to discuss your project requirements.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
