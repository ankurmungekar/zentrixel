import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const INDUSTRIES = [
  {
    title: 'Banking, Financial Services & Fintech',
    description:
      'Secure, compliant digital systems for banking operations, payment processing, risk management, and financial automation.',
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant platforms for patient management, clinical workflows, telemedicine, and healthcare data analytics.',
  },
  {
    title: 'Insurance',
    description:
      'Claims automation, underwriting platforms, policy management systems, and AI-driven fraud detection solutions.',
  },
  {
    title: 'Real Estate & Facilities',
    description:
      'Smart facility management, property operations platforms, IoT integration, and real-time asset tracking systems.',
  },
  {
    title: 'Enterprise & B2B Organizations',
    description:
      'Scalable ERP solutions, workflow automation, supply chain digitization, and enterprise integration platforms.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries | Zentrixel</title>
        <meta
          name="description"
          content="Zentrixel serves Banking, Healthcare, Insurance, Real Estate, and Enterprise organizations with reliable, scalable digital solutions."
        />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Industries</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Industries Where Reliability Matters
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Powering digital transformation across high-impact, regulated
              sectors where security, compliance, and uptime are non-negotiable.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <h2 className="font-heading text-xl font-semibold text-navy">
                    {industry.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
