import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQ from '../components/sections/FAQ'
import callingBanner from '../assets/images/calling-banner.jpg'
import industriesUsingAiBg from '../assets/images/industries-using-ai-bg.jpg'
import productCalling from '../assets/images/why-ai.png'
import callingCommunication from '../assets/images/calling-communication.svg'
import PlatformIcon1 from '../assets/images/calling-call.svg'
import PlatformIcon2 from '../assets/images/calling-microphone.svg'
import PlatformIcon3 from '../assets/images/calling-brain.svg'
import PlatformIcon4 from '../assets/images/calling-ai-bot.svg'
import PlatformIcon5 from '../assets/images/calling-speaker.svg'
import PlatformIcon6 from '../assets/images/calling-network-topology.svg'
import blueArrow from '../assets/images/blue-arrow.svg';
import AIConversation from '../assets/images/ai-conversation-int.png';
import BankingIcon from '../assets/images/banking-icon.svg';
import HealthcareIcon from '../assets/images/medical-services-icon.svg';
import InsuranceIcon from '../assets/images/insurance-icon.svg';
import RealEstateIcon from '../assets/images/building-icon.svg';
import EcommerceIcon from '../assets/images/cart-icon.svg';
import EducationIcon from '../assets/images/book-icon.svg';
import TelecommunicationsIcon from '../assets/images/tower-icon.svg';
import InterpriseIntegrationImage from '../assets/images/enterprise-integration.png';
import SecurityImage from '../assets/images/security-and-enterprise.png';
import ctaBg from '../assets/images/automate-business-calls-bg.jpg';
import AIChatExample from '../assets/images/example-ai-bg.png';
import outboundIcon from '../assets/images/outbound-icon.svg';
import aiLeadIcon from '../assets/images/ai-lead.svg';
import appointmentIcon from '../assets/images/appointment-icon.svg';

const CAPABILITY_TABS = [
  {
    id: 'outbound',
    label: 'Outbound AI Calling Campaigns',
    icon: outboundIcon,
    subtitle: 'Common use cases include:',
    description:
      'Run high-volume automated calling campaigns for sales, marketing, and customer engagement.',
    features: [
      'Lead generation campaigns',
      'Customer follow-up calls',
      'Payment reminders',
      'Marketing outreach',
      'Feedback and survey calls'
    ],
    bottomText:
      'The platform can execute thousands of simultaneous calls, significantly increasing campaign reach and efficiency.',
  },
  {
    id: 'inbound',
    label: 'Intelligent Inbound Call Automation',
    icon: callingCommunication,
    subtitle: 'Capabilities include:',
    description:
      'AI voice agents handle inbound customer calls without traditional IVR menus.',
    features: [
      'Automated call answering',
      'Natural language conversation handling',
      'Intelligent call routing',
      'Escalation to human agents when required',
      'Customer support queries and FAQs',
    ],
    bottomText:
      'This enables a hybrid AI + human support model, where automation manages routine conversations.',
  },
  {
    id: 'lead',
    label: 'AI Lead Qualification',
    icon: aiLeadIcon,
    subtitle: 'The platform can:',
    description:
      'AI voice agents automatically qualify prospects before routing them to sales teams.',
    features: [
      'Ask structured qualification questions',
      'Capture prospect details',
      'Identify customer intent',
      'Score leads based on responses',
      'Route qualified prospects to sales representatives'
    ],
    bottomText:
      'This allows sales teams to focus on high-value opportunities.',
  },
  {
    id: 'appointment',
    label: 'Appointment Scheduling & Reminders',
    icon: appointmentIcon,
    subtitle: 'Capabilities include:',
    description:
      'AI voice assistants automate appointment management across industries.',
    features: [
      'Automated appointment booking',
      'Calendar availability checks',
      'Confirmation and rescheduling',
      'Automated reminder calls',
    ],
    bottomText:
      'This reduces manual scheduling effort and improves attendance rates.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Call Initiation',
    description: 'Automatically initiates outbound calls or answers inbound customer calls.',
    gradient: 'linear-gradient(180deg, #F6FBF5 0%, #DEEDD6 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon1} alt="Call Initiation" />,
  },
  {
    step: '02',
    title: 'Speech Recognition (ASR)',
    description: 'Customer voice input is converted into text using automatic speech recognition.',
    gradient: 'linear-gradient(180deg, #ECF6F8 0%, #C2DDE8 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon2} alt="Call Initiation" />,
  },
  {
    step: '03',
    title: 'Intent Understanding (NLU)',
    description: 'AI analyzes the caller\'s intent and conversation context.',
    gradient: 'linear-gradient(180deg, #F0EEFB 0%, #D7D3F6 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon3} alt="Call Initiation" />,
  },
  {
    step: '04',
    title: 'Intelligent Response Generation',
    description: 'The AI engine generates responses based on business workflows and knowledge bases.',
    gradient: 'linear-gradient(180deg, #ECEFF6 0%, #E0E1F6 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon4} alt="Call Initiation" />,
  },
  {
    step: '05',
    title: 'Natural Voice Response',
    description: 'Responses are delivered through realistic neural voice synthesis.',
    gradient: 'linear-gradient(180deg, #FFEDD8 0%, #F9E5C5 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon5} alt="Call Initiation" />,
  },
  {
    step: '06',
    title: 'CRM & System Integration',
    description: 'Conversation data and insights are automatically synced with CRM systems and enterprise databases.',
    gradient: 'linear-gradient(180deg, #D8F0F1 0%, #C5EFE3 91%)',
    iconBg: '#0F172A',
    icon: <img src={PlatformIcon6} alt="Call Initiation" />,
  },
]

const COMPARISON_ROWS = [
  { traditional: 'High operational costs', ai: 'Lower cost per interaction' },
  { traditional: 'Limited number of agents', ai: 'Handles thousands of calls simultaneously' },
  { traditional: 'Limited working hours', ai: '24×7 availability' },
  { traditional: 'Manual lead qualification', ai: 'Automated lead qualification' },
  { traditional: 'Inconsistent service quality', ai: 'Consistent AI-driven conversations' },
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
    name: 'Insurance',
    color: '#1E5EFF',
    icon: <img src={InsuranceIcon} alt="Insurance" />,
  },
]

const INDUSTRIES_ROW2 = [
  {
    name: 'Real Estate',
    color: '#19AAE9',
    icon: <img src={RealEstateIcon} alt="Real Estate" />,
  },
  {
    name: 'E-commerce',
    color: '#1E5EFF',
    icon: <img src={EcommerceIcon} alt="E-commerce" />,
  },
  {
    name: 'Education',
    color: '#19AAE9',
    icon: <img src={EducationIcon} alt="Education" />,
  },
  {
    name: 'Telecommunications',
    color: '#1E5EFF',
    icon: <img src={TelecommunicationsIcon} alt="Telecommunications" />,
  },
]

const INTEGRATIONS = [
  'CRM platforms (Salesforce, HubSpot, Zoho)',
  'Calendar systems (Google Calendar, Outlook)',
  'Customer databases',
  'Telephony infrastructure providers',
  'Marketing automation platforms',
  'Enterprise APIs',
]

const SECURITY_ITEMS = [
  'Secure data encryption',
  'Role-based access control',
  'Audit logging and monitoring',
  'Enterprise data governance frameworks',
  'Secure API integrations',
]

const AI_CALLING_FAQS = [
  {
    question: 'What is an AI calling platform?',
    answer:
      'An AI calling platform uses conversational voice AI to automate inbound and outbound phone calls, enabling businesses to interact with customers without requiring human agents for every call.',
  },
  {
    question: 'What are AI voice agents?',
    answer:
      'AI voice agents are automated systems that use speech recognition, natural language processing, and voice synthesis to conduct real-time phone conversations with customers.',
  },
  {
    question: 'Can AI handle outbound calling campaigns?',
    answer:
      'Yes. AI outbound calling systems can run large-scale calling campaigns for lead generation, appointment reminders, surveys, and customer engagement.',
  },
  {
    question: 'Is AI calling software suitable for call center automation?',
    answer:
      'Yes. AI voice automation platforms can significantly reduce manual call center workload by handling routine conversations and routing complex cases to human agents.',
  },
  {
    question: 'Can AI phone agents integrate with CRM systems?',
    answer:
      'Yes. Most enterprise AI calling platforms integrate with CRM systems such as Salesforce, HubSpot, and Zoho to automatically capture conversation data and update customer records.',
  },
  {
    question: 'How scalable are AI voice calling platforms?',
    answer:
      'Cloud-based AI calling platforms can handle thousands of simultaneous calls, making them highly scalable for large enterprises and high-volume outreach campaigns.',
  },
  {
    question: 'What industries use AI calling solutions?',
    answer:
      'AI voice automation is widely used in industries such as financial services, healthcare, insurance, real estate, e-commerce, telecom, and customer support operations.',
  },
  {
    question: 'How is AI calling different from traditional IVR systems?',
    answer:
      'Traditional IVR systems rely on menu-based interactions, while conversational AI calling platforms allow customers to speak naturally and receive intelligent responses.',
  },
]

export default function AiCallingPage() {
  const [activeTab, setActiveTab] = useState('outbound')
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
            src={callingBanner}
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
                <span style={{
                  fontSize: '42px',
                  lineHeight: '1.238',
                  background: 'linear-gradient(90deg, #1E5EFF 0%, #18B9E5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Intelligent Voice AI</span>{'\u00A0'}
                <br />
                for Automated Business Calls
              </h1>

              <div className="mt-8 max-w-[516px]">
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '16px', lineHeight: '1.5', color: '#0F172A' }}
                >
                  Automate inbound support calls, outbound sales conversations, and customer
                  engagement using conversational AI voice agents.
                </p>
                <p
                  className="mt-4 font-body leading-relaxed"
                  style={{ fontSize: '16px', lineHeight: '1.5', color: '#0F172A' }}
                >
                  The Zentrixel AI Calling Platform is enterprise-grade voice automation
                  infrastructure that integrates with CRM systems, telephony networks, and
                  business applications to manage customer conversations at scale.
                </p>

                <p
                  className="mt-8 font-sub-heading font-medium"
                  style={{ fontSize: '20px', lineHeight: '1.6', color: '#0F172A' }}
                >
                  Automate conversations. Qualify leads. Engage customers — 24×7.
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

        {/* ── Why Businesses Are Adopting AI Voice Automation ────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="mb-4 text-center">
              <h2 className="mb-12 font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                Why Businesses Are Adopting AI <br /> Voice Automation
              </h2>
            </div>
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: images */}
              <div className="relative max-lg:hidden">
                <img
                  src={productCalling}
                  alt="AI voice automation"
                  className='w-full'
                />
              </div>

              {/* Right: text */}
              <div>
                <p className="font-body text-base leading-relaxed text-muted">
                  Traditional call center operations limit scalability, increase costs, and slow
                  customer response times.
                </p>
                <p className="mt-3 font-body text-base leading-relaxed text-muted">
                  AI-powered voice automation enables organizations to handle thousands of
                  simultaneous conversations while maintaining consistent service quality.
                </p>

                <p className="mt-7 font-sub-heading text-base font-semibold text-[#103592]">
                  Organizations adopt AI calling platforms to:
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {[
                    'Reduce call center workload and operational costs',
                    'Scale outbound calling campaigns instantly',
                    'Accelerate lead qualification',
                    'Enable 24×7 automated customer communication',
                    'Automate repetitive operational calls',
                    'Improve response time and engagement',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center rounded-md bg-light-bg py-4 pr-4 font-body text-sm text-navy min-h-[76px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      style={{ borderLeft: '4px solid #19AAE9', paddingLeft: '18px' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  AI voice agents are becoming a <strong>core component of modern customer communication
                    infrastructure.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How the AI Calling Platform Works ──────────────────── */}
        <section className="py-16 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="mb-4 text-center">
              <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                How the AI Calling Platform Works
              </h2>
              <p className="mx-auto mt-4 max-w-[625px] font-body text-base leading-relaxed text-muted">
                The Zentrixel AI Calling Platform uses conversational AI technologies to automate
                real-time voice interactions.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HOW_IT_WORKS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ background: step.gradient }}
                >
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl"
                    style={{ background: '#ffffff' }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mt-2 font-sub-heading text-xl font-semibold leading-snug text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center font-body text-base leading-relaxed text-muted">
              This architecture enables fully automated, natural voice conversations at enterprise
              scale.
            </p>
          </div>
        </section>

        {/* ── Core Platform Capabilities ─────────────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="mb-12 text-center font-heading text-4xl font-semibold leading-snug text-navy max-md:mb-8 max-md:text-3xl">
              Core Platform Capabilities
            </h2>
            <div className="grid items-start gap-5 lg:grid-cols-[407px_1fr]">
              {/* Left — Tab list */}
              <div className="flex flex-col max-lg:mb-6 max-lg:gap-2">
                {CAPABILITY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-between px-3 py-5 text-left transition-all max-lg:rounded-lg max-lg:px-4 max-lg:py-3 cursor-pointer ${isActive
                        ? 'bg-light-bg font-semibold text-navy rounded-lg'
                        : 'text-navy/70 hover:text-navy'
                        }`}
                      style={{
                        borderBottom: isActive
                          ? '2px solid #19AAE9'
                          : '1px solid #C8CFFF',
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
                            stroke="#000"
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
              <div className="rounded-xl bg-light-bg p-8 max-md:p-5" style={{ minHeight: '373px' }}>
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
                    <p className="mt-2 font-body text-base leading-relaxed text-muted">
                      {activeCapability.description}
                    </p>
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className="mt-6 font-body text-base leading-relaxed text-muted"
                  style={{ paddingLeft: '4px' }}
                >
                  {activeCapability.subtitle}
                </p>

                {/* Features — 2 column grid with arrow bullets */}
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 max-sm:grid-cols-1">
                  {activeCapability.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0"
                      >
                        <path
                          d="M3 8l4 4 6-7"
                          stroke="#19AAE9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

        {/* ── Example AI Voice Conversation ──────────────────────── */}
        <section
          className="py-24 max-md:py-16"
        >
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="mx-auto max-w-[1440px] px-14 py-14 max-md:px-5 rounded-2xl relative" style={{
              background: 'linear-gradient(238deg, #103592 2%, #0F172A 94%)',
            }}>
              <div className="absolute bottom-0 left-0 w-[450px] h-[350px] mb-[8px] max-md:hidden">
                <img
                  src={AIChatExample}
                  alt="AI voice conversation example"
                />
              </div>
              <div className="grid items-start gap-12 lg:grid-cols-2">
                {/* Left: heading + image */}
                <div>
                  <h2 className="font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
                    Example AI Voice Conversation
                  </h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-white/70">
                    Below is a simplified example of how an AI voice agent interacts with customers.
                  </p>
                  <p className="mt-3 font-body text-base leading-relaxed text-white/70">
                    This demonstrates how conversational AI can manage natural business conversations
                    without human intervention.
                  </p>
                </div>

                {/* Right: chat UI */}
                <div className="flex flex-col gap-4">
                  {/* Customer message 1 */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      Customer
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      Hi, I want to schedule a service appointment.
                    </div>
                  </div>

                  {/* AI response 1 */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      AI Voice Agent
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(25, 170, 233, 0.2)',
                        border: '1px solid #19AAE9',
                      }}
                    >
                      Sure. May I know your preferred date and time?
                    </div>
                  </div>

                  {/* Customer message 2 */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      Customer
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      Tomorrow morning.
                    </div>
                  </div>

                  {/* AI response 2 */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      AI Voice Agent
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(25, 170, 233, 0.2)',
                        border: '1px solid #19AAE9',
                      }}
                    >
                      I found availability at 10:30 AM. Would you like me to confirm the appointment?
                    </div>
                  </div>

                  {/* Customer message 3 */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      Customer
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      Yes.
                    </div>
                  </div>

                  {/* AI response 3 */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-sub-heading text-xs font-medium uppercase tracking-wider text-white/60">
                      AI Voice Agent
                    </span>
                    <div
                      className="rounded-lg p-3 font-body text-sm text-white"
                      style={{
                        background: 'rgba(25, 170, 233, 0.2)',
                        border: '1px solid #19AAE9',
                      }}
                    >
                      Your appointment has been successfully scheduled. A confirmation message will be
                      sent shortly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI Conversation Intelligence ───────────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: text */}
              <div>
                <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  AI Conversation Intelligence
                </h2>
                <p className="mt-5 font-body text-base leading-relaxed text-muted">
                  The platform is powered by a multi-layer conversational AI architecture designed
                  for real-time voice communication.
                </p>

                <p className="mt-7 font-sub-heading text-base font-semibold text-[#103592]">
                  Core technologies include:
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {[
                    'Automatic Speech Recognition (ASR)',
                    'Natural Language Understanding (NLU)',
                    'Dialogue orchestration engine',
                    'Context-aware conversation memory',
                    'Neural voice synthesis',
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-3">
                      <img src={blueArrow} alt="arrow" />
                      <span className="font-body text-base leading-relaxed text-muted">{tech}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  Together these technologies enable <strong>human-like voice interactions at enterprise
                    scale.</strong>
                </p>
              </div>

              {/* Right: comparison table heading + content */}
              <div>
                <img src={AIConversation} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ── AI Calling vs Traditional Call Centers ─────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            {/* Figma: left ~34% heading, right ~66% table */}
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">

              {/* Left — heading + description */}
              <div className="flex flex-col justify-between h-full">
                <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  AI Calling vs <br /> Traditional Call <br />Centers
                </h2>
                <p className="font-body text-base leading-relaxed text-muted">
                  AI voice automation allows organizations to <strong>scale communication without scaling
                    operational overhead.</strong>
                </p>
              </div>

              {/* Right — comparison table */}
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  border: '1px solid #C8CFFF',
                }}
              >
                {/* Right-column highlight overlay (AI Platform column) */}
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
                  style={{
                    background: 'linear-gradient(180deg, #F5F9FF 0%, #E8F1FF 91%)',
                    borderRadius: '0 12px 12px 0',
                    opacity: 0.6,
                  }}
                />

                <div className="relative">
                  {/* Column headers */}
                  <div className="grid grid-cols-2">
                    <div
                      className="px-6 py-4"
                      style={{ borderBottom: '1px solid rgba(200,207,255,0.5)', borderRight: '1px solid rgba(200,207,255,0.5)' }}
                    >
                      <span
                        className="font-body font-semibold text-navy"
                        style={{ fontSize: '20px', lineHeight: '1.3' }}
                      >
                        Traditional Call Centers
                      </span>
                    </div>
                    <div
                      className="px-6 py-4"
                      style={{ borderBottom: '1px solid rgba(200,207,255,0.5)' }}
                    >
                      <span
                        className="font-body font-semibold text-navy"
                        style={{ fontSize: '20px', lineHeight: '1.3' }}
                      >
                        AI Calling Platform
                      </span>
                    </div>
                  </div>

                  {/* Data rows */}
                  {COMPARISON_ROWS.map((row, i) => (
                    <div className="grid grid-cols-2" key={i}>
                      <div
                        className="flex items-center px-6 py-4"
                        style={{
                          borderBottom: i < COMPARISON_ROWS.length - 1 ? '1px solid rgba(200,207,255,0.5)' : 'none',
                          borderRight: '1px solid rgba(200,207,255,0.5)',
                        }}
                      >
                        <span className="font-body text-base leading-snug text-muted">
                          {row.traditional}
                        </span>
                      </div>
                      <div
                        className="flex items-center px-6 py-4"
                        style={{
                          borderBottom: i < COMPARISON_ROWS.length - 1 ? '1px solid rgba(200,207,255,0.5)' : 'none',
                        }}
                      >
                        <span className="font-body text-base leading-snug text-muted">
                          {row.ai}
                        </span>
                      </div>
                    </div>
                  ))}
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
                  Industries Using AI Voice Automation
                </h2>
                <p className="mx-auto mt-4 max-w-[633px] text-center font-body text-base leading-relaxed text-[#000000]">
                  AI voice automation is rapidly being adopted across multiple industries.
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
                  These industries benefit from <strong>high-volume automated customer communication and
                    operational efficiency.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Enterprise Integration Ecosystem ───────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: image stack */}
              <div className="relative max-lg:hidden">
                <img
                  src={InterpriseIntegrationImage}
                  alt="Enterprise integrations"
                />
              </div>

              {/* Right: text */}
              <div>
                <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Enterprise Integration Ecosystem
                </h2>
                <p className="mt-5 font-body text-base leading-relaxed text-muted">
                  The platform integrates with enterprise systems to support end-to-end workflow
                  automation.
                </p>

                <p className="mt-7 font-sub-heading text-base font-semibold text-[#103592]">
                  Supported integrations include:
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {INTEGRATIONS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center rounded-md bg-light-bg py-4 pr-4 font-body text-sm leading-snug text-navy min-h-[76px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm"
                      style={{ borderLeft: '4px solid #19AAE9', paddingLeft: '18px' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  This allows the AI calling platform to operate as a <strong>natural extension of existing
                    business systems.</strong>
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
            <h2 className="text-center font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
              Measurable Business Impact
            </h2>
            <p className="mx-auto mt-4 max-w-[581px] text-center font-body text-base leading-relaxed text-muted">
              Organizations implementing AI voice automation typically achieve
            </p>

            {/* All metric cards — unified 3-column grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div
                className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #DEECD6 100%)',
                  border: '1px solid #C8CFFF',
                }}
              >
                <p
                  className="font-heading text-5xl font-semibold max-md:text-4xl"
                  style={{ color: '#56684B' }}
                >
                  40–60%
                </p>
                <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">reduction</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                  in manual call center workload
                </p>
              </div>

              <div
                className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #C2DDE8 100%)',
                  border: '1px solid #C8CFFF',
                }}
              >
                <p
                  className="font-heading text-5xl font-semibold max-md:text-4xl"
                  style={{ color: '#1B6685' }}
                >
                  3X
                </p>
                <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">faster</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                  lead qualification cycles
                </p>
              </div>

              <div
                className="rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #D7D3F6 100%)',
                  border: '1px solid #C8CFFF',
                }}
              >
                <p
                  className="font-heading text-5xl font-semibold max-md:text-4xl"
                  style={{ color: '#7E77B9' }}
                >
                  24×7
                </p>
                <p className="mt-2 font-sub-heading text-lg font-semibold text-navy">automated</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                  customer communication
                </p>
              </div>

              {/* Centered bottom row — spans all 3 cols, items match column width */}
              <div className="col-span-full flex flex-col gap-6 sm:flex-row sm:justify-center">
                <div
                  className="w-full rounded-lg p-6 sm:w-[calc((100%-3rem)/3)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: '#FFFFFF', borderLeft: '4px solid #19AAE9' }}
                >
                  <p className="font-sub-heading text-xl font-semibold text-navy">
                    Higher outreach
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                    capacity for campaigns
                  </p>
                </div>

                <div
                  className="w-full rounded-lg p-6 sm:w-[calc((100%-3rem)/3)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: '#FFFFFF', borderLeft: '4px solid #19AAE9' }}
                >
                  <p className="font-sub-heading text-xl font-semibold text-navy">
                    Operational efficiency
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">Improved</p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-[546px] text-center font-body text-base leading-relaxed text-muted">
              AI voice agents transform business communication into a <strong>scalable and measurable
                engagement channel.</strong>
            </p>
          </div>
        </section>

        {/* ── Security & Enterprise Compliance ───────────────────── */}
        <section className="py-24 max-md:py-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: text */}
              <div>
                <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-3xl">
                  Security & Enterprise Compliance
                </h2>
                <p className="mt-5 font-body text-base leading-relaxed text-muted">
                  The platform is designed to meet enterprise security and governance requirements.
                </p>

                <p className="mt-7 font-sub-heading text-base font-semibold text-[#103592]">
                  Security capabilities include:
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {SECURITY_ITEMS.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <img src={blueArrow} alt={item} />
                      <span className="font-body text-base leading-relaxed text-muted">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-base leading-relaxed text-muted">
                  This enables safe deployment within enterprise IT environments.
                </p>
              </div>

              {/* Right: image */}
              <div className="max-lg:hidden">
                <img
                  src={SecurityImage}
                  alt="Enterprise security"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA: Automate Business Calls with AI ───────────────── */}
        <section id="cta" className="mx-auto max-w-[1440px] px-14 max-md:px-5">
          <div
            className="relative overflow-hidden rounded-[20px] bg-cover bg-center p-20 max-md:rounded-xl max-md:p-6"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >
            <div className="max-w-[560px]">
              <div className="max-w-[480px]">
                <h2 className="font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
                  Automate Business Calls with AI
                </h2>
                <p className="mt-5 font-body text-xl leading-relaxed text-white/80">
                  The Zentrixel AI Calling Platform enables organizations to automate customer
                  conversations, scale outbound engagement, and improve operational efficiency.
                </p>
                <Link
                  to="/contact"
                  className="mt-20 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Book a Free Demo
                </Link>
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
            <FAQ items={AI_CALLING_FAQS} />
          </div>
        </section>
      </main>
    </>
  )
}
