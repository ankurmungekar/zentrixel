interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2
        className={`font-heading text-4xl font-semibold leading-snug ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 whitespace-pre-line font-body text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
