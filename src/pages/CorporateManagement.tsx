import PageHeader from '../components/PageHeader'
import { management } from '../data/content'

export default function CorporateManagement() {
  return (
    <div className="relative w-full">
      <PageHeader
        eyebrow="The team"
        title="Corporate Management"
        subtitle="The directors who steer each division — guided by a shared commitment to quality and reliability."
      />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((m, i) => (
            <article key={i} className="flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center p-6 text-center text-xs text-muted">
                    Add photo in <code>content.ts</code>
                  </div>
                )}
              </div>
              <h3 className="mt-5 font-instrument-serif text-2xl text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-muted">{m.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
