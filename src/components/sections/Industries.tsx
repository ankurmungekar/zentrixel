const INDUSTRIES = [
  {
    title: 'Banking, Financial Services\n& Fintech',
    bg: 'bg-gradient-to-br from-navy to-deep-blue',
    textColor: 'text-white',
  },
  {
    title: 'Healthcare &\nLife Sciences',
    bg: 'bg-[#E8F5E9]',
    textColor: 'text-navy',
  },
  {
    title: 'Insurance',
    bg: 'bg-[#FFF3E0]',
    textColor: 'text-navy',
  },
  {
    title: 'Real Estate &\nFacilities',
    bg: 'bg-[#E3F2FD]',
    textColor: 'text-navy',
  },
  {
    title: 'Enterprise & B2B\nOrganizations',
    bg: 'bg-[#F3E5F5]',
    textColor: 'text-navy',
  },
]

export default function Industries() {
  return (
    <section className="bg-light-bg py-20" id="industries">
      <div className="mx-auto max-w-[1440px] px-14">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-body text-base leading-relaxed text-muted">
              Trusted by Enterprise Teams
            </p>
            <p className="mt-1 font-body text-base leading-relaxed text-muted">
              Powering digital transformation across high-impact sectors.
            </p>
          </div>
          <h2 className="font-heading text-4xl font-semibold leading-snug text-navy lg:text-right">
            Industries Where{' '}
            <span className="block">Reliability Matters</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-xl p-6 transition-transform hover:scale-[1.02] ${industry.bg}`}
            >
              <h3
                className={`font-body text-lg font-semibold whitespace-pre-line ${industry.textColor}`}
              >
                {industry.title}
              </h3>
              <div className="mt-4 self-end">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${industry.bg === 'bg-gradient-to-br from-navy to-deep-blue' ? 'bg-white/20' : 'bg-navy/10'} transition-colors group-hover:bg-primary group-hover:text-white`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
