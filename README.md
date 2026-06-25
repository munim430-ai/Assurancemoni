# Assurance Moni Group — Website

A multi-page marketing site for an RMG exporter and multi-industry conglomerate.
Built with **React + Vite + TypeScript + Tailwind CSS** and **react-router-dom**.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Project structure

```
public/
  logo.jpeg                      # site logo (provided)
  executive-amzad-hossain.webp   # Executive Director portrait (provided)
src/
  styles/
    fonts.css   # Instrument Serif (display) + Inter (body)
    theme.css   # fade-rise / fade-rise-delay / fade-rise-delay-2 animations
    index.css   # Tailwind + base styles
  data/
    content.ts  # ← ALL site copy, contacts, management, concerns, gallery
  components/   # Navbar, Footer, Layout, PageHeader, ScrollToTop
  pages/        # Home, About, Chairman, CorporateManagement, Concerns, Gallery, Contact
```

## Editing content

Everything readable on the site lives in **`src/data/content.ts`**. Update text,
contact details, management names, concern descriptions, and gallery items there —
no need to touch the components.

- **Logo** → `public/logo.jpeg` (swap the file, keep the name, or update the path in `Navbar.tsx`/`Footer.tsx`).
- **Executive Director photo** → `public/executive-amzad-hossain.webp`, referenced in `content.ts` under `management`.
- **Gallery images** → drop files in `/public` and set their paths in the `gallery` array.
- Fields marked `— add … —` or left blank are intentional placeholders for you to fill with verified details.

## Design system

| Token        | Value     | Use                              |
| ------------ | --------- | -------------------------------- |
| `background` | `#FFFFFF` | page background                  |
| `foreground` | `#000000` | headings, logo text, buttons     |
| `muted`      | `#6F6F6F` | body copy, nav items             |

Display type: **Instrument Serif**. Body type: **Inter**.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import it in Vercel — the framework preset **Vite** is detected automatically
   (build command `npm run build`, output `dist`).
3. `vercel.json` includes a SPA rewrite so client-side routes resolve on refresh.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- The copy in `content.ts` is professionally written but **representative** —
  replace it with your own verified wording before publishing.
- Make sure you have the rights to any branding, names, and imagery used, and that
  each photo accurately represents the person it is labelled with.
- The hero background video is loaded from the URL given in `content.ts`
  (`heroVideoUrl`); swap it for a self-hosted file in `/public` if you prefer.
```
