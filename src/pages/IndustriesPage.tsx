import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import INDUSTRIES from '../data/industries'

export default function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries | Zentrixel</title>
        <meta
          name="description"
          content="Zentrixel serves AI-driven companies, startups, FinTech, SMEs, BFSI, and Real Estate with reliable, scalable digital solutions."
        />
      </Helmet>

      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20 max-md:pt-28 max-md:pb-14">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Industries</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Industries Where Expertise Meets Impact
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Powering digital transformation across high-impact sectors where performance, compliance,
              and user experience are non-negotiable.
            </p>
          </div>
        </section>

        {/* ── Industry Grid ───────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg max-md:p-6"
                >
                  <h2 className="font-heading text-xl font-semibold text-navy transition-colors group-hover:text-primary max-md:text-lg">
                    {industry.navLabel}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                    {industry.intro.slice(0, 120)}…
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ──────────────────────────────────────── */}
        <section className="bg-light-bg py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 text-center max-md:px-5">
            <h2 className="font-heading text-3xl font-semibold text-navy max-md:text-2xl">
              Serving Your Industry
            </h2>
            <p className="mt-4 font-body text-base text-muted">
              Let's discuss how we can address your sector-specific challenges.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
