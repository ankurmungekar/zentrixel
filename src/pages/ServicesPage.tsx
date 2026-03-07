import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'Artificial Intelligence & Automation',
    description:
      'Custom AI software development that enhances operational efficiency, automation, and enterprise decision-making. From conversational AI to predictive analytics and intelligent decision-support platforms.',
  },
  {
    title: 'Custom Software Development',
    description:
      'End-to-end development of tailored enterprise applications — from architecture and design to deployment — built for performance, security, and scalability.',
  },
  {
    title: 'Technology Consulting & Delivery Management',
    description:
      'Strategic technology advisory and project delivery services that align digital initiatives with measurable business outcomes. Technology roadmaps, agile delivery, and digital transformation strategy.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure design, migration, and management with CI/CD automation for reliable, scalable deployments across AWS, Azure, and GCP.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Zentrixel</title>
        <meta
          name="description"
          content="Explore Zentrixel's comprehensive technology and AI capabilities — from custom software development to cloud & DevOps."
        />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Our Services</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Comprehensive Technology & AI Capabilities
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              We combine disciplined engineering with practical AI to modernize
              platforms and build systems designed for long-term value.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-8 md:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <h2 className="font-heading text-2xl font-semibold text-navy max-md:text-xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
