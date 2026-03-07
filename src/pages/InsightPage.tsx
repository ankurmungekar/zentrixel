import { Helmet } from 'react-helmet-async'

const INSIGHTS = [
  {
    title: 'How AI Is Transforming Enterprise Operations in 2026',
    category: 'Artificial Intelligence',
    date: 'Feb 2026',
    excerpt:
      'Explore how practical AI is being applied across industries to automate workflows, improve decision-making, and drive operational efficiency.',
  },
  {
    title: 'Building Scalable SaaS Platforms: Lessons from the Field',
    category: 'Engineering',
    date: 'Jan 2026',
    excerpt:
      'Key architectural decisions and engineering practices that ensure SaaS platforms perform reliably at enterprise scale.',
  },
  {
    title: 'Digital Transformation in Regulated Industries',
    category: 'Strategy',
    date: 'Dec 2025',
    excerpt:
      'How organizations in banking, healthcare, and insurance navigate compliance while modernizing their technology stack.',
  },
  {
    title: 'The Role of DevOps in Enterprise Software Delivery',
    category: 'Cloud & DevOps',
    date: 'Nov 2025',
    excerpt:
      'CI/CD pipelines, infrastructure as code, and monitoring strategies that ensure reliable, repeatable deployments.',
  },
  {
    title: 'Conversational AI: Beyond Basic Chatbots',
    category: 'Artificial Intelligence',
    date: 'Oct 2025',
    excerpt:
      'How enterprise-grade conversational AI platforms differ from simple chatbot solutions and why it matters for business outcomes.',
  },
  {
    title: 'Choosing the Right Technology Partner for Your Enterprise',
    category: 'Strategy',
    date: 'Sep 2025',
    excerpt:
      'Key factors to evaluate when selecting a software development partner for mission-critical enterprise applications.',
  },
]

export default function InsightPage() {
  return (
    <>
      <Helmet>
        <title>Insights | Zentrixel</title>
        <meta
          name="description"
          content="Read insights from Zentrixel on AI, enterprise software development, digital transformation, and technology strategy."
        />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Insights</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Ideas, Perspectives & Technical Thinking
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Explore our latest thinking on AI, enterprise technology, and
              building systems that deliver measurable impact.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {INSIGHTS.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-muted">{post.date}</span>
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-navy">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-primary">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
