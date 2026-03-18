import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'
import productChatbot from '../../assets/images/product-chatbot.png'
import productCalling from '../../assets/images/product-calling.png'

const PRODUCTS = [
  {
    title: 'AI Chatbot Platform',
    description:
      'Conversational automation platform for customer engagement, lead generation, appointment booking, and workflow orchestration.',
    image: productChatbot,
    path: '/products/ai-chatbot-platform',
  },
  {
    title: 'AI Calling Platform',
    description:
      'Intelligent voice automation for outbound campaigns, appointment reminders, lead qualification, and customer support calls.',
    image: productCalling,
    path: '/products/ai-calling',
  },
]

export default function Products() {
  return (
    <section className="bg-white py-20 max-md:py-12" id="products">
      <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
        <p className="mx-auto mb-4 w-fit font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
          Our Products
        </p>

        <SectionHeading
          title="Enterprise SaaS Platforms Built for Real Operations"
          subtitle={"Our AI-powered SaaS platforms are engineered for reliability, performance, and long-term scalability designed to\noperate in complex, live enterprise environments where uptime, security, and efficiency matter most."}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="relative h-[440px] overflow-hidden rounded-2xl max-md:h-[280px]"
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 max-md:p-6">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white max-md:text-xl">
                  {product.title}
                </h3>
                <p className="mt-2 max-w-[400px] font-body text-base font-light leading-snug text-white/90 max-md:text-sm">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center gap-4 max-md:mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-[20px] bg-primary px-5 py-2.5 font-body text-sm text-white transition-colors hover:bg-primary/90"
                  >
                    Book a Free Demo
                  </Link>
                  <Link
                    to={product.path}
                    className="flex items-center gap-2 font-body text-sm text-accent-cyan transition-colors hover:text-accent-cyan/80"
                  >
                    Know more
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
