import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg-full.jpg'

const TRUST_ITEMS = [
  'Enterprise systems operating in Financial, healthcare and real-estate.',
  'AI and automation improving operational efficiency',
  'Designed for security, resilience, and long-term growth',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        width={1440}
        height={900}
        fetchPriority="high"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-14 pt-20 max-md:px-5">
        <div className="flex flex-col items-center">
          <h1
            className="max-w-[842px] text-center font-heading text-[28px] font-medium text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:text-[42px] md:text-[56px] lg:text-[68px]"
            style={{ lineHeight: '1.06em' }}
          >
            Engineering the Future of{' '}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1E5EFF] to-[#18B9E5] bg-clip-text text-transparent">Enterprise with AI</span>
          </h1>

          <p className="mt-6 max-w-[858px] text-center font-body text-sm text-white sm:text-base md:text-lg max-md:mt-4" style={{ lineHeight: '1.44em' }}>
            Accelerate the speed of business with&nbsp;Zentrixel&nbsp;and our AI
            solutions for work, service, and process. We build software and AI
            systems that perform reliably and scale with your business.
          </p>

          <Link
            to="/products"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90"
            style={{ minWidth: '199px' }}
          >
            View Our Product
          </Link>
        </div>

        <div className="mt-30 w-full">
          {/* "Trusted Across Regulated Industries" label */}
          <p className="mb-3 text-center font-heading text-base font-medium text-white md:text-xl">
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
                  <p className="font-body text-sm text-white md:text-base" style={{ lineHeight: '1.5em' }}>
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
