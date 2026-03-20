import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import INDUSTRIES from '../data/industries'

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = INDUSTRIES.find((i) => i.slug === slug)

  if (!industry) return <Navigate to="/industries" replace />

  return (
    <>
      <Helmet>
        <title>{industry.navLabel} | Zentrixel</title>
        <meta name="description" content={industry.intro.slice(0, 155)} />
      </Helmet>

      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20 max-md:pt-28 max-md:pb-14">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Industries</p>
            <h1 className="mt-3 max-w-[780px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              {industry.heading}
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              {industry.intro}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
            >
              {industry.ctaLabel}
            </Link>
          </div>
        </section>

        {/* ── Content ─────────────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="flex gap-14 max-lg:flex-col">

              {/* Left — Sidebar nav */}
              <aside className="lg:w-[260px] lg:shrink-0">
                <p className="mb-3 font-sub-heading text-xs font-semibold uppercase tracking-widest text-muted">
                  All Industries
                </p>
                <nav className="flex flex-col gap-1 max-lg:flex-row max-lg:flex-wrap max-lg:gap-2 lg:sticky lg:top-28">
                  {INDUSTRIES.map((ind) => {
                    const isActive = ind.slug === slug
                    return (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        className={[
                          'rounded-lg px-4 py-3 font-body text-sm transition-all max-lg:whitespace-nowrap',
                          isActive
                            ? 'bg-light-bg font-semibold text-navy'
                            : 'text-muted hover:bg-gray-50 hover:text-navy',
                        ].join(' ')}
                        style={{
                          borderLeft: isActive ? '3px solid #19AAE9' : '3px solid transparent',
                        }}
                      >
                        {ind.navLabel}
                      </Link>
                    )
                  })}
                </nav>
              </aside>

              {/* Right — Detail content */}
              <div className="flex flex-1 min-w-0 flex-col gap-10">

                {/* Key Challenges */}
                <div>
                  <h2 className="font-sub-heading text-lg font-semibold text-[#103592]">Key Challenges</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {industry.challenges.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                        <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How We Help */}
                <div>
                  <h2 className="font-sub-heading text-lg font-semibold text-[#103592]">How Zentrixel Helps</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {industry.solutions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="font-body text-sm leading-relaxed text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value Delivered */}
                <div className="rounded-xl bg-light-bg p-6" style={{ borderLeft: '4px solid #19AAE9' }}>
                  <h2 className="font-sub-heading text-lg font-semibold text-navy">Value Delivered</h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {industry.valueDelivered.map((v) => (
                      <li key={v} className="flex items-center gap-2.5 font-body text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
                  >
                    {industry.ctaLabel}
                  </Link>
                </div>

              </div>
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
