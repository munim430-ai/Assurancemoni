import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { concerns } from '../data/content'

export default function Concerns() {
  return (
    <div className="relative w-full">
      <PageHeader
        eyebrow="What we do"
        title="Our Concerns"
        subtitle="Three divisions, one standard. Each concern operates independently yet shares the discipline that defines the group."
      />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="space-y-24">
          {concerns.map((c, i) => (
            <article
              key={c.slug}
              id={c.slug}
              className="grid scroll-mt-32 gap-10 border-t border-black/10 pt-12 md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <p className="font-instrument-serif text-6xl text-black/15">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2
                  className="mt-2 font-instrument-serif text-4xl text-foreground"
                  style={{ letterSpacing: '-1px' }}
                >
                  {c.name}
                </h2>
              </div>

              <div className="md:col-span-3">
                <div className="space-y-5">
                  {c.body.map((p, j) => (
                    <p key={j} className="text-base leading-relaxed text-muted sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>

                <ul className="mt-8 flex flex-wrap gap-3">
                  {c.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-black/15 px-4 py-2 text-sm text-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Market context strip — RMG only */}
                {c.slug === 'ready-made-garments' && (
                  <div className="mt-10 rounded-2xl border border-black/10 p-6">
                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted">
                      Industry context · Source: BGMEA / EPB
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        { value: '#2', label: 'Global RMG exporter' },
                        { value: '$47.39B', label: 'FY 2023-24 exports' },
                        { value: '4.2M', label: 'Industry workers nationwide' },
                      ].map(({ value, label }) => (
                        <div key={label}>
                          <p className="font-instrument-serif text-3xl text-foreground">{value}</p>
                          <p className="mt-1 text-sm text-muted">{label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/industry-intelligence"
                      className="mt-5 inline-block text-sm text-foreground underline underline-offset-4 opacity-60 transition-opacity hover:opacity-100"
                    >
                      Full industry intelligence →
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
