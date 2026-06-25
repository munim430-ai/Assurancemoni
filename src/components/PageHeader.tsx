type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-12 pt-16">
      {eyebrow && (
        <p className="animate-fade-rise text-sm uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>
      )}
      <h1
        className="animate-fade-rise-delay mt-4 font-instrument-serif text-5xl font-normal text-foreground sm:text-6xl md:text-7xl"
        style={{ lineHeight: 0.98, letterSpacing: '-1.5px' }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="animate-fade-rise-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
