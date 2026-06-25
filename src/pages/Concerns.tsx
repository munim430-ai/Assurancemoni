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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
