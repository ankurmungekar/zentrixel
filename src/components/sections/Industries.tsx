import { Link } from 'react-router-dom'
import letsArrow from '../../assets/images/lets-arrow-blue.svg'
import bankingImg from '../../assets/images/industries-banking.png'
import healthcareImg from '../../assets/images/industries-healthcare.png'
import insuranceImg from '../../assets/images/industries-insurance.png'
import realEstateImg from '../../assets/images/industries-real-estate.png'
import enterpriseImg from '../../assets/images/industries-enterprise.png'

const INDUSTRIES_ROW1 = [
  {
    title: 'Banking, Financial Services\n& Fintech',
    gradient: 'radial-gradient(circle at 89% 100%, rgba(137,158,244,1) 0%, rgba(137,158,244,0.2) 100%)',
    width: 'calc(40% - 15px)',
    icon: bankingImg,
  },
  {
    title: 'Healthcare &\nLife Sciences',
    gradient: 'radial-gradient(circle at 89% 100%, rgba(54,192,211,1) 0%, rgba(54,192,211,0.2) 100%)',
    width: 'calc(24% - 15px)',
    icon: healthcareImg,
  },
]

const INDUSTRIES_ROW2 = [
  {
    title: 'Insurance',
    gradient: 'radial-gradient(circle at 89% 100%, rgba(122,151,194,1) 0%, rgba(122,151,194,0.2) 100%)',
    width: 'calc(24% - 15px)',
    icon: insuranceImg,
  },
  {
    title: 'Real Estate &\nFacilities',
    gradient: 'radial-gradient(circle at 89% 100%, rgba(111,174,164,1) 0%, rgba(111,174,164,0.2) 100%)',
    width: 'calc(40% - 15px)',  
    icon: realEstateImg,
  },
  {
    title: 'Enterprise & B2B\nOrganizations',
    gradient: 'radial-gradient(circle at 89% 100%, rgba(60,95,169,1) 0%, rgba(60,95,169,0.2) 100%)',
    width: 'calc(36% - 20px)',
    icon: enterpriseImg,
  },
]

export default function Industries() {
  return (
    <section className="bg-white py-20" id="industries">
      <div className="mx-auto max-w-[1440px] px-14">
        {/* Row 1: Title block + 2 cards */}
        <div className="hidden gap-[30px] lg:flex">
          {/* Title block */}
          <div className="flex flex-shrink-0 flex-col justify-start" style={{ width: 'calc(36% - 20px)' }}>
            <h2 className="whitespace-pre-line font-heading text-4xl font-semibold leading-[1.28em] text-navy">
              {'Industries Where\nReliability Matters'}
            </h2>
            <p className="mt-4 max-w-[327px] font-body text-base leading-[1.5em] text-muted">
              Powering digital transformation across high-impact sectors.
            </p>
          </div>

          {INDUSTRIES_ROW1.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="mt-[30px] hidden gap-[30px] lg:flex">
          {INDUSTRIES_ROW2.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <h2 className="whitespace-pre-line font-heading text-3xl font-semibold leading-[1.28em] text-navy">
            {'Industries Where\nReliability Matters'}
          </h2>
          <p className="mt-4 font-body text-base leading-[1.5em] text-muted">
            Powering digital transformation across high-impact sectors.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[...INDUSTRIES_ROW1, ...INDUSTRIES_ROW2].map((industry) => (
              <IndustryCard key={industry.title} industry={industry} mobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustryCard({
  industry,
  mobile = false,
}: {
  industry: { title: string; gradient: string; width: string; icon: string }
  mobile?: boolean
}) {
  return (
    <Link
      to="/industries"
      className="group relative flex h-[293px] flex-col justify-between overflow-hidden rounded-xl p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: industry.gradient,
        width: mobile ? '100%' : industry.width,
        flexShrink: 0,
      }}
    >
      <div className="flex items-start justify-between">
        <h3 className="whitespace-pre-line font-heading text-2xl font-semibold leading-[1.42em] text-navy">
          {industry.title}
        </h3>
        <span className="flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <img src={letsArrow} alt="" />
        </span>
      </div>

      <img
        src={industry.icon}
        alt=""
        className="absolute bottom-0 right-0 h-[75%] w-auto object-contain"
        loading="lazy"
      />
    </Link>
  )
}
