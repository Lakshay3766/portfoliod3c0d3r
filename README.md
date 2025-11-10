# d3c0d3r – Cybersecurity Blog

A personal blog built with Next.js, Tailwind CSS, and MDX. It includes dark mode, a custom image fallback, view counters, and a clean reading experience.

## Features
- Next.js + Tailwind CSS
- MDX posts in `data/blog`
- Dark/light theme via `next-themes`
- Image fallback for broken assets
- View counters and “Now Playing” widgets
- Command palette (`⌘ + K`) on desktop

## Quick Start
- Prerequisites: Node `16.x` and npm
- Install: `npm install`
- Develop: `npm run dev` then open `http://localhost:3000`
- Build: `npm run build`
- Serve production build: `npm run serve`

## Writing Posts
- Create a new file in `data/blog/` like `my-post.mdx`
- Frontmatter typically includes `title`, `date`, `summary`, and `tags`
- Images can be placed under `public/static/images/` and referenced in MDX

## Configuration
- Edit site-wide settings in `data/siteMetadata.js`
- Tailwind setup in `tailwind.config.js`
- Custom MDX components in `components/MDXComponents.js`

## Deployment (Vercel)
1. Connect the repo to Vercel
2. Set any required environment variables in Vercel (e.g., analytics or comments provider keys if you enable them)
3. Vercel will run `npm run build` automatically

## Scripts
- `npm run dev` – local dev server
- `npm run build` – build and generate sitemap
- `npm run serve` – start production server
- `npm run analyze` – bundle analyzer
- `npm run lint` – lint code

## Notes
- Local development uses SQLite at `prisma/dev.db`
- Some optional integrations (e.g., comments) require additional env vars

## Acknowledgments
This project started from a Next.js + Tailwind starter and has been customized for cybersecurity content and improved reading experience.
