export interface IndustryItem {
  slug: string
  navLabel: string
  heading: string
  intro: string
  challenges: string[]
  solutions: string[]
  valueDelivered: string[]
  ctaLabel: string
}

const INDUSTRIES: IndustryItem[] = [
  // ── 1. AI-Driven Company ─────────────────────────────────────
  {
    slug: 'ai-data-driven-company',
    navLabel: 'AI Data-Driven Company',
    heading: 'Empowering Growth as an AI-Driven Company',
    intro:
      'Data is the new currency—but without the right systems, insights get lost in complexity. AI-first companies thrive on real-time intelligence, personalization, and predictive analytics, but often face scaling and integration hurdles.',
    challenges: [
      'Data silos preventing unified analytics',
      'Scaling AI models to production reliably',
      'Integrating AI into existing enterprise systems',
      'Governance, explainability, and compliance',
      'High infrastructure costs for ML workloads',
    ],
    solutions: [
      'Custom AI & ML model development and deployment',
      'Real-time data pipelines and feature engineering',
      'Cloud-native AI infrastructure (AWS, Azure, GCP)',
      'MLOps for model lifecycle and monitoring',
      'Data governance frameworks and explainable AI (XAI)',
      'Agentic AI systems for autonomous decision-making',
      'Multi-modal AI for text, image, and audio insights',
    ],
    valueDelivered: [
      'Faster decision-making with real-time insights',
      'Reduced data infrastructure costs',
      'Scalable AI pipelines with enterprise-grade security',
      'Improved model accuracy and governance',
    ],
    ctaLabel: 'Get a Free AI Consultation',
  },

  // ── 2. Startup ───────────────────────────────────────────────
  {
    slug: 'startup',
    navLabel: 'Startup',
    heading: 'Startup IT Consulting for Fast-Growing Businesses',
    intro:
      'Startups move fast—but without the right tech partner, innovation can hit roadblocks. From MVP to market-ready platforms, startups need agile, scalable, and cost-efficient technology that grows with them. Zentrixel helps you go from idea to impact—faster.',
    challenges: [
      'Limited budget with high technical demands',
      'Building an MVP fast without sacrificing quality',
      'Scaling infrastructure as user base grows',
      'Finding the right tech stack for the product',
      'Lack of in-house technical leadership',
    ],
    solutions: [
      'MVP development with rapid iteration cycles',
      'Virtual CTO and technology advisory',
      'Cloud-first, scalable architecture from day one',
      'Full-stack web and mobile app development',
      'DevOps CI/CD setup for continuous delivery',
      'Cost-optimised cloud infrastructure management',
      'AI integration for intelligent product features',
    ],
    valueDelivered: [
      'Launch MVP in weeks, not months',
      'Save up to 40% on development cost with no quality trade-off',
      'Agile, transparent collaboration with complete technical ownership',
      'Future-ready platforms designed to scale effortlessly',
    ],
    ctaLabel: 'Launch Your MVP Faster',
  },

  // ── 3. FinTech ───────────────────────────────────────────────
  {
    slug: 'fintech',
    navLabel: 'FinTech',
    heading: 'Fintech IT Solutions & Digital Transformation for Fintech',
    intro:
      'Fintech demands trust, speed, and compliance. Zentrixel helps you build secure, real-time financial platforms that meet regulatory standards and deliver seamless digital experiences. From digital wallets to payment gateways—we power your growth with future-ready tech.',
    challenges: [
      'Meeting strict regulatory and compliance requirements',
      'Ensuring 99.9%+ uptime for financial transactions',
      'Integrating legacy systems with modern APIs',
      'Real-time fraud detection and risk management',
      'Scalability under high transaction volumes',
    ],
    solutions: [
      'Secure payment gateway and digital wallet development',
      'Core banking platform modernisation',
      'Open banking API integration and management',
      'Real-time fraud detection using AI/ML',
      'KYC and AML compliance automation',
      'Cloud-native infrastructure for financial services',
      'RegTech solutions and audit-ready architectures',
    ],
    valueDelivered: [
      'End-to-end secure platforms ready for audits and scale',
      '99.9%+ uptime architecture for real-time financial services',
      'Seamless integration across banking systems and fintech APIs',
      'Faster go-to-market with reduced risk and full compliance',
    ],
    ctaLabel: 'Build Secure Fintech Solutions',
  },

  // ── 4. SMEs ──────────────────────────────────────────────────
  {
    slug: 'smes',
    navLabel: 'SMEs',
    heading: 'Empowering Small and Middle Sized Enterprises to Scale',
    intro:
      'SMEs need cost-effective, scalable, and easy-to-manage solutions. Zentrixel helps you digitize operations, automate workflows, and boost customer engagement—without the complexity.',
    challenges: [
      'Manual, time-consuming processes reducing productivity',
      'Disconnected tools and data fragmentation',
      'Limited IT budget and in-house expertise',
      'Difficulty scaling technology with business growth',
      'Staying competitive against larger enterprises',
    ],
    solutions: [
      'Business process automation (RPA & workflow tools)',
      'Cloud migration and managed cloud services',
      'Affordable CRM and ERP implementation',
      'Custom web and mobile app development',
      'Digital marketing and SEO for customer acquisition',
      'Data analytics for informed decision-making',
      'Cybersecurity setup and ongoing monitoring',
    ],
    valueDelivered: [
      'Streamlined operations with automation',
      'Centralized data and smoother collaboration',
      'Affordable digital solutions that scale with you',
      'Better customer experience and visibility',
    ],
    ctaLabel: 'Digitize Your SME Today',
  },

  // ── 5. BFSI ──────────────────────────────────────────────────
  {
    slug: 'bfsi',
    navLabel: 'BFSI',
    heading: 'BFSI IT Solutions & BFSI Digital Transformation',
    intro:
      'In BFSI, trust, compliance, and agility are non-negotiable. Zentrixel delivers secure, scalable, and intelligent solutions that power digital banking, streamline operations, and ensure regulatory alignment.',
    challenges: [
      'Complex regulatory compliance (PCI DSS, ISO 27001, GDPR)',
      'Outdated legacy core banking systems',
      'Rising customer expectations for digital-first experiences',
      'Cybersecurity threats and data breaches',
      'Integrating disparate systems across branches and partners',
    ],
    solutions: [
      'Digital banking platform development and modernisation',
      'AI-powered credit scoring and risk analytics',
      'Robotic Process Automation (RPA) for back-office operations',
      'Secure cloud migration for BFSI workloads',
      'Customer engagement apps and omnichannel platforms',
      'Compliance-driven DevSecOps pipelines',
      'Real-time fraud monitoring and cybersecurity infrastructure',
    ],
    valueDelivered: [
      'Cloud-native, secure infrastructure',
      'Personalized customer journeys',
      'Real-time processing with 99.9% uptime',
      'Automated workflows & reduced manual errors',
      'Compliance-driven development (PCI, ISO, GDPR)',
    ],
    ctaLabel: 'Modernize Your BFSI Platform',
  },

  // ── 6. Real Estate ───────────────────────────────────────────
  {
    slug: 'real-estate',
    navLabel: 'Real Estate',
    heading: 'Real Estate IT Solutions & Digital Transformation',
    intro:
      'Zentrixel helps real estate companies digitize property listings, automate lead management, and deliver immersive customer experiences. From sales to rentals, we build platforms that convert.',
    challenges: [
      'Manual listing management and fragmented data',
      'Poor lead tracking and follow-up processes',
      'Lack of digital customer engagement tools',
      'Difficulty managing agent performance and workflows',
      'Outdated web presence losing potential buyers',
    ],
    solutions: [
      'Custom real estate web and mobile app development',
      'CRM integration for lead management and tracking',
      'Virtual tour platforms and interactive 3D listings',
      'AI-powered property recommendation engines',
      'Automated marketing for listings and campaigns',
      'Real-time dashboards for agents and management',
      'Smart search with advanced filters and map views',
    ],
    valueDelivered: [
      'Centralized property and lead management',
      'Automated follow-ups and CRM integration',
      'Virtual tours, filters, and smart search',
      'Web & mobile platforms tailored to your brand',
      'Real-time dashboards for team performance',
    ],
    ctaLabel: 'Transform Your Real Estate Business',
  },
]

export default INDUSTRIES
