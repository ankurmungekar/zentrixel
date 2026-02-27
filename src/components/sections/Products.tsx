import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'
import productChatbot from '../../assets/images/product-chatbot.png'
import productSocial from '../../assets/images/product-social.png'
import productFacility from '../../assets/images/product-facility.png'
import productWaste from '../../assets/images/product-waste.png'
import productCalling from '../../assets/images/product-calling.png'

const PRODUCTS = [
  {
    title: 'AI Chatbot Platform',
    description:
      'Conversational automation platform for customer engagement, lead generation, appointment booking, and workflow orchestration.',
    image: productChatbot,
  },
  {
    title: 'AI Calling Platform',
    description:
      'Intelligent voice automation for outbound campaigns, appointment reminders, lead qualification, and customer support calls.',
    image: productCalling,
  },
  {
    title: 'AI Social Engagement Platform',
    description:
      'Unified social media management with AI-driven content scheduling, audience analytics, and automated engagement workflows.',
    image: productSocial,
  },
  {
    title: 'Smart Facility Management Platform',
    description:
      'End-to-end facility operations management with IoT integration, predictive maintenance, and real-time asset tracking.',
    image: productFacility,
  },
  {
    title: 'Solid Waste Management Platform',
    description:
      'Route optimization, fleet tracking, and operational analytics for municipal and commercial waste collection operations.',
    image: productWaste,
  },
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-20" id="products">
      <div className="mx-auto max-w-[1440px] px-14">
        <p className="mx-auto mb-4 w-fit font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
          Our Products
        </p>

        <SectionHeading
          title="Enterprise SaaS Platforms Built for Real Operations"
          subtitle={"Our AI-powered SaaS platforms are engineered for reliability, performance, and long-term scalability designed to\noperate in complex, live enterprise environments where uptime, security, and efficiency matter most."}
        />

        {/* Desktop: Expandable cards */}
        <div className="mt-12 hidden h-[440px] gap-4 lg:flex">
          {PRODUCTS.map((product, idx) => {
            const isActive = activeIndex === idx
            return (
              <div
                key={product.title}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                style={{
                  flex: isActive ? '0 0 416px' : '1 1 0%',
                  transition: 'flex 500ms ease-in-out',
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <img
                  src={product.image}
                  alt={`${product.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
                      : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                  }`}
                />

                {/* Collapsed state: title */}
                <div
                  className={`absolute inset-0 flex items-end justify-center pb-8 ${
                    isActive ? 'pointer-events-none opacity-0' : 'opacity-100 transition-opacity delay-500 duration-300'
                  }`}
                >
                  <p className="px-4 text-center font-heading text-lg font-semibold uppercase leading-tight tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {product.title}
                  </p>
                </div>

                {/* Expanded state: everything hidden, fades in only after fully expanded */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 ${
                    isActive ? 'opacity-100 transition-opacity delay-300 duration-300' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white">
                    {product.title}
                  </h3>
                  <p className="mt-2 max-w-[400px] font-body text-base font-light leading-snug text-white/90">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-[20px] bg-primary px-5 py-2.5 font-body text-sm text-white transition-colors hover:bg-primary/90"
                    >
                      Book a Free Demo
                    </Link>
                    <Link
                      to="/products"
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
            )
          })}
        </div>

        {/* Mobile: Stacked cards */}
        <div className="mt-12 flex flex-col gap-4 lg:hidden">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="relative h-[280px] overflow-hidden rounded-2xl"
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                  {product.title}
                </h3>
                <p className="mt-2 font-body text-sm font-light leading-snug text-white/90">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-[20px] bg-primary px-4 py-2 font-body text-sm text-white"
                  >
                    Book a Free Demo
                  </Link>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 font-body text-sm text-accent-cyan"
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
