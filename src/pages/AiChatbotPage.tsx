import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FAQ from '../components/sections/FAQ'
import aiChatbotBanner from '../assets/images/ai-chatbot-hero-bg.jpg'
import productChatbot from '../assets/images/conversational-ai-infra.png'
import blueArrow from '../assets/images/blue-arrow.svg';
import cancelIcon from '../assets/images/cancel-icon.svg';
import checkIcon from '../assets/images/check-icon.svg';
import zentrixelLogo from '../assets/images/logo-black.png';
import unifiedOmni from '../assets/images/unified-omni.jpg';
import workflowAutomation from '../assets/images/workflow-automation.png';
import analyticsConversational from '../assets/images/analytics-conversational.png';
import industriesUsingAiBg from '../assets/images/industries-using-ai-bg.jpg'
import BankingIcon from '../assets/images/banking-icon.svg';
import HealthcareIcon from '../assets/images/medical-services-icon.svg';
import InsuranceIcon from '../assets/images/insurance-icon.svg';
import EcommerceIcon from '../assets/images/cart-icon.svg';
import GovernanceIcon from '../assets/images/governance.svg';
import EdTechIcon from '../assets/images/ed-tech.svg';
import SaasIcon from '../assets/images/saas-icon.svg';
import fullyCustomizable from '../assets/images/fully-customizable.png';
import whyZentrixelAi from '../assets/images/why-zentrixel-ai.png';
import ctaBgImg from '../assets/images/chatbot-cta-bg.jpg'
import flexibleSaaS from '../assets/images/flexible-saas.png';
import aiDrivenIcon from '../assets/images/ai-driven-icon.svg';
import revenueAccelerationIcon from '../assets/images/revenue-acceleration-icon.svg';
import supportAutomationIcon from '../assets/images/support-automation-icon.svg';
import websiteChatIcon from '../assets/images/website-chat-widgets-icon.svg';
import customerPortalsIcon from '../assets/images/customer-portals-icon.svg';
import mobileApplicationsIcon from '../assets/images/mobile-applications-icon.svg';
import whatsappBusinessIcon from '../assets/images/whatsapp-business-icon.svg';
import instagramDirectIcon from '../assets/images/instagram-direct-icon.svg';
import facebookMessengerIcon from '../assets/images/facebook-messenger-icon.svg';

const CAPABILITY_TABS = [
  {
    id: 'conversational-intelligence',
    label: 'AI-Driven Conversational Intelligence',
    icon: aiDrivenIcon,
    subtitle: 'Key capabilities include:',
    description:
      'Zentrixel enables intelligent, context-aware conversations across digital channels using advanced natural language understanding and knowledge retrieval systems.',
    features: [
      'Context-aware multi-turn dialogue',
      'Intent detection and classification',
      'Retrieval-Augmented Generation (RAG) knowledge responses',
      'Structured data capture from conversations',
      'Governed fallback logic for complex queries',
    ],
    bottomText:
      'These capabilities allow conversations to trigger workflows, capture structured insights, and drive automation.',
  },
  {
    id: 'revenue-acceleration',
    label: 'Revenue & Pipeline Acceleration',
    icon: revenueAccelerationIcon,
    description:
      '<p class="mb-4">Customer conversations often represent the earliest stage of the revenue funnel. Zentrixel converts these interactions into structured sales opportunities by capturing key details such as requirements, budget range, and project timelines.</p> <p>By synchronizing this data directly with CRM systems, sales teams receive qualified and actionable leads generated from conversational engagement.</p>',
  },
  {
    id: 'support-automation',
    label: 'Customer Support & Service Automation',
    icon: supportAutomationIcon,
    description:
      '<p class="mb-4">Zentrixel enables organizations to automate common customer service interactions while maintaining a consistent support experience.</p> <p class="mb-4">ypical automation scenarios include order tracking, billing inquiries, product information retrieval, and FAQ resolution. When required, conversations can be seamlessly escalated to live agents while preserving full context.</p><p>This helps organizations reduce support workload while maintaining responsive service delivery.</p> ',
  },
]

const INDUSTRIES_ROW1 = [
  {
    name: 'Banking & Financial Services',
    color: '#1E5EFF',
    icon: <img src={BankingIcon} alt="Banking & Financial Services" />,
  },
  {
    name: 'Healthcare and Medical Services',
    color: '#19AAE9',
    icon: <img src={HealthcareIcon} alt="Healthcare & Medical Services" />,
  },
  {
    name: 'Government & Public Sector',
    color: '#1E5EFF',
    icon: <img src={GovernanceIcon} alt="Government & Public Sector" />,
  },
]

const INDUSTRIES_ROW2 = [
  {
    name: 'Insurance',
    color: '#19AAE9',
    icon: <img src={InsuranceIcon} alt="Insurance" />,
  },
  {
    name: 'EdTech',
    color: '#1E5EFF',
    icon: <img src={EdTechIcon} alt="E-commerce" />,
  },
  {
    name: 'SaaS & Technology',
    color: '#19AAE9',
    icon: <img src={SaasIcon} alt="Education" />,
  },
  {
    name: 'E-Commerce & Retail',
    color: '#1E5EFF',
    icon: <img src={EcommerceIcon} alt="Telecommunications" />,
  },
]

const AI_CHATBOT_FAQS = [
  {
    question: 'What is an enterprise conversational AI platform?',
    answer: 'An enterprise conversational AI platform is a cloud-based SaaS AI chatbot system that automates customer engagement, lead generation, support workflows, and backend orchestration across website chat, WhatsApp Business API, mobile apps, and messaging channels — with governance, audit logging, and enterprise integrations built in.\n\nIt operates as digital infrastructure, not just a chatbot tool.',
  },
  {
    question: 'How is conversational AI SaaS different from a basic chatbot?',
    answer: 'A basic chatbot follows scripted decision trees.\nAn enterprise conversational AI SaaS platform provides:\n• Context-aware multi-turn intelligence\n• Retrieval-Augmented Generation (RAG)\n• Omnichannel AI chatbot deployment\n• CRM/ERP workflow orchestration\n• Audit-grade governance\n\nZentrixel functions as infrastructure-level conversational AI.',
  },
  {
    question: 'How does Zentrixel differ from traditional chatbot software?',
    answer: 'Traditional chatbot software relies on rule-based flows or limited LLM responses.\nZentrixel delivers:\n• Multi-tenant SaaS architecture\n• Centralized omnichannel control\n• Enterprise integrations (CRM, ERP)\n• Guardrails and prompt governance\n• Compliance-aligned deployment models\n\nIt is engineered for scale, traceability, and enterprise resilience.',
  },
  {
    question: 'What is the best enterprise AI chatbot platform for regulated industries?',
    answer: 'The best enterprise AI chatbot platform for regulated industries must include:\n• Tenant-level data isolation\n• Encryption and RBAC\n• Structured audit trails\n• Secure CRM/ERP integrations\n• Compliance-aligned architecture\n\nZentrixel is designed for BFSI, healthcare, insurance, SaaS, and government sectors requiring governed conversational AI infrastructure.',
  },
  {
    question: 'Does Zentrixel support WhatsApp Business API and omnichannel deployment?',
    answer: 'Yes. Zentrixel enables omnichannel AI chatbot deployment across:\n• Website chat\n• WhatsApp Business API\n• Mobile applications\n• Instagram Direct\n• Facebook Messenger\n\nAll channels operate through a centralized SaaS dashboard with unified governance and analytics.',
  },
  {
    question: 'Can Zentrixel integrate with CRM, ERP, and enterprise systems?',
    answer: 'Yes. The platform integrates with:\n• CRM systems\n• ERP platforms\n• Payment gateways\n• Ticketing tools\n• Marketing automation platforms\n\nSecure REST APIs and webhooks enable real-time workflow activation and structured audit logging.',
  },
  {
    question: 'Can Zentrixel support high-concurrency enterprise environments?',
    answer: 'Yes. Built on a cloud-native microservices architecture, the platform supports:\n• Horizontal scalability\n• Stateless AI orchestration\n• High-concurrency message processing\n• SLA-backed reliability\n\nIt is designed for mission-critical enterprise workloads.',
  },
  {
    question: 'Is the platform secure and compliance-ready?',
    answer: 'Yes. Security and governance are embedded by design:\n• HTTPS / TLS encryption\n• Role-Based Access Control (RBAC)\n• Tenant-level data segregation\n• Structured audit trails\n• Configurable data retention policies\n\nSuitable for regulated industries and compliance-driven environments.',
  },
  {
    question: 'Does Zentrixel train AI models on enterprise data?',
    answer: 'No. Enterprise data remains tenant-isolated and governed under defined security policies. Knowledge ingestion is controlled, and retention policies ensure compliance-aligned AI operations.',
  },
  {
    question: 'What industries benefit from enterprise conversational AI?',
    answer: 'Enterprise conversational AI is particularly valuable for:\n• Banking customer onboarding automation\n• Insurance claims and policy servicing\n• Healthcare patient engagement\n• SaaS customer lifecycle automation\n• E-commerce order management\n• Government service digitization\n\nZentrixel supports integration-heavy and compliance-driven industries.',
  },
  {
    question: 'Is Zentrixel suitable for enterprises in India, UAE, GCC, and global markets?',
    answer: 'Yes. Zentrixel supports enterprises across India, UAE, GCC, and global markets requiring scalable, secure, and compliance-aligned conversational AI SaaS infrastructure.',
  },
  {
    question: 'How does Zentrixel improve AI chatbot lead generation?',
    answer: 'Zentrixel transforms conversational engagement into structured sales pipeline using:\n• Dynamic qualification workflows\n• Budget and requirement capture\n• Intelligent lead scoring\n• Real-time CRM synchronization\n• Automated sales routing\n\nThis accelerates qualification cycles and improves conversion velocity.',
  },
  {
    question: 'Is Zentrixel delivered as a cloud SaaS AI chatbot platform?',
    answer: 'Yes. Zentrixel is primarily delivered as a cloud-native multi-tenant SaaS AI chatbot platform, with optional white-label and private cloud deployment models.',
  },
  {
    question: 'Is white-label AI chatbot SaaS available?',
    answer: 'Yes. Zentrixel supports white-label AI chatbot SaaS, allowing partners to:\n• Rebrand the platform\n• Provision multiple tenants\n• Manage administration\n• Monetize conversational AI services',
  },
  {
    question: 'How much does enterprise AI chatbot software cost?',
    answer: 'Enterprise AI chatbot software pricing depends on:\n• Deployment model (SaaS, white-label, private cloud)\n• Channel coverage (website, WhatsApp, mobile)\n• Message volume and automation depth\n• CRM/ERP integration complexity\n• Governance and compliance requirements\n\nZentrixel offers tiered SaaS plans, usage-based pricing, and enterprise licensing aligned with operational scale.',
  },
]

export default function AiCallingPage() {
  const [activeTab, setActiveTab] = useState('conversational-intelligence');
  const activeCapability = CAPABILITY_TABS.find((t) => t.id === activeTab)!
  return (
    <>
      <Helmet>
        <title>AI Calling Platform | Zentrixel</title>
        <meta
          name="description"
          content="Automate inbound support calls, outbound sales conversations, and customer engagement using the Zentrixel AI Calling Platform — enterprise-grade voice automation."
        />
      </Helmet>

      <main>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Layer 2 — calling-banner.jpg full-bleed background */}
          <img
            src={aiChatbotBanner}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />

          {/* Content — vertically centred within full viewport height */}
          <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-14 pt-20 max-md:px-5">
            <div className="max-w-[764px] py-16 max-md:py-10">
              <h1
                className="font-heading font-medium leading-tight max-md:text-3xl"
                style={{
                  fontSize: '42px',
                }}
              >
                Enterprise Conversational AI Infrastructure for Website, <br /> WhatsApp & Digital Channels
              </h1>

              <div className="mt-8 max-w-[710px]">
                <p
                  className="mt-8 font-sub-heading font-medium"
                  style={{ fontSize: '20px', lineHeight: '1.6' }}
                >
                  Governed AI. Intelligent Automation. Measurable Enterprise Outcomes.
                </p>
                <p
                  className="mt-4 font-body leading-relaxed"
                  style={{ fontSize: '16px', lineHeight: '1.5' }}
                >
                  Zentrixel AI Chatbot Platform is a cloud-native, multi-tenant Conversational AI SaaS engineered as enterprise infrastructure not a standalone chatbot tool.
                </p>
                <p
                  className="mt-4 font-body leading-relaxed"
                  style={{ fontSize: '16px', lineHeight: '1.5' }}
                >
                  Built for organizations requiring scalable, integration-ready, compliance-aligned digital engagement systems.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-[30px] bg-primary font-body text-base text-white transition-colors hover:bg-primary/90"
                  style={{ width: '218px', height: '48px' }}
                >
                  Book a Free Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Enterprises Need Conversational AI Infrastructure ── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-16 lg:grid-cols-[4fr_6fr]">
              {/* ── Left: Phone Mockup ── */}
              <div className="relative  max-lg:hidden">
                {/* Section heading */}
                <h2 className="mb-10 font-heading text-4xl font-semibold leading-snug text-navy max-md:mb-8 max-md:text-3xl">
                  Why Enterprises Need Conversational AI Infrastructure
                </h2>
                <div>
                  <img
                    src={productChatbot}
                    alt="AI Chatbot Interface"
                  />
                </div>
              </div>

              {/* ── Right: Content cards ── */}
              <div className="flex flex-col gap-6">
                {/* Two cards side by side */}
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  {/* Card 1 — Digital influence */}
                  <div className="rounded-l p-6" style={{ background: '#F5F6FF' }}>
                    <p
                      className="mb-4 font-sub-heading text-base font-semibold"
                      style={{ color: '#103592' }}
                    >
                      Digital conversations now influence:
                    </p>
                    <ul className="flex flex-col gap-3">
                      {[
                        'Revenue qualification',
                        'Customer lifecycle automation',
                        'Operational workflow activation',
                        'Real-time decision intelligence',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <img
                            src={blueArrow}
                            alt=""
                            className="mt-[2px] h-3.5 w-3.5 shrink-0"
                          />
                          <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 2 — Legacy limitations */}
                  <div className="rounded-l p-6" style={{ background: '#F5F6FF' }}>
                    <p
                      className="mb-4 font-sub-heading text-base font-semibold text-navy"
                      style={{ color: '#103592' }}
                    >
                      Yet most enterprises still rely on:
                    </p>
                    <ul className="flex flex-col gap-3">
                      {[
                        'Script-based chat flows',
                        'Separate bots per channel',
                        'Disconnected automation systems',
                        'Limited governance and traceability',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <img
                            src={blueArrow}
                            alt=""
                            className="mt-[2px] h-3.5 w-3.5 shrink-0"
                          />
                          <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Result text */}
                <div>
                  <p className="font-body text-base leading-relaxed text-muted">
                    <strong className="font-semibold text-navy">The result: </strong><br />
                    Revenue leakage. Compliance exposure. Operational fragmentation.
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    Zentrixel centralizes engagement into a unified AI intelligence layer.
                  </p>
                </div>

                {/* Dark navy callout banner */}
                <div
                  className="rounded-l px-8 py-5"
                  style={{ background: '#103592' }}
                >
                  <p className="font-heading text-xl font-semibold text-white">
                    One AI engine. Multiple enterprise functions. Zero fragmentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── How Zentrixel Differs from Traditional Chatbot Software ── */}
        <section className="py-24 max-md:py-16 bg-white">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="mb-12 text-center font-heading text-4xl font-semibold text-navy max-md:text-3xl">
              How Zentrixel Differs from Traditional<br className="hidden md:block" /> Chatbot Software
            </h2>

            <div className="overflow-x-auto rounded-xl border bg-white" style={{ borderColor: '#C8CFFF' }}>
              <table className="w-full table-fixed text-left" style={{ minWidth: '700px' }}>
                <thead>
                  <tr className="border-b divide-x divide-[#C8CFFF]" style={{ borderColor: '#C8CFFF' }}>
                    <th className="w-1/4 h-[60px] px-8 font-sub-heading text-sm font-semibold tracking-widest text-navy uppercase">
                      Capability
                    </th>
                    <th className="w-1/4 h-[60px] px-8 font-sub-heading text-base font-semibold text-navy">
                      Rule-Based Bots
                    </th>
                    <th className="w-1/4 h-[60px] px-8 font-sub-heading text-base font-semibold text-navy">
                      Basic LLM Bots
                    </th>
                    <th className="w-1/4 h-[60px] px-8 font-sub-heading text-base font-semibold text-navy bg-[#F8FAFF]">
                      <div className="flex items-center gap-2">
                        <img src={zentrixelLogo} alt="Zentrixel" className="max-w-[80px] relative top-[2px]" />
                        <span className="font-bold">Platform</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C8CFFF]" style={{ borderColor: '#C8CFFF' }}>
                  {/* Row 1 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted border-l-0">Multi-tenant SaaS Architecture</td>
                    <td className="h-[60px] px-8 text-2xl"><img src={cancelIcon} alt="" /></td>
                    <td className="h-[60px] px-8 text-2xl"><img src={cancelIcon} alt="" /></td>
                    <td className="h-[60px] px-8 text-2xl bg-[#F8FAFF]"><img src={checkIcon} alt="" /></td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted">RAG + Guardrail Framework</td>
                    <td className="h-[60px] px-8 text-2xl"><img src={cancelIcon} alt="" /></td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Limited</td>
                    <td className="h-[60px] px-8 text-2xl bg-[#F8FAFF]"><img src={checkIcon} alt="" /></td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted">CRM/ERP Workflow Orchestration</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Basic</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Limited</td>
                    <td className="h-[60px] px-8 font-body text-sm text-navy font-medium bg-[#F8FAFF]">Advanced</td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted">Omnichannel Unified Control</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Fragmented</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Fragmented</td>
                    <td className="h-[60px] px-8 font-body text-sm text-navy font-medium bg-[#F8FAFF]">Centralized</td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted">Audit & Governance Controls</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Minimal</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Minimal</td>
                    <td className="h-[60px] px-8 font-body text-sm text-navy font-medium bg-[#F8FAFF]">Enterprise-Grade</td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="divide-x divide-[#C8CFFF]">
                    <td className="h-[60px] px-8 font-body text-sm font-medium text-muted">Deployment Flexibility</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Low</td>
                    <td className="h-[60px] px-8 font-body text-sm text-muted">Low</td>
                    <td className="h-[60px] px-8 font-body text-sm text-navy font-medium bg-[#F8FAFF]">SaaS / White-Label / Private</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-center font-body text-m font-medium text-muted">
              Zentrixel is engineered as enterprise infrastructure — not experimental AI tooling.
            </p>
          </div>
        </section>

        {/* ── Core Platform Capabilities ─────────────────────────── */}
        <section className="relative py-24 max-md:py-16 mt-24">
          {/* Blue background taking 70% width and height on desktop */}
          <div
            className="absolute left-0 top-0 z-0 h-full w-full lg:h-[80%] lg:w-[85%] rounded-br-[40px]"
            style={{ backgroundColor: '#103592', borderRadius: '0px 20px 0px 0px' }}
          />
          <div className="relative z-10 mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="mb-10 grid items-center gap-10 lg:grid-cols-2">
              <h2 className="font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
                Core Platform <br /> Capabilities
              </h2>
              <p className="font-body text-base leading-relaxed text-white/90 lg:text-right mr-[35%]">
                The Zentrixel platform enables organizations to transform digital conversations into meaningful business outcomes by connecting conversational AI with enterprise systems and workflows
              </p>
            </div>
            <div className="grid items-start gap-12 lg:grid-cols-[407px_1fr] lg:gap-20">
              {/* Left — Tab list */}
              <div className="flex flex-col max-lg:mb-6 max-lg:gap-2">
                {CAPABILITY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-between px-4 py-5 text-left transition-all cursor-pointer ${isActive
                        ? 'bg-white/10 font-semibold text-white rounded-b-lg'
                        : 'text-white/70 hover:text-white'
                        }`}
                      style={{
                        borderBottom: isActive
                          ? '2px solid #19AAE9'
                          : '1px solid rgba(200, 207, 255, 0.3)',
                        fontSize: '18px',
                        lineHeight: '1.3',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      <span>{tab.label}</span>
                      {isActive && (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="shrink-0 max-lg:hidden"
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Right — Content card */}
              <div
                className="rounded-2xl p-8 max-md:p-5"
                style={{
                  minHeight: '373px',
                  background: 'linear-gradient(180deg, #F0EEFB 0%, #D7D3F6 100%)'
                }}
              >
                {/* Icon + Title + Description row */}
                <div className="flex items-start gap-5">
                  {/* Icon box — 100×100, white bg, rounded */}
                  <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-lg bg-white">
                    <img
                      src={activeCapability.icon}
                      alt=""
                      className="h-[68px] w-[68px]"
                    />
                  </div>

                  {/* Title + short description */}
                  <div className="pt-1">
                    <h3
                      className="font-body font-semibold text-navy"
                      style={{ fontSize: '20px', lineHeight: '1.3' }}
                    >
                      {activeCapability.label}
                    </h3>
                    <div
                      className="mt-2 font-body text-base leading-relaxed text-muted prose prose-p:mb-4 pr-[20px]"
                      dangerouslySetInnerHTML={{ __html: activeCapability?.description || '' }}
                    />
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className="mt-6 font-body text-base font-semibold"
                  style={{ color: '#103592', paddingLeft: '4px' }}
                >
                  {activeCapability?.subtitle}
                </p>

                {/* Features — 2 column grid with arrow bullets */}
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 max-sm:grid-cols-1">
                  {activeCapability?.features?.map((feature) => (
                    <div key={feature} className="flex gap-2.5">
                      <img src={blueArrow} alt="" className="shrink-0 w-4 h-4 mt-1 self-start" />
                      <span className="font-body text-base leading-relaxed text-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom text */}
                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  {activeCapability.bottomText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Unified Omnichannel Control ─────────────────────────── */}
        <section className="py-24 max-md:py-16 bg-white">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            {/* Header */}
            <div className="mb-14 max-w-3xl mx-auto text-center">
              <h2 className="mb-6 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                Unified Omnichannel Control
              </h2>
              <p className="font-body text-base leading-relaxed text-muted">
                Customers engage with organizations across multiple digital touchpoints. Zentrixel enables enterprises to deploy a single AI conversational engine across all channels.
              </p>
            </div>

            {/* Content Grid (Image Left, Content Right) */}
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left Column — Image */}
              <div className="relative flex items-center justify-center max-lg:order-2">
                <img src={unifiedOmni} alt="Unified Omnichannel Control" />
              </div>

              {/* Right Column — Content */}
              <div className="flex flex-col max-lg:order-1">
                <div>
                  <h3 className="mb-6 font-sub-heading text-base font-semibold text-[#103592]">
                    Supported channels include:
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-sm:grid-cols-1">
                    {[
                      { name: 'Website chat widgets', icon: websiteChatIcon },
                      { name: 'Customer portals and web applications', icon: customerPortalsIcon },
                      { name: 'Mobile applications', icon: mobileApplicationsIcon },
                      { name: 'WhatsApp Business API', icon: whatsappBusinessIcon },
                      { name: 'Instagram Direct', icon: instagramDirectIcon },
                      { name: 'Facebook Messenger', icon: facebookMessengerIcon }
                    ].map((channel) => (
                      <div key={channel.name} className="flex items-center gap-4">
                        <div className="h-[64px] w-[64px] shrink-0 rounded-md bg-[#F3F4FB] flex items-center justify-center shadow-sm">
                          <img src={channel.icon} alt={channel.name} />
                        </div>
                        <span className="font-body text-base text-navy">{channel.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-base leading-relaxed text-muted mt-8">
                    All conversations are managed through a centralized SaaS dashboard that provides unified routing, monitoring, and analytics. This ensures organizations can deliver consistent conversational experiences regardless of channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Workflow Automation & Enterprise Integrations ─────────────────────────── */}
        <section className="py-24 max-md:py-16 bg-light-bg">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="flex flex-col max-lg:order-1">
                <h2 className="mb-6 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Workflow Automation & Enterprise Integrations
                </h2>
                <p className="font-body text-base leading-relaxed text-muted">
                  Conversational AI becomes significantly more powerful when it connects directly with enterprise systems.
                  <br /><br />
                  Zentrixel integrates with CRM platforms, ERP systems, ticketing tools, payment gateways, and marketing automation platforms through secure APIs and webhooks.
                  <br /><br />
                  These integrations allow conversations to automatically trigger business processes such as lead creation, ticket generation, order tracking, and payment verification.
                  <br /><br />
                  Every interaction becomes a traceable operational event within the enterprise ecosystem.
                </p>
              </div>

              <div className="relative flex items-center justify-center max-lg:order-2">
                <img src={workflowAutomation} alt="Workflow Automation & Enterprise Integrations" />
              </div>
            </div>
          </div>
        </section>
        {/* ── AI Governance & Security Cards ─────────────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

              {/* AI Governance Card */}
              <div
                className="rounded-2xl p-10"
                style={{ background: 'linear-gradient(180deg, #F6FBF5 0%, #DEFED6 100%)' }}
              >
                <h3 className="mb-4 font-heading text-2xl font-semibold text-navy max-md:text-2xl">
                  AI Governance & Model Control
                </h3>
                <p className="mb-8 font-body text-base leading-relaxed text-muted">
                  Enterprise AI systems require strong governance to ensure reliability, transparency, and controlled behavior. Zentrixel combines natural language processing with large language models while enforcing guardrails that regulate how AI interacts with users and enterprise data.
                </p>

                <div className="rounded-xl bg-white p-6">
                  <h4 className="mb-4 font-sub-heading text-base font-semibold text-[#103592]">
                    Key governance capabilities include:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Retrieval-Augmented Generation (RAG) knowledge framework',
                      'Prompt governance and AI guardrail policies',
                      'Controlled knowledge ingestion workflows',
                      'Low-confidence detection and fallback mechanisms'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex items-center justify-center min-w-[16px]">
                          <img src={blueArrow} alt="Check" />
                        </div>
                        <span className="font-body text-base text-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Security, Compliance Card */}
              <div
                className="rounded-2xl p-10"
                style={{ background: 'linear-gradient(180deg, #EBF6F8 0%, #C2DDE8 100%)' }}
              >
                <h3 className="mb-4 font-heading text-2xl font-semibold text-navy max-md:text-2xl">
                  Security, Compliance & Data Governance
                </h3>
                <p className="mb-8 font-body text-base leading-relaxed text-muted">
                  Security is embedded within the Zentrixel platform architecture to support organizations operating in compliance-sensitive environments.
                  The platform incorporates enterprise-grade security mechanisms designed to protect data, control access, and maintain traceability.
                </p>

                <div className="rounded-xl bg-white p-6">
                  <h4 className="mb-4 font-sub-heading text-base font-semibold text-[#103592]">
                    Key security capabilities include:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'End-to-end encryption using HTTPS / TLS protocols',
                      'Role-Based Access Control (RBAC)',
                      'Tenant-level data isolation',
                      'Structured audit trails and monitoring'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex items-center justify-center min-w-[16px]">
                          <img src={blueArrow} alt="Check" />
                        </div>
                        <span className="font-body text-base text-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ──  Analytics & Conversational Intelligence ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: text */}
              <div>
                <h2 className="mb-4 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Analytics & Conversational <br /> Intelligence
                </h2>
                <p className="font-body text-base leading-relaxed text-muted">
                  Measure performance. Detect gaps. Optimize continuously.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {[
                    'Conversation volume tracking',
                    'Intent classification reporting',
                    'Lead conversion analytics',
                    'Automation coverage analysis',
                    'Channel performance insights',
                    'Campaign ROI measurement',
                    'Funnel drop-off visibility'
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center rounded-md bg-light-bg py-4 pr-4 font-body text-sm text-navy min-h-[66px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      style={{ borderLeft: '4px solid #19AAE9', paddingLeft: '18px' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  Conversational data becomes measurable enterprise intelligence.
                </p>
              </div>
              {/* Right: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={analyticsConversational}
                  alt="AI voice automation"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ── Measurable Business Impact ─────────────────────────── */}
        <section className="relative overflow-hidden py-24 px-6 max-md:py-12 max-md:px-4">
          <div className="relative mx-auto max-w-[1440px] px-14 py-14 max-md:px-5 max-md:py-10">
            <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
              Measurable Business Impact
            </h2>
            <p className="mt-4 max-w-[581px] font-body text-base leading-relaxed text-muted">
              Organizations implementing Zentrixel AI Chatbot Platform typically achieve:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left Column: 6 cards in a 3x2 grid */}
              <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #DEECD6 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">30–50%</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">reduction</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">in manual support workload</p>
                </div>

                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #ECF4F8 0%, #C2DDE8 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">2–3x</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">faster</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">lead qualification cycles</p>
                </div>

                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #F0EDFB 0%, #D7D3F6 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">25–40%</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">increase</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">in qualified pipeline capture</p>
                </div>

                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #ECEFF6 0%, #E0E1F6 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">20–35%</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">improvement</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">in first-response time</p>
                </div>

                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #FFFED8 0%, #F9E5C5 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">40–60%</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">automation</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">coverage of repetitive queries</p>
                </div>

                <div
                  className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #D8F0F1 0%, #C5EFE3 100%)',
                  }}
                >
                  <p className="font-heading text-4xl font-semibold text-navy">24/7</p>
                  <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">engagement</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">without incremental staffing</p>
                </div>
              </div>

              {/* Right Column: Security Capabilities */}
              <div className="rounded-2xl p-8 lg:col-span-1 shadow-sm flex flex-col justify-center" style={{ background: '#F3F4FB' }}>
                <h3 className="font-body text-lg font-semibold text-navy mb-6">
                  Key security capabilities include:
                </h3>
                <ul className="space-y-4">
                  {[
                    'End-to-end encryption using HTTPS / TLS protocols',
                    'Role-Based Access Control (RBAC)',
                    'Tenant-level data isolation',
                    'Structured audit trails and monitoring'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <img src={blueArrow} alt="" className="w-4 h-4 object-contain" />
                      </div>
                      <span className="font-body text-base text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <p className="font-body text-base font-medium text-navy leading-relaxed">
                    Conversational AI becomes a foundational digital asset not an experiment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── Industries Using AI Voice Automation ───────────────── */}
        <section className="py-16 max-md:py-10">
          <div className="relative mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="relative overflow-hidden rounded-2xl px-14 py-14 max-md:px-5 max-md:py-10">
              <img
                src={industriesUsingAiBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              />
              <div className="relative">
                <h2 className="text-center font-heading text-4xl font-semibold leading-snug text-[#000000] max-md:text-3xl">
                  Industries Served
                </h2>
                <p className="mx-auto mt-4 max-w-[633px] text-center font-body text-base leading-relaxed text-[#000000]">
                  Transforming customer engagement with AI-driven <br /> solutions tailored for every industry
                </p>

                <div className="mt-14 max-md:mt-8">
                  {/* Row 1 — 3 items desktop, 1 item per row on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                    {INDUSTRIES_ROW1.map((industry, i) => (
                      <div
                        key={industry.name}
                        className={[
                          'group flex items-center gap-4 px-6 py-5 max-md:px-4 max-md:py-4 cursor-pointer',
                          // on desktop: right border between items
                          i < INDUSTRIES_ROW1.length - 1 ? 'md:border-r md:border-r-black/20' : '',
                          // on mobile: bottom border between every item
                          i < INDUSTRIES_ROW1.length - 1 ? 'max-md:border-b max-md:border-b-black/20' : '',
                        ].join(' ')}
                      >
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                          style={{ background: industry.color }}
                        >
                          {industry.icon}
                        </div>
                        <p className="font-body text-base font-medium leading-snug text-navy">
                          {industry.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Row 2 — 4 items desktop, 1 item per row on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {INDUSTRIES_ROW2.map((industry, i) => (
                      <div
                        key={industry.name}
                        className={[
                          'group flex items-center gap-4 px-6 py-5 max-md:px-4 max-md:py-4 cursor-pointer',
                          // on desktop: right border between items
                          i < INDUSTRIES_ROW2.length - 1 ? 'md:border-r md:border-r-black/20' : '',
                          // on mobile: bottom border between every item except the last
                          i < INDUSTRIES_ROW2.length - 1 ? 'max-md:border-b max-md:border-b-black/20' : '',
                        ].join(' ')}
                      >
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                          style={{ background: industry.color }}
                        >
                          {industry.icon}
                        </div>
                        <p className="font-body text-base font-medium leading-snug text-navy">
                          {industry.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mx-auto mt-10 max-w-[630px] text-center font-body text-base leading-relaxed text-[#000000]">
                  Designed for integration-heavy, compliance-driven environments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──  Flexible SaaS Subscription Models ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={flexibleSaaS}
                  alt="Flexible SaaS Subscription Models"
                  loading="lazy"
                />
              </div>
              {/* Right: text wrapped in a card */}
              <div
                className="relative w-full rounded-md border border-[#F5F6FF] bg-white px-8 py-10 shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-md:px-6 max-md:py-8 lg:-left-[130px] lg:top-[33px] lg:w-[calc(100%+130px)]"
              >
                <h2 className="mb-4 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Flexible SaaS Subscription Models
                </h2>
                <p className="font-body text-base leading-relaxed text-muted">
                  Commercial flexibility aligned with operational scale:
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {[
                    'Tiered SaaS plans',
                    'Enterprise licensing',
                    'Usage-based pricing',
                    'Custom volume agreements',
                    'Channel-based subscriptions'
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center rounded-md bg-light-bg py-4 pr-4 font-body text-sm text-navy min-h-[66px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      style={{ borderLeft: '4px solid #19AAE9', paddingLeft: '18px' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  Designed to support startups, growth-stage companies, and global enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──  Structured Enterprise Onboarding ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="text-center font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
              Structured Enterprise Onboarding
            </h2>
            <p className="mt-4 text-center font-body text-base leading-relaxed text-muted">
              A predictable, governed implementation model.
            </p>

            <div className="relative mt-16 max-w-5xl mx-auto">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/20 -translate-x-1/2 max-md:left-8 max-md:translate-x-0"></div>

              {/* Phase 1 */}
              <div className="relative flex w-full mb-12 max-md:flex-col max-md:pl-16">
                {/* Left side (Desktop Badge) */}
                <div className="w-1/2 pr-12 flex justify-end items-start max-md:hidden">
                  <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-5 py-1.5 text-white font-body text-sm font-medium">
                    Phase 1
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-[#1E5EFF]/20 -translate-x-1/2 top-[6px] max-md:left-8 max-md:-translate-x-[7px]"></div>

                {/* Right side content */}
                <div className="w-1/2 pl-12 max-md:w-full max-md:pl-0 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    {/* Mobile Badge */}
                    <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-4 py-1 text-white font-body text-xs font-medium md:hidden min-w-[80px]">
                      Phase 1
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy m-0">Discovery & Conversational Design</h3>
                  </div>
                  <div className="w-full rounded-xl p-6 bg-gradient-to-b from-[#F5F9FF] to-[#E8F1FF] border border-[#C8CFFF]">
                    <p className="font-body text-base text-navy leading-relaxed">Use case definition, workflow mapping, governance alignment.</p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex w-full mb-12 max-md:flex-col max-md:pl-16">
                {/* Left side content */}
                <div className="w-1/2 pr-12 max-md:w-full max-md:pr-0 flex flex-col items-end max-md:items-start gap-4">
                  <div className="flex items-center gap-4 flex-row-reverse max-md:flex-row">
                    {/* Mobile Badge */}
                    <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-4 py-1 text-white font-body text-xs font-medium md:hidden min-w-[80px]">
                      Phase 2
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy m-0 text-right max-md:text-left">Configuration & Integration</h3>
                  </div>
                  <div className="w-full rounded-xl p-6 bg-gradient-to-b from-[#F5F9FF] to-[#E8F1FF] border border-[#C8CFFF]">
                    <p className="font-body text-base text-navy leading-relaxed text-right max-md:text-left">Channel enablement, API connectivity, CRM/ERP synchronization, AI validation.</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-[#1E5EFF]/20 -translate-x-1/2 top-[6px] max-md:left-8 max-md:-translate-x-[7px]"></div>

                {/* Right side (Desktop Badge) */}
                <div className="w-1/2 pl-12 flex justify-start items-start max-md:hidden">
                  <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-5 py-1.5 text-white font-body text-sm font-medium">
                    Phase 2
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex w-full mb-12 max-md:flex-col max-md:pl-16">
                {/* Left side (Desktop Badge) */}
                <div className="w-1/2 pr-12 flex justify-end items-start max-md:hidden">
                  <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-5 py-1.5 text-white font-body text-sm font-medium">
                    Phase 3
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-[#1E5EFF]/20 -translate-x-1/2 top-[6px] max-md:left-8 max-md:-translate-x-[7px]"></div>

                {/* Right side content */}
                <div className="w-1/2 pl-12 max-md:w-full max-md:pl-0 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-4">
                    {/* Mobile Badge */}
                    <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-4 py-1 text-white font-body text-xs font-medium md:hidden min-w-[80px]">
                      Phase 3
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy m-0">Testing & Optimization</h3>
                  </div>
                  <div className="w-full rounded-xl p-6 bg-gradient-to-b from-[#F5F9FF] to-[#E8F1FF] border border-[#C8CFFF]">
                    <p className="font-body text-base text-navy leading-relaxed">Conversation tuning, load validation, security testing, performance benchmarking.</p>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex w-full max-md:flex-col max-md:pl-16">
                {/* Left side content */}
                <div className="w-1/2 pr-12 max-md:w-full max-md:pr-0 flex flex-col items-end max-md:items-start gap-4">
                  <div className="flex items-center gap-4 flex-row-reverse max-md:flex-row">
                    {/* Mobile Badge */}
                    <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-4 py-1 text-white font-body text-xs font-medium md:hidden min-w-[80px]">
                      Phase 4
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy m-0 text-right max-md:text-left">Controlled Go-Live</h3>
                  </div>
                  <div className="w-full rounded-xl p-6 bg-gradient-to-b from-[#F5F9FF] to-[#E8F1FF] border border-[#C8CFFF]">
                    <p className="font-body text-base text-navy leading-relaxed text-right max-md:text-left">Phased rollout, monitoring dashboards, continuous optimization.</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-[#1E5EFF]/20 -translate-x-1/2 top-[6px] max-md:left-8 max-md:-translate-x-[7px]"></div>

                {/* Right side (Desktop Badge) */}
                <div className="w-1/2 pl-12 flex justify-start items-start max-md:hidden">
                  <div className="bg-gradient-to-r from-[#19AAE9] to-[#1E5EFF] rounded-[40px] px-5 py-1.5 text-white font-body text-sm font-medium">
                    Phase 4
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-20 text-center font-body text-xl font-medium leading-relaxed text-muted">
              Deployment timelines vary based on integration complexity and compliance scope.
            </p>
          </div>
        </section>

        {/* ──  Analytics & Conversational Intelligence ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2 lg:grid-cols-[4fr_6fr]">
              {/* Left: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={fullyCustomizable}
                  alt="Fully Customizable & White-Label Ready"
                />
              </div>
              {/* Right: text */}
              <div>
                <h2 className="mb-4 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Fully Customizable & White-Label Ready
                </h2>
                <p className="font-body text-base leading-relaxed text-muted">
                  Modular. Configurable. Extensible.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {[
                    'Industry-specific conversational journeys',
                    'Brand-aligned chat interface design',
                    'Advanced routing & escalation logic',
                    'Multi-widget deployment',
                    'Custom lead scoring models',
                    'Extended API integrations',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center rounded-md bg-light-bg py-4 pr-4 font-body text-sm text-navy min-h-[66px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      style={{ borderLeft: '4px solid #19AAE9', paddingLeft: '18px' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  Enhancements delivered without rebuilding core infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ──  Why Zentrixel AI Chatbot Platform? ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2 lg:grid-cols-[6fr_4fr]">
              {/* Left: text */}
              <div>
                <h2 className="mb-6 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Why Zentrixel AI Chatbot Platform?
                </h2>
                <div className="mt-4 grid lg:grid-cols-2 gap-2 max-sm:grid-cols-1">
                  <ul className="space-y-4">
                    {[
                      'Enterprise conversational AI SaaS architecture',
                      'Governance-first design',
                      'Hybrid AI with guardrails',
                      'Unified omnichannel control layer'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex items-center justify-center">
                          <img src={blueArrow} alt="Check" />
                        </div>
                        <span className="font-body text-base text-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {[
                      'Deep CRM/ERP integration capability',
                      'White-label SaaS enablement',
                      'Compliance-aligned security framework',
                      'Commercial flexibility at scale'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex items-center justify-center">
                          <img src={blueArrow} alt="Check" />
                        </div>
                        <span className="font-body text-base text-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  Built for enterprises modernizing digital engagement through secure, scalable, intelligent automation.
                </p>
              </div>
              {/* Right: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={whyZentrixelAi}
                  alt="Fully Customizable & White-Label Ready"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Let's Build Technology That Works — CTA */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="relative overflow-hidden rounded-[20px] max-md:rounded-xl">
              <img
                src={ctaBgImg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(-89deg, rgba(255,255,255,0) 37%, rgba(255,255,255,0.5) 52%, rgba(244,244,244,1) 67%)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 md:hidden"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(244,244,244,0.95) 0%, rgba(244,244,244,0.8) 70%, rgba(255,255,255,0) 100%)',
                }}
              />
              <div className="relative p-16 max-md:p-6">
                <h2 className="mb-10 max-w-[440px] font-heading text-4xl font-semibold leading-snug text-navy max-md:text-2xl">
                  Transform Conversations into Governed Digital Infrastructure
                </h2>
                <ul className="space-y-4">
                  {[
                    'Engage instantly.',
                    'Qualify intelligently.',
                    'Automate securely.',
                    'Scale confidently.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-[8px] flex items-center justify-center">
                        <img src={blueArrow} alt="Check" />
                      </div>
                      <span className="font-body text-xl leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4 max-md:mt-6 max-md:flex-col max-md:items-start max-md:gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90 max-md:h-11 max-md:px-5 max-md:text-sm"
                  >
                    Book a Free Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="text-center font-heading text-4xl font-semibold uppercase leading-snug text-navy tracking-wide max-md:mb-8 max-md:text-3xl">
              Frequently Asked Questions
            </h2>
            <FAQ items={AI_CHATBOT_FAQS} />
          </div>
        </section>
      </main >
    </>
  )
}
