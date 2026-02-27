import SectionHeading from '../ui/SectionHeading'

const FEATURES = [
  {
    title: 'Operationally Ready',
    description: 'Engineered for real users, live data, and operational complexity.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
        <rect x="2" y="4" width="28" height="24" rx="3" />
        <path d="M2 10h28" />
        <circle cx="6" cy="7" r="1" fill="#1E5EFF" />
        <circle cx="10" cy="7" r="1" fill="#1E5EFF" />
        <path d="M10 16l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: 'AI with Business Purpose',
    description: 'Applied to automate processes and improve measurable outcomes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
        <circle cx="16" cy="12" r="6" />
        <path d="M16 6V4M22 12h2M10 12H8M20.24 7.76l1.42-1.42M11.76 7.76l-1.42-1.42" />
        <path d="M8 24c0-4.42 3.58-8 8-8s8 3.58 8 8" />
        <path d="M12 28v-4M20 28v-4" />
      </svg>
    ),
  },
  {
    title: 'Structured & Secure Delivery',
    description: 'Governance, compliance, and disciplined execution embedded at every stage.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
        <path d="M16 3L4 8v8c0 7.18 5.12 13.9 12 16 6.88-2.1 12-8.82 12-16V8L16 3z" />
        <path d="M12 16l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Architecture That Evolves',
    description: 'Designed to integrate, adapt, and grow with changing business needs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1E5EFF" strokeWidth="1.5">
        <rect x="4" y="4" width="10" height="10" rx="2" />
        <rect x="18" y="4" width="10" height="10" rx="2" />
        <rect x="4" y="18" width="10" height="10" rx="2" />
        <rect x="18" y="18" width="10" height="10" rx="2" />
        <path d="M14 9h4M14 23h4M9 14v4M23 14v4" />
      </svg>
    ),
  },
]

export default function WhyZentrixel() {
  return (
    <section className="bg-white py-20" id="why-zentrixel">
      <div className="mx-auto max-w-[1440px] px-14">
        <SectionHeading
          title="Built for Enterprise Environments"
          subtitle="Enterprise systems must operate reliably under real-world conditions not just in demonstrations. That\u00a0principle\u00a0guides how we design from day one."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5">
                {feature.icon}
              </div>
              <h3 className="font-body text-lg font-semibold text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
              <span className="absolute top-0 left-0 h-1 w-12 rounded-tl-xl bg-gradient-to-r from-primary to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/about"
            className="font-sub-heading text-2xl leading-[1.5em] text-[#023497]"
          >
            Why Zentrixel?
          </a>
        </div>
      </div>
    </section>
  )
}
