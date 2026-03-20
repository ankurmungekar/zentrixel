export interface ServiceItem {
  slug: string
  navLabel: string
  tab: string
  heading: string
  intro: string
  whatWeOffer: string[]
  approach: string
  /** "Industries We Understand" or "Who We Help" */
  industriesLabel?: string
  industries: string[]
  /** "Sample Use Cases" — optional (Virtual CTO uses different section) */
  useCasesLabel?: string
  useCases?: string[]
  whyZentrixel: string
  ctaLabel: string
}

const SERVICES: ServiceItem[] = [
  // ── 1. AI & ML ───────────────────────────────────────────────────────────
  {
    slug: 'ai-and-ml-solutions',
    navLabel: 'AI & ML Solutions',
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
      'We guide you through the entire AI/ML lifecycle—from data strategy and engineering to model development, testing, and seamless cloud deployment. Our team specialises in building secure, scalable, and explainable AI systems, ensuring each solution is tailored to your business goals and industry requirements.',
    industries: ['Banking & Financial Services (BFSI)', 'Real Estate', 'Startups & SMEs', 'Healthcare'],
    useCases: [
      'Autonomous customer service chatbots with natural language understanding',
      'Predictive analytics for sales, risk, and operations',
      'AI-driven document processing and extraction',
      'Real-time video and image recognition for security and compliance',
    ],
    whyZentrixel:
      'We have an experienced team who has delivered advanced, production-ready AI/ML solutions for leading organisations across the Middle East and beyond. We leverage the latest deep learning frameworks and cloud platforms to help you automate processes, unlock new insights, and drive innovation.',
    ctaLabel: 'Get a Free Consultation',
  },

  // ── 2. Web & Mobile ──────────────────────────────────────────────────────
  {
    slug: 'web-and-mobile-apps',
    navLabel: 'Web & Mobile Apps',
    tab: 'Web & Mobile Apps',
    heading: 'Intelligent Web & Mobile Apps for a Connected World',
    intro:
      'At Zentrixel, we specialise in web application development, mobile app development, and API development services—crafting responsive, high-performance applications tailored to your business vision and user needs.',
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
      'We start by understanding your goals and audience, then design, develop, and deliver seamless digital experiences—leveraging the latest frameworks and best practices. Every project is optimised for speed, scalability, and user engagement across all devices.',
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

  // ── 3. Cloud ─────────────────────────────────────────────────────────────
  {
    slug: 'cloud-computing-solutions',
    navLabel: 'Cloud Computing',
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

  // ── 4. Automation ────────────────────────────────────────────────────────
  {
    slug: 'automation-solutions',
    navLabel: 'Automation Solutions',
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

  // ── 5. Database ──────────────────────────────────────────────────────────
  {
    slug: 'database-management',
    navLabel: 'Database Management',
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

  // ── 6. DevOps ────────────────────────────────────────────────────────────
  {
    slug: 'devops-solutions',
    navLabel: 'DevOps Solutions',
    tab: 'DevOps Solutions',
    heading: 'Accelerate Delivery & Reliability with DevOps Excellence',
    intro:
      'At Zentrixel, our DevOps services and DevOps consulting streamline software delivery through agile, end-to-end DevOps practices, leveraging advanced CI/CD automation to drive faster releases and rock-solid reliability.',
    whatWeOffer: [
      'CI/CD pipeline automation for rapid, consistent releases',
      'Infrastructure as Code with Terraform, Ansible, and more',
      'Container orchestration (Docker, Kubernetes)',
      'Cloud-native deployment (AWS, Azure, GCP)',
      'Integrated monitoring, logging, and alerting',
      'Built-in security and compliance at every stage',
      'Scalable, automated testing and rollback systems',
    ],
    approach:
      'We embed DevOps across your entire software lifecycle—planning, building, testing, deploying, and monitoring. Our team combines best-in-class tools with industry best practices to break down silos, automate manual tasks, and deliver scalable, secure environments.',
    industries: ['Technology & SaaS', 'Banking & Financial Services (BFSI)', 'E-commerce & Retail', 'Healthcare', 'Startups & SMEs'],
    useCases: [
      'Automated cloud deployments for scalable web apps',
      'Continuous integration for financial software',
      'Secure infrastructure-as-code for healthcare compliance',
      'Containerised microservices for rapid feature rollout',
    ],
    whyZentrixel:
      'Our DevOps experts have successfully transformed development pipelines for organisations worldwide. We leverage modern automation, cloud platforms, and a security-first mindset—enabling your teams to deliver faster, safer, and with more confidence.',
    ctaLabel: 'Book a DevOps Consultation',
  },

  // ── 7. UI/UX Design ──────────────────────────────────────────────────────
  {
    slug: 'ui-and-ux-design',
    navLabel: 'UI & UX Design',
    tab: 'UI & UX Design',
    heading: 'Intuitive, Stunning UI/UX Design for Web & Mobile',
    intro:
      'Zentrixel provides expert UI UX design services, innovative user experience design, and modern responsive web design to create intuitive, accessible, and visually stunning digital products that drive engagement and satisfaction.',
    whatWeOffer: [
      'User-centric design for web and mobile applications',
      'Responsive layouts for all devices and screen sizes',
      'Multilingual and culturally adaptive design',
      'Light and dark mode-ready interfaces',
      'Wireframing, prototyping, and interactive mockups',
      'Accessibility (WCAG) and usability best practices',
      'Custom iconography and branding integration',
      'UX audits and usability testing for improvement',
    ],
    approach:
      'We believe great design is about how things work, not just how they look. Our team collaborates closely with you to understand your brand, users, and goals—translating insights into beautiful, functional, and scalable designs. Every project blends creativity, usability, and the latest design standards for maximum impact.',
    industries: ['Technology & SaaS', 'Banking & Financial Services (BFSI)', 'Real Estate', 'E-commerce & Retail', 'Healthcare & Startups'],
    useCases: [
      'Mobile apps with high user engagement',
      'Responsive web dashboards and portals',
      'Enterprise systems with optimised workflows',
    ],
    whyZentrixel:
      "Zentrixel blends creativity with technical know-how to create experiences that are both visually stunning and practical. We're passionate about user-first design and committed to making your digital products a delight to use—across every device, for every user.",
    ctaLabel: 'Start Your Design Project',
  },

  // ── 8. Digital Marketing ─────────────────────────────────────────────────
  {
    slug: 'digital-marketing',
    navLabel: 'Digital Marketing',
    tab: 'Digital Marketing',
    heading: 'AI-Powered Digital Marketing for Business Growth',
    intro:
      'Zentrixel offers comprehensive digital marketing services as a results-driven SEO services company and innovative social media marketing agency, helping your business connect with the right audience and achieve measurable growth online.',
    whatWeOffer: [
      'SEO (Search Engine Optimisation) for higher visibility',
      'Paid advertising (Google Ads, PPC, retargeting)',
      'Social media management and growth (Meta, LinkedIn, Instagram, X)',
      'Content marketing and brand storytelling',
      'Email marketing campaigns and automation',
      'Data analytics and performance reporting (Google Analytics, Data Studio)',
      'Marketing automation for efficiency and scale',
      'Conversion rate optimisation (CRO)',
      'AI-driven audience targeting and insights',
    ],
    approach:
      'We combine data analytics, creative strategy, and the latest digital tools to craft marketing campaigns that reach, engage, and convert. Every solution is customised for your goals, with transparent reporting and continuous optimisation for maximum ROI.',
    industries: ['Technology & SaaS', 'Retail & E-commerce', 'Real Estate', 'Banking & Financial Services (BFSI)', 'Healthcare & Startups'],
    useCases: [
      'SEO and PPC for rapid lead generation',
      'Social media brand building for new product launches',
      'Email automation for customer engagement and retention',
    ],
    whyZentrixel:
      "Zentrixel blends AI-driven insights with creative expertise to deliver digital marketing that gets results. We're passionate about growing your brand, boosting engagement, and driving measurable ROI—on every channel, for every goal.",
    ctaLabel: 'Boost Your Brand Now',
  },

  // ── 9. Virtual CTO ───────────────────────────────────────────────────────
  {
    slug: 'virtual-cto-x-it-consult',
    navLabel: 'Virtual CTO & IT Consult',
    tab: 'Virtual CTO & IT Consult',
    heading: 'Expert CTO & IT Consulting for Strategic Growth',
    intro:
      'Zentrixel provides expert virtual CTO services as a trusted IT consulting company, delivering end-to-end technology strategy consulting to guide startups and enterprises toward innovation, efficiency, and scalable growth.',
    whatWeOffer: [
      'Virtual CTO services for startups and scaling companies',
      'Technology roadmap and digital strategy development',
      'System architecture and technical due diligence',
      'MVP (Minimum Viable Product) planning and execution',
      'Product development oversight and team mentoring',
      'AI/ML integration and innovation consulting',
      'Cloud adoption, migration, and cost optimisation',
      'Automation strategy and process optimisation',
      'Vendor evaluation and risk management',
      'Ongoing technology advisory for long-term success',
    ],
    approach:
      'We partner with you to understand your vision and business goals, then develop clear, actionable technology strategies. Our consultants offer deep expertise across industries and the latest tech—ensuring every decision supports growth, efficiency, and innovation.',
    industriesLabel: 'Who We Help',
    industries: [
      'Startups launching MVPs or scaling products',
      'SMEs adopting digital transformation',
      'Enterprises seeking innovation and modernisation',
      'Businesses expanding into AI, cloud, or automation',
    ],
    whyZentrixel:
      'With Zentrixel, you get C-level guidance without the overhead. Our leadership brings a proven track record of designing, building, and scaling high-impact technology solutions. We are committed to your success, from idea to execution and beyond.',
    ctaLabel: 'Start Your Tech Strategy',
  },
]

export default SERVICES
