import PageHeader from '../components/PageHeader'
import { gallery } from '../data/content'

export default function Gallery() {
  return (
    <div className="relative w-full">
      <PageHeader
        eyebrow="A look inside"
        title="Gallery"
        subtitle="From the production floor to finished projects — a glimpse of the work behind the group."
      />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <figure
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl border border-black/10 bg-black/[0.03]"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-muted">
                  {item.caption}
                </div>
              )}
              {item.src && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          Replace the placeholder entries in <code>src/data/content.ts</code> with your own images
          (place files in <code>/public</code>).
        </p>
      </section>
    </div>
  )
}
