import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SERVICES from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Zentrixel</title>
        <meta
          name="description"
          content="Explore Zentrixel's comprehensive technology services — AI & ML, Web & Mobile Apps, Cloud Computing, Automation, Database Management, DevOps, UI/UX Design, Digital Marketing, and Virtual CTO."
        />
      </Helmet>

      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20 max-md:pt-28 max-md:pb-14">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Our Services</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Comprehensive Technology &amp; AI Capabilities
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              We combine disciplined engineering with practical AI to modernise platforms and build
              systems designed for long-term value.
            </p>
          </div>
        </section>

        {/* ── Services Grid ───────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg max-md:p-6"
                >
                  <h2 className="font-heading text-xl font-semibold text-navy transition-colors group-hover:text-primary max-md:text-lg">
                    {service.navLabel}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                    {service.intro.slice(0, 120)}…
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
              Need a Custom Solution?
            </h2>
            <p className="mt-4 font-body text-base text-muted">
              Book a free consultation to discuss your project requirements.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
