import PageHeader from '../components/PageHeader'
import { chairman } from '../data/content'

export default function Chairman() {
  return (
    <div className="relative w-full">
      <PageHeader eyebrow="Leadership" title={chairman.heading} />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Portrait */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]">
              {chairman.photo ? (
                <img
                  src={chairman.photo}
                  alt={chairman.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center p-8 text-center text-sm text-muted">
                  Add the Chairman&rsquo;s portrait in <code>content.ts</code>
                </div>
              )}
            </div>
            <div className="mt-6">
              <p className="font-instrument-serif text-3xl text-foreground">{chairman.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-muted">{chairman.title}</p>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <p className="mb-8 font-instrument-serif text-3xl leading-tight text-foreground sm:text-4xl">
              &ldquo;Deliver quality without compromise, and honour every commitment.&rdquo;
            </p>
            <div className="space-y-6">
              {chairman.message.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
