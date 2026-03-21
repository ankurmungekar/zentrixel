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
import callingCommunication from '../assets/images/calling-communication.svg'
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

const CAPABILITY_TABS = [
  {
    id: 'conversational-intelligence',
    label: 'AI-Driven Conversational Intelligence',
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
    subtitle: 'Key capabilities include:',
    description:
      'Accelerate your sales pipeline with automated outreach, lead qualification, and intelligent follow-ups.',
    features: [
      'Automated outbound dialing at scale',
      'Real-time prospect scoring and ranking',
      'Instant lead handoff to sales teams',
      'Dynamic qualification questionnaires',
    ],
    bottomText:
      'This accelerates the sales pipeline by ensuring only qualified leads reach human agents.',
  },
  {
    id: 'support-automation',
    label: 'Customer Support & Service Automation',
    subtitle: 'Key capabilities include:',
    description:
      'Deliver round-the-clock support with AI agents that can resolve issues and answer queries autonomously.',
    features: [
      '24/7 automated issue resolution',
      'Intelligent ticket routing and escalation',
      'Multilingual support capabilities',
      'Seamless integration with helpdesk software',
    ],
    bottomText:
      'This reduces operational costs while significantly improving customer satisfaction scores.',
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
    answer:
      'An enterprise conversational AI platform is a cloud-based SaaS AI chatbot system that automates customer engagement, lead generation, support workflows, and backend orchestration across website chat, WhatsApp Business API, mobile apps, and messaging channels — with governance, audit logging, and enterprise integrations built in.It operates as digital infrastructure, not just a chatbot tool.',
  },
  {
    question: 'What are AI voice agents?',
    answer:
      'AI voice agents are software systems that can conduct natural-sounding phone conversations with customers using speech recognition, natural language understanding, and neural voice synthesis technologies. They can handle entire conversations autonomously without human intervention.',
  },
  {
    question: 'Can AI handle outbound calling campaigns?',
    answer:
      'Yes. The Zentrixel AI Calling Platform is designed to manage large-scale outbound calling campaigns, including lead qualification, appointment reminders, follow-up calls, and customer surveys — all fully automated.',
  },
  {
    question: 'Is AI calling software suitable for call center automation?',
    answer:
      'Absolutely. AI calling platforms are a core solution for call center automation. They enable organisations to handle high call volumes without proportionally increasing headcount, significantly reducing operational costs while maintaining service quality.',
  },
  {
    question: 'Can AI phone agents integrate with CRM systems?',
    answer:
      'Yes. The platform integrates with leading CRM platforms including Salesforce, HubSpot, and Zoho — automatically syncing call data, conversation insights, and lead status updates in real time.',
  },
  {
    question: 'How scalable are AI voice calling platforms?',
    answer:
      'AI voice calling platforms are inherently highly scalable. Unlike human agent teams, AI platforms can handle thousands of simultaneous calls without requiring additional infrastructure, making them ideal for organisations with fluctuating call volumes.',
  },
  {
    question: 'What industries use AI calling solutions?',
    answer:
      'AI calling solutions are widely adopted across banking and financial services, healthcare, insurance, real estate, e-commerce, education, and telecommunications — industries that depend on high-volume customer communication.',
  },
  {
    question: 'How is AI calling different from traditional IVR systems?',
    answer:
      'Traditional IVR systems use fixed menus and keypad inputs. AI calling platforms use conversational AI, meaning customers can speak naturally without navigating menus. The AI understands intent, responds dynamically, and conducts full two-way conversations.',
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
                      className={`flex items-center justify-between px-4 py-5 text-left transition-all ${isActive
                        ? 'bg-white/10 font-semibold text-white rounded-t-lg'
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
                      src={callingCommunication}
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
                    <p className="mt-2 font-body text-base leading-relaxed text-muted">
                      {activeCapability.description}
                    </p>
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className="mt-6 font-body text-base font-semibold"
                  style={{ color: '#103592', paddingLeft: '4px' }}
                >
                  {activeCapability.subtitle}
                </p>

                {/* Features — 2 column grid with arrow bullets */}
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 max-sm:grid-cols-1">
                  {activeCapability.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
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
                      'Website chat widgets',
                      'Mobile applications',
                      'Instagram Direct',
                      'Customer portals and web applications',
                      'WhatsApp Business API',
                      'Facebook Messenger'
                    ].map((channel) => (
                      <div key={channel} className="flex items-center gap-4">
                        <div className="h-16 w-16 shrink-0 rounded-md bg-[#F3F4FB] flex items-center justify-center shadow-sm" />
                        <span className="font-body text-base text-navy">{channel}</span>
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
                        <div className="mt-1 flex items-center justify-center">
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
                        <div className="mt-1 flex items-center justify-center">
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

        {/* ── Measurable Business Impact ─────────────────────────── */}
        <section className="relative overflow-hidden py-24 px-6 max-md:py-12 max-md:px-4">
          <div className="relative mx-auto max-w-[1440px] px-14 py-14 max-md:px-5 max-md:py-10 rounded-2xl" style={{
            background: '#F3F4FB',
          }}>
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
              <div className="rounded-2xl bg-white p-8 lg:col-span-1 shadow-sm flex flex-col justify-center">
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

        {/* ──  Flexible SaaS Subscription Models ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2 lg:grid-cols-[4fr_6fr]">
              {/* Left: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={whyZentrixelAi}
                  alt="Flexible SaaS Subscription Models"
                  loading="lazy"
                />
              </div>
              {/* Right: text */}
              <div className="md:pt-14">
                <h2 className="mb-4 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Flexible SaaS Subscription Models
                </h2>
                <p className="font-body text-base leading-relaxed text-navy font-semibold mb-8">
                  Commercial flexibility aligned with operational scale:
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    'Tiered SaaS plans',
                    'Enterprise licensing',
                    'Usage-based pricing',
                    'Custom volume agreements',
                    'Channel-based subscriptions'
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="rounded-md px-6 py-4 flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer"
                      style={{
                        background: '#F3F4FB',
                        border: '1px solid #19AAE9'
                      }}
                    >
                      <span className="font-body text-base text-navy whitespace-nowrap">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 font-body text-base leading-relaxed text-muted">
                  Designed to support startups, growth-stage companies, and global enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──  Structured Enterprise Onboarding ────── */}
        <section className="py-24 max-md:py-16 bg-navy relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5 relative z-10 text-center">
            <h2 className="font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Structured Enterprise Onboarding
            </h2>
            <p className="mt-4 mx-auto max-w-[660px] font-body text-base leading-relaxed text-white/80">
              A predictable, governed implementation model.
            </p>
            <p className="mt-6 mx-auto max-w-[830px] font-body text-xl font-medium leading-relaxed text-white">
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
      </main>
    </>
  )
}
