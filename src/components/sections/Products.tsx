import SectionHeading from '../ui/SectionHeading'
import productChatbot from '../../assets/images/product-chatbot.png'
import productSocial from '../../assets/images/product-social.png'
import productFacility from '../../assets/images/product-facility.png'
import productWaste from '../../assets/images/product-waste.png'
import productCalling from '../../assets/images/product-calling.png'
import { Link } from 'react-router-dom'

const PRODUCT_CARDS = [
  { title: 'AI Calling Platform', image: productCalling },
  { title: 'AI Social Engagement Platform', image: productSocial },
  { title: 'Smart Facility Management Platform', image: productFacility },
  { title: 'Solid Waste Management Platform', image: productWaste },
]

export default function Products() {
  return (
    <section className="bg-white py-20" id="products">
      <div className="mx-auto max-w-[1440px] px-14">
        <Link
          to="/products"
          className="mx-auto mb-4 flex w-fit items-center gap-2.5 rounded-[20px] bg-primary/10 px-4 py-1.5 font-sub-heading text-2xl text-primary-dark"
        >
          Our Products
        </Link>

        <SectionHeading
          title="Enterprise SaaS Platforms Built for Real Operations"
          subtitle="Our AI-powered SaaS platforms are engineered for reliability, performance, and long-term scalability designed to operate in complex, live enterprise environments where uptime, security, and efficiency matter most."
        />

        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 max-lg:snap-x max-lg:snap-mandatory">
          {/* Featured Card */}
          <div className="relative flex-shrink-0 overflow-hidden rounded-xl bg-[#D9D9D9] shadow-[0_4px_8px_rgba(200,207,255,1)] lg:w-[504px]">
            <img
              src={productChatbot}
              alt="AI Chatbot Platform interface preview"
              className="h-[440px] w-full object-cover"
              loading="lazy"
              width={504}
              height={440}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
              <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-white">
                AI Chatbot Platform
              </h3>
              <p className="mt-2 max-w-[368px] font-body text-base font-light leading-snug text-white">
                Conversational automation platform for customer engagement, lead
                generation, appointment booking, and workflow orchestration.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-[20px] bg-primary px-4 py-2.5 font-body text-sm text-white"
                >
                  Book a Free Demo
                </Link>
                <span className="flex items-center gap-2.5 font-body text-sm text-accent-cyan">
                  Know more
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Smaller Cards */}
          {PRODUCT_CARDS.map((product) => (
            <div
              key={product.title}
              className="relative flex-shrink-0 snap-start overflow-hidden rounded-xl lg:w-[200px]"
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="h-[440px] w-full object-cover"
                loading="lazy"
                width={200}
                height={440}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <p className="absolute bottom-6 left-0 right-0 px-3 text-center font-heading text-lg font-semibold uppercase leading-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
