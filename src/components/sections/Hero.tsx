import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg-full.jpg'

const TRUST_ITEMS = [
  'Enterprise systems operating in Financial, healthcare and real-estate.',
  'AI and automation improving operational efficiency',
  'Designed for security, resilience, and long-term growth',
]

export default function Hero() {
  return (
    <section className="relative h-[800px] overflow-hidden">
      {/* Full composited background from Figma (gradient + mask overlay baked in) */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        width={1440}
        height={800}
        fetchPriority="high"
      />

      {/* Content positioned precisely per Figma */}
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center px-14">
        {/* H1: y=176 from top */}
        <h1
          className="mt-[176px] max-w-[842px] text-center font-heading text-[42px] font-medium text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:text-[56px] lg:text-[68px]"
          style={{ lineHeight: '1.06em' }}
        >
          Engineering the Future of{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#1E5EFF] to-[#18B9E5] bg-clip-text text-transparent">Enterprise with AI</span>
        </h1>

        {/* Subtitle: 24px below heading */}
        <p className="mt-6 max-w-[858px] text-center font-body text-base text-white sm:text-lg" style={{ lineHeight: '1.44em' }}>
          Accelerate the speed of business with&nbsp;Zentrixel&nbsp;and our AI
          solutions for work, service, and process. We build software and AI
          systems that perform reliably and scale with your business.
        </p>

        {/* CTA Button: 20px below subtitle */}
        <Link
          to="/products"
          className="mt-5 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90"
          style={{ minWidth: '199px' }}
        >
          View Our Product
        </Link>

        {/* Trust section pushed to bottom area */}
        <div className="mt-auto mb-[80px] w-full max-lg:mt-10 max-lg:mb-6">
          {/* "Trusted Across Regulated Industries" label */}
          <p className="text-center font-heading text-xl font-medium text-white" style={{ lineHeight: '2.9em' }}>
            Trusted Across Regulated Industries
          </p>

          {/* Trust indicators bar: 1062px wide, 92px tall, black/40, rounded-lg */}
          <div className="mx-auto max-w-[1062px] rounded-lg bg-black/40">
            <div className="flex h-[92px] items-center max-md:h-auto max-md:flex-col max-md:gap-3 max-md:py-4">
              {TRUST_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-1 items-center px-6 max-md:px-4"
                >
                  {/* Gradient vertical line separator */}
                  <span
                    className="mr-4 hidden h-[44px] w-px flex-shrink-0 md:block"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(30, 94, 255, 1) 0%, rgba(30, 94, 255, 1) 50%, rgba(30, 94, 255, 0) 100%)',
                    }}
                  />
                  <p className="font-body text-base text-white" style={{ lineHeight: '1.5em' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
