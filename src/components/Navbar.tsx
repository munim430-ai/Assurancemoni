import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, company } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label={company.name}>
          <img
            src="/logo.jpeg"
            alt={company.name}
            className="h-10 w-auto object-contain sm:h-12"
            onError={(e) => {
              ;(e.currentTarget.style.display = 'none')
              const fb = e.currentTarget.nextElementSibling as HTMLElement | null
              if (fb) fb.style.display = 'block'
            }}
          />
          <span
            style={{ display: 'none' }}
            className="font-instrument-serif text-3xl tracking-tight text-foreground"
          >
            {company.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-foreground ${
                    isActive ? 'text-foreground' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-foreground px-6 py-2.5 text-sm text-background transition-transform duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="relative z-10 mx-auto max-w-7xl px-8 pb-6 lg:hidden">
          <ul className="flex flex-col gap-4 border-t border-black/10 pt-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm text-background"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
