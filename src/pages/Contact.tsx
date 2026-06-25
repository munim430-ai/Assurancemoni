import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { company, careers } from '../data/content'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${name || 'website'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative w-full">
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Sourcing, partnerships, or careers — reach out and we will respond."
      />

      <section className="mx-auto max-w-7xl px-8 pb-8">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Details */}
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 block font-instrument-serif text-2xl text-foreground transition-opacity hover:opacity-60"
              >
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted">Phone</p>
              <p className="mt-2 font-instrument-serif text-2xl text-foreground">{company.phone}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted">Address</p>
              <p className="mt-2 font-instrument-serif text-2xl text-foreground">{company.address}</p>
            </div>

            <div className="border-t border-black/10 pt-10">
              <h2
                className="font-instrument-serif text-3xl text-foreground"
                style={{ letterSpacing: '-1px' }}
              >
                {careers.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{careers.lead}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{careers.note}</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-muted" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-none rounded-xl border border-black/15 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground"
                />
              </div>
              <button
                type="submit"
                className="inline-block rounded-full bg-foreground px-10 py-4 text-base text-background transition-transform duration-200 hover:scale-[1.03]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
