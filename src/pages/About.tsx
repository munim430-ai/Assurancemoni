import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { about } from '../data/content'

export default function About() {
  return (
    <div className="relative w-full">
      <PageHeader eyebrow="Who we are" title={about.heading} subtitle={about.lead} />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="grid gap-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="md:border-l md:border-black/10 md:pl-10">
            <dl className="space-y-10">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt
                    className="font-instrument-serif text-5xl text-foreground"
                    style={{ letterSpacing: '-1px' }}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-20 border-t border-black/10 pt-12">
          <Link
            to="/profile-of-chairman"
            className="font-instrument-serif text-2xl text-foreground transition-opacity hover:opacity-60"
          >
            Read the Chairman&rsquo;s message &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
