import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PRODUCTS = [
  {
    title: 'AI Chatbot Platform',
    description:
      'Conversational automation platform for customer engagement, lead generation, appointment booking, and workflow orchestration across channels.',
  },
  {
    title: 'AI Calling Platform',
    description:
      'Intelligent voice automation for outbound campaigns, appointment reminders, lead qualification, and customer support calls at scale.',
  },
  {
    title: 'AI Social Engagement Platform',
    description:
      'Unified social media management with AI-driven content scheduling, audience analytics, and automated engagement workflows.',
  },
  {
    title: 'Smart Facility Management Platform',
    description:
      'End-to-end facility operations management with IoT integration, predictive maintenance, and real-time asset tracking.',
  },
  {
    title: 'Solid Waste Management Platform',
    description:
      'Route optimization, fleet tracking, and operational analytics for municipal and commercial waste collection operations.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Products | Zentrixel</title>
        <meta
          name="description"
          content="Explore Zentrixel's enterprise SaaS platforms — AI Chatbot, AI Calling, Social Engagement, Facility Management, and Waste Management."
        />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Our Products</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Enterprise SaaS Platforms Built for Real Operations
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              AI-powered platforms engineered for reliability, performance, and
              long-term scalability in complex enterprise environments.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <div
                  key={product.title}
                  className="rounded-xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <h2 className="font-heading text-xl font-semibold text-navy">
                    {product.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 font-body text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Book a Free Demo
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
