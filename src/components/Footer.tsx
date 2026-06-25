import { Link } from 'react-router-dom'
import { company, navLinks, concerns } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-black/10 bg-background">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/logo.jpeg"
              alt={company.name}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="font-instrument-serif text-xl text-foreground">Explore</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-instrument-serif text-xl text-foreground">Our Concerns</h4>
            <ul className="mt-4 space-y-3">
              {concerns.map((c) => (
                <li key={c.slug}>
                  <Link to="/concerns" className="text-sm text-muted transition-colors hover:text-foreground">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.address}</p>
        </div>
      </div>
    </footer>
  )
}
