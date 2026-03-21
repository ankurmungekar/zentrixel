import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import aboutBannerImg from '../assets/images/about-banner.jpg'
import strategicPartnerImg from '../assets/images/about-strategic-partner.jpg'
import howWeEngageImg from '../assets/images/about-how-we-engage.png'
import globalDeliveryImg from '../assets/images/about-global-delivery.png'
import founderChiranjibiImg from '../assets/images/about-founder-chiranjibi.jpg'
import founderBhushanImg from '../assets/images/about-founder-bhushan.jpg'
import longTermImg from '../assets/images/about-long-term.png'
import ctaBgImg from '../assets/images/about-cta-bg.jpg'
import iconAi from '../assets/images/about-icon-ai.svg'
import quoteOpen from '../assets/images/about-quote-open.svg'
import quoteClose from '../assets/images/about-quote-close.svg'
import zenImg from '../assets/images/about-zen.png'
import triImg from '../assets/images/about-tri.png'
import xelImg from '../assets/images/about-xel.png'

const DIFFERENTIATORS = [
  {
    icon: iconAi,
    title: 'Production-Grade\nEngineering',
    description:
      'Systems designed for live users, real data volumes, and operational accountability.',
  },
  {
    icon: iconAi,
    title: 'Architecture-First Delivery',
    description:
      'Scalability, security, and maintainability defined before implementation.',
  },
  {
    icon: iconAi,
    title: 'Responsible Enterprise AI',
    description:
      'Artificial intelligence services integrated into governed, measurable workflows.',
  },
  {
    icon: iconAi,
    title: 'Predictable, Low-Risk Execution',
    description:
      'Structured engagement models supporting transparency and long-term ownership.',
  },
]

const FOUNDERS = [
  {
    name: 'Chiranjibi Das',
    role: 'Co-Founder & CEO',
    image: founderChiranjibiImg,
    accentColor: '#103592',
    quote:
      'Zentrixel was founded to solve a recurring enterprise challenge — technology that fails under operational pressure. We build secure, reliable systems that integrate cleanly and perform at scale.',
  },
  {
    name: 'Bhushan Dhonge',
    role: 'Co-Founder & COO',
    image: founderBhushanImg,
    accentColor: '#19AAE9',
    quote:
      'Enterprise success depends on structure and disciplined execution. We deliver resilient, maintainable systems including AI-enabled platforms built for long-term performance.',
  },
]

const NAME_PARTS = [
  { prefix: 'Zen', meaning: 'represents clarity and\nprecision.', image: zenImg },
  { prefix: 'Tri', meaning: 'reflects technology, trust,\nand transformation', image: triImg },
  { prefix: 'Xel', meaning: 'signifies forward\nmomentum.', image: xelImg },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Zentrixel</title>
        <meta
          name="description"
          content="Learn about Zentrixel — an enterprise software development and technology consulting company delivering scalable digital systems, AI solutions, and intelligent automation."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 max-md:pt-24 max-md:pb-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="flex justify-center">
              <span className="font-sub-heading text-3xl text-primary-dark max-md:text-xl">
                About Zentrixel
              </span>
            </div>

            <h1 className="mt-6 text-center font-heading text-4xl font-semibold text-navy max-md:mt-4 max-md:text-2xl">
              Engineering Intelligent Enterprise Systems
            </h1>

            <p className="mt-6 text-center font-body text-xl font-medium text-muted max-md:mt-3 max-md:text-sm">
              Enterprise Software Development • Technology Consulting • AI
              Solutions
            </p>

            <p className="mx-auto mt-6 max-w-[900px] text-center font-body text-base leading-relaxed text-muted max-md:mt-4 max-md:text-sm">
              Zentrixel is an enterprise software development and technology
              consulting company helping organizations design, modernize, and
              scale secure digital systems. We build enterprise platforms and
              AI-driven solutions engineered for real-world operations — enabling
              scalability, governance, and long-term business growth.
            </p>

            <div className="mt-10 overflow-hidden rounded-[20px] max-md:mt-6 max-md:rounded-xl">
              <img
                src={aboutBannerImg}
                alt="Zentrixel enterprise technology"
                className="h-[340px] w-full object-cover max-md:h-[180px]"
                width={1280}
                height={340}
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* A Strategic Technology & AI Partner */}
        <section className="py-20 max-md:py-12">
          <div className="relative mx-auto max-w-[1440px] px-14 max-md:px-5">
            {/* Image — positioned right on desktop, stacks on mobile */}
            <div className="mb-8 overflow-hidden rounded-xl lg:absolute lg:top-0 lg:right-14 lg:mb-0 lg:w-[48%]">
              <img
                src={strategicPartnerImg}
                alt="Strategic technology partner"
                className="h-auto w-full object-cover lg:h-[540px]"
                width={625}
                height={540}
                loading="lazy"
              />
            </div>

            {/* Left content */}
            <div className="lg:w-[45%]">
              <h2 className="max-w-[433px] font-heading text-4xl font-semibold leading-snug text-navy max-md:text-2xl">
                A Strategic Technology & AI Partner
              </h2>
              <p className="mt-8 max-w-[520px] font-body text-base leading-relaxed text-muted max-md:mt-4 max-md:text-sm">
                Zentrixel operates as a long-term technology and AI consulting
                partner, working with leadership and engineering teams to
                modernize platforms, implement custom AI software development,
                and strengthen operational resilience.
              </p>
              {/* Description + Quote card side by side on desktop */}
              <div className="mt-4 flex flex-col items-start gap-6 lg:flex-row lg:items-center">
                <p className="max-w-[520px] font-body text-base leading-relaxed text-muted max-md:text-sm lg:max-w-[340px]">
                  We prioritize architectural clarity, risk reduction, and
                  systems designed to remain dependable as organizations grow.
                </p>

                {/* Quote card — parallel to text, overlaps image on desktop */}
                <div className="relative z-10 flex w-full items-center gap-5 rounded-md border border-[#F5F6FF] bg-white p-6 shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-md:gap-4 max-md:p-4 lg:left-[175px] lg:w-[355px] lg:flex-shrink-0">
                  <div className="h-[88px] w-0.5 flex-shrink-0 bg-primary max-md:h-[60px]" />
                  <p className="font-heading text-xl font-medium leading-snug text-muted max-md:text-base">
                    Technology should accelerate progress — not introduce
                    complexity or fragility.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90 max-md:mt-6 max-md:h-11 max-md:px-5 max-md:text-sm"
              >
                Start a Strategy Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* What Sets Zentrixel Apart */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="text-center font-heading text-4xl font-semibold text-navy max-md:text-2xl">
              What Sets Zentrixel Apart
            </h2>
            <div className="mt-12 grid gap-6 max-md:mt-8 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIATORS.map((item, idx) => (
                <div
                  key={item.title}
                  className={`rounded-[12px] border border-[#C8CFFF] p-6 lg:h-[318px] ${idx % 2 === 1 ? 'lg:mt-[80px]' : ''
                    }`}
                  style={{
                    background:
                      'linear-gradient(180deg, #F5F9FF 0%, #E8F1FF 91%)',
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-12 w-12 max-md:h-10 max-md:w-10"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-15 whitespace-pre-line font-heading text-2xl font-semibold leading-tight text-navy max-md:mt-4 max-md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted max-md:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Engage + Global Delivery */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-8 max-md:gap-6 lg:grid-cols-2">
              {/* How We Engage */}
              <div
                className="relative overflow-hidden rounded-xl p-10 max-md:p-5"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(137,158,244,0.5) 0%, rgba(137,158,244,0.1) 100%)',
                }}
              >
                <img
                  src={howWeEngageImg}
                  alt=""
                  className="absolute top-0 left-0 h-[220px] w-[330px] rounded-tl-xl object-cover max-md:hidden"
                  loading="lazy"
                />
                <div className="relative mt-48 max-md:mt-0">
                  <h3 className="font-heading text-4xl font-semibold text-navy max-md:text-2xl">
                    How We Engage
                  </h3>
                  <p className="mt-3 max-w-[500px] font-body text-base leading-relaxed text-navy max-md:text-sm">
                    As a technology consulting company, we collaborate closely
                    with internal teams and partners to ensure architectural
                    alignment and responsible AI adoption.
                  </p>
                  <p className="mt-6 font-body text-base font-medium text-navy max-md:mt-4 max-md:text-sm">
                    Our model emphasizes:
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {[
                      'Clear architectural direction',
                      'Measurable milestones',
                      'Delivery accountability',
                      'Systems that remain stable as complexity grows',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-body text-base text-navy max-md:text-sm"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-body text-base font-medium text-navy max-md:text-sm">
                    Engagements scale without disrupting governance or
                    operations.
                  </p>
                </div>
              </div>

              {/* Global Delivery */}
              <div
                className="relative overflow-hidden rounded-xl p-10 max-md:p-5"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(111,174,164,0.5) 0%, rgba(111,174,164,0.1) 100%)',
                }}
              >
                <img
                  src={globalDeliveryImg}
                  alt=""
                  className="absolute top-0 left-0 h-[248px] w-[372px] rounded-tl-xl object-cover max-md:hidden"
                  loading="lazy"
                />
                <div className="relative mt-48 max-md:mt-0">
                  <h3 className="font-heading text-4xl font-semibold text-navy max-md:text-2xl">
                    Global Delivery
                  </h3>
                  <p className="mt-3 max-w-[500px] font-body text-base leading-relaxed text-navy max-md:text-sm">
                    Zentrixel supports enterprises across the UAE, Middle East,
                    India, and global markets through consistent engineering
                    standards and structured collaboration.
                  </p>
                  <p className="mt-6 font-body text-base font-medium text-navy max-md:mt-4 max-md:text-sm">
                    We ensure:
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {[
                      'Architecture consistency',
                      'Security and compliance alignment',
                      'Clear stakeholder communication',
                      'Long-term operational ownership',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-body text-base text-navy max-md:text-sm"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Enterprise Experience */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="text-center font-heading text-4xl font-semibold text-navy max-md:text-2xl">
              Leadership & Enterprise Experience
            </h2>
            <p className="mx-auto mt-4 max-w-[930px] text-center font-body text-base leading-relaxed text-muted max-md:text-sm">
              Zentrixel is led by professionals with deep experience in
              enterprise software development and large-scale system delivery.
              Experience across banking, financial services, insurance,
              healthcare, and enterprise IT informs our focus on security,
              compliance, performance, and maintainability. We operate
              confidently in governance-driven environments.
            </p>

            <div className="mt-16 grid gap-10 max-md:mt-10 max-md:gap-12 lg:grid-cols-2">
              {FOUNDERS.map((founder) => (
                <div key={founder.name}>
                  {/* Photo + Accent block with name/role */}
                  <div className="relative h-[203px] max-md:h-auto max-md:flex max-md:flex-col max-md:items-center lg:ml-10">
                    {/* Desktop layout: photo + accent overlap */}
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="relative z-10 h-[203px] w-[200px] object-cover max-md:h-[200px] max-md:w-[160px] max-md:rounded-lg"
                      width={200}
                      height={203}
                      loading="lazy"
                    />
                    {/* Accent rect — desktop only (absolute) */}
                    <div
                      className="absolute top-[90px] left-[195px] flex h-[115px] w-[262px] flex-col justify-center rounded-tr-md border border-[#F5F6FF] pl-[50px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-md:hidden"
                      style={{ backgroundColor: founder.accentColor }}
                    >
                      <h3 className="font-heading text-xl font-semibold text-white">
                        {founder.name}
                      </h3>
                      <p className="font-body text-base text-white">
                        {founder.role}
                      </p>
                    </div>
                    {/* Name/role — mobile only (below photo) */}
                    <div className="text-center md:hidden">
                      <h3 className="font-heading text-lg font-semibold text-navy">
                        {founder.name}
                      </h3>
                      <p className="font-body text-sm text-muted">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote card */}
                  <div className="relative rounded-md border border-[#F5F6FF] bg-white px-6 py-5 shadow-[0_4px_8px_rgba(0,0,0,0.1)] max-md:mt-4 max-md:px-4 max-md:py-4">
                    <img
                      src={quoteOpen}
                      alt=""
                      className="absolute top-4 left-5 opacity-60 max-md:left-3 max-md:top-3"
                      width={27}
                      height={20}
                    />
                    <p className="px-8 font-body text-base leading-relaxed text-muted max-md:px-6 max-md:text-sm">
                      {founder.quote}
                    </p>
                    <img
                      src={quoteClose}
                      alt=""
                      className="absolute right-5 bottom-4 opacity-60 max-md:right-3 max-md:bottom-3"
                      width={27}
                      height={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Name, Our Thinking */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div
              className="rounded-xl px-10 py-16 max-md:px-4 max-md:py-8"
              style={{
                background:
                  'linear-gradient(180deg, #F5F9FF 0%, #E8F1FF 91%)',
              }}
            >
              <h2 className="text-center font-heading text-4xl font-semibold text-navy max-md:text-2xl">
                Our Name, Our Thinking
              </h2>
              <p className="mx-auto mt-3 max-w-[890px] text-center font-body text-base leading-relaxed text-muted max-md:text-sm">
                The name Zentrixel reflects our engineering mindset.
              </p>

              <div className="mx-auto mt-12 grid max-w-[1000px] gap-8 max-md:mt-8 max-md:gap-10 md:grid-cols-3">
                {NAME_PARTS.map((part) => (
                  <div key={part.prefix} className="text-center">
                    <div className="mx-auto flex h-[125px] w-[125px] items-center justify-center overflow-hidden max-md:h-[100px] max-md:w-[100px]">
                      <img
                        src={part.image}
                        alt={part.prefix}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-navy max-md:mt-4 max-md:text-xl">
                      {part.prefix}
                    </h3>
                    <p className="mt-2 whitespace-pre-line font-body text-xl leading-snug text-muted max-md:text-base">
                      {part.meaning}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mx-auto mt-10 max-w-[660px] text-center font-body text-xl font-medium leading-snug text-muted max-md:mt-6 max-md:text-base">
                Together, they represent how we build enterprise platforms that
                scale responsibly and remain manageable over time.
              </p>
            </div>
          </div>
        </section>

        {/* Long-Term Technology Engagement */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid items-center gap-12 max-md:gap-8 lg:grid-cols-2">
              <div className="relative max-md:flex max-md:justify-center">
                <img
                  src={longTermImg}
                  alt="Long-term technology engagement"
                  className="h-auto w-full max-w-[568px] object-cover max-md:max-w-full max-md:rounded-xl"
                  width={568}
                  height={484}
                  loading="lazy"
                />
              </div>

              <div>
                <h2 className="font-heading text-4xl font-semibold leading-snug text-navy max-md:text-2xl">
                  Long-Term Technology{' '}
                  <br className="max-md:hidden" />
                  Engagement
                </h2>
                <p className="mt-6 max-w-[620px] font-body text-base leading-relaxed text-muted max-md:mt-4 max-md:text-sm">
                  As a custom software development company and AI solutions
                  company, we support organizations beyond initial delivery
                  through modernization, platform evolution, and responsible
                  innovation.
                </p>
                <p className="mt-4 max-w-[620px] font-body text-base leading-relaxed text-muted max-md:text-sm">
                  Whether delivering enterprise software, artificial
                  intelligence services, or MVP development services, our focus
                  remains consistent:
                </p>
                <p className="mt-4 font-body text-xl font-medium leading-snug text-muted max-md:text-base">
                  Technology engineered for operational stability, scalability,
                  and sustained business growth.
                </p>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90 max-md:mt-6 max-md:h-11 max-md:px-5 max-md:text-sm"
                >
                  Explore Partnership Opportunities
                </Link>
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
                <h2 className="max-w-[440px] font-heading text-4xl font-semibold leading-snug text-navy max-md:text-2xl">
                  Let's Build Technology That Works
                </h2>
                <p className="mt-6 max-w-[520px] font-body text-xl leading-relaxed text-muted max-md:mt-4 max-md:text-sm">
                  If you are looking for a software development company, custom
                  software development company, AI development company, or
                  technology consulting partner across the UAE, Middle East,
                  India, or global markets — we would be glad to collaborate.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 max-md:mt-6 max-md:flex-col max-md:items-start max-md:gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90 max-md:h-11 max-md:px-5 max-md:text-sm"
                  >
                    Schedule a Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
