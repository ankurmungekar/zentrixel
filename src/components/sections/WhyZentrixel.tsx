import SectionHeading from '../ui/SectionHeading'
import whyImage from '../../assets/images/why-zentrixel.png'
import settingIcon from '../../assets/images/setting.svg'
import shieldIcon from '../../assets/images/shield.svg'
import brainIcon from '../../assets/images/brain.svg'
import blockchainIcon from '../../assets/images/blockchain.svg'

const FEATURES = [
  {
    title: 'Operationally Ready',
    description: 'Engineered for real users, live data, and operational complexity.',
    icon: settingIcon,
    position: 'top-left' as const,
  },
  {
    title: 'Structured & Secure Delivery',
    description: 'Governance, compliance, and disciplined execution embedded at every stage.',
    icon: shieldIcon,
    position: 'top-right' as const,
  },
  {
    title: 'AI with Business Purpose',
    description: 'Applied to automate processes and improve measurable outcomes.',
    icon: brainIcon,
    position: 'bottom-left' as const,
  },
  {
    title: 'Architecture That Evolves',
    description: 'Designed to integrate, adapt, and grow with changing business needs.',
    icon: blockchainIcon,
    position: 'bottom-right' as const,
  },
]

export default function WhyZentrixel() {
  const topLeft = FEATURES.find((f) => f.position === 'top-left')!
  const topRight = FEATURES.find((f) => f.position === 'top-right')!
  const bottomLeft = FEATURES.find((f) => f.position === 'bottom-left')!
  const bottomRight = FEATURES.find((f) => f.position === 'bottom-right')!

  return (
    <section className="bg-white py-20" id="why-zentrixel">
      <div className="mx-auto max-w-[1440px] px-14">
        <p className="mx-auto mb-4 w-fit font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
          Why Zentrixel?
        </p>
        <SectionHeading
          title="Built for Enterprise Environments"
          subtitle={"Enterprise systems must operate reliably under real-world conditions not just in demonstrations.\nThat principle guides how we design from day one."}
        />

        {/* Desktop layout */}
        <div className="relative mx-auto mt-14 hidden max-w-[1062px] lg:block">
          <div className="grid grid-rows-[auto_auto] gap-y-10" style={{ gridTemplateColumns: '1fr 460px 1fr' }}>
            {/* Row 1: top-left feature */}
            <FeatureCard feature={topLeft} />

            {/* Center image spanning 2 rows */}
            <div className="relative row-span-2 flex flex-col items-center justify-end">
              {/* Cyan arch behind person */}
              <div
                className="absolute bottom-0 w-[258px]"
                style={{
                  height: '463px',
                  borderRadius: '120px 120px 0 0',
                  background: 'radial-gradient(circle at 89% 100%, rgba(45,206,237,1) 0%, rgba(194,238,240,1) 100%)',
                }}
              />
              <img
                src={whyImage}
                alt="Enterprise technology professional"
                className="relative z-10 h-auto w-[288px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Row 1: top-right feature */}
            <FeatureCard feature={topRight} align="right" />

            {/* Row 2: bottom-left feature */}
            <FeatureCard feature={bottomLeft} />

            {/* Row 2: bottom-right feature */}
            <FeatureCard feature={bottomRight} align="right" />
          </div>

          {/* Dashed lines — positioned at vertical center between top and bottom rows */}
          <div className="pointer-events-none absolute inset-x-0" style={{ top: 'calc(50% + 10px)' }}>
            {/* Left dashed line — fades on left end */}
            <div
              className="absolute left-0 h-px"
              style={{
                width: '38%',
                background: 'repeating-linear-gradient(to right, rgba(30,94,255,0.5) 0px, rgba(30,94,255,0.5) 4px, transparent 4px, transparent 8px)',
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 100%)',
              }}
            />
            {/* Right dashed line — fades on right end */}
            <div
              className="absolute right-0 h-px"
              style={{
                width: '42%',
                background: 'repeating-linear-gradient(to right, rgba(30,94,255,0.5) 0px, rgba(30,94,255,0.5) 4px, transparent 4px, transparent 8px)',
                maskImage: 'linear-gradient(to left, transparent, black 20%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent, black 20%, black 100%)',
              }}
            />
          </div>
        </div>

        {/* Mobile layout: stacked */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:hidden">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, align = 'left' }: { feature: (typeof FEATURES)[number]; align?: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col justify-center ${align === 'right' ? 'items-end' : ''}`}>
      <div>
        <div className="mb-2">
          <img src={feature.icon} alt="" width={32} height={32} />
        </div>
        <h3 className="whitespace-nowrap font-heading text-2xl font-semibold leading-[1.58em] text-navy">
          {feature.title}
        </h3>
        <p className="mt-1 max-w-[322px] font-body text-base leading-[1.5em] text-muted">
          {feature.description}
        </p>
      </div>
    </div>
  )
}
