import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Zentrixel</title>
        <meta
          name="description"
          content="Learn about Zentrixel — a software development company delivering scalable digital systems and intelligent automation for complex business environments."
        />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">About Us</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Where Trust Meets Digital Innovation
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Zentrixel is a software development company and IT solutions
              provider delivering scalable digital systems and intelligent
              automation for complex business environments.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-navy max-md:text-2xl">Our Mission</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted">
                  We combine disciplined engineering with practical AI to
                  modernize platforms and build systems designed for long-term
                  value. Our mission is to help organizations turn ambition into
                  intelligent digital systems designed for performance,
                  resilience, and measurable impact.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-semibold text-navy max-md:text-2xl">Our Approach</h2>
                <p className="mt-4 font-body text-base leading-relaxed text-muted">
                  Enterprise systems must operate reliably under real-world
                  conditions — not just in demonstrations. That principle guides
                  how we design from day one. We deliver operationally ready
                  solutions with structured, secure delivery processes embedded
                  at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h2 className="text-center font-heading text-3xl font-semibold text-navy max-md:text-2xl">
              Why Organizations Choose Zentrixel
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Operationally Ready', desc: 'Engineered for real users, live data, and operational complexity.' },
                { title: 'AI with Business Purpose', desc: 'Applied to automate processes and improve measurable outcomes.' },
                { title: 'Structured & Secure', desc: 'Governance, compliance, and disciplined execution at every stage.' },
                { title: 'Architecture That Evolves', desc: 'Designed to integrate, adapt, and grow with changing business needs.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 text-center max-md:px-5">
            <h2 className="font-heading text-3xl font-semibold text-navy max-md:text-2xl">
              Ready to Work Together?
            </h2>
            <p className="mt-4 font-body text-base text-muted">
              Let's discuss how Zentrixel can help your organization build
              intelligent, scalable systems.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
