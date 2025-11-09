# portfoliod3c0d3r

This repository contains a Next.js + Tailwind CSS personal blog/portfolio configured for deployment on Vercel.

How to deploy on Vercel

1. Connect this GitHub repository (https://github.com/Lakshay3766/portfoliod3c0d3r) to Vercel via the Vercel dashboard.
2. Ensure the following environment variables are set in the Vercel project Settings > Environment Variables before deploying to Production:
   - DATABASE_URL — (production database connection). For local dev we use SQLite (file:./dev.db), but for production use a managed database and set its connection string here.
   - NEXTAUTH_SECRET — If you use next-auth in production.
   - NEXT_PUBLIC_GISCUS_REPO, NEXT_PUBLIC_GISCUS_REPOSITORY_ID, NEXT_PUBLIC_GISCUS_CATEGORY, NEXT_PUBLIC_GISCUS_CATEGORY_ID — (if you enable Giscus comments)
   - Any other secrets referenced in `siteMetadata` or `vercel` settings (check `process.env` usages).
3. Vercel will automatically run `npm run build` (the `build` script is defined in `package.json`).
4. If you need to run migrations or seed a production DB, handle those outside of Vercel build (e.g., temporarily via CI or managed DB console).

Notes

- The project uses Prisma. For local development `.env` contains `DATABASE_URL="file:./dev.db"`. For production set `DATABASE_URL` to your production database in Vercel settings.
- The app is Next.js 12 and uses the `@vercel/next` builder (configured with `vercel.json`).

If you'd like, I can deploy directly from this machine using the Vercel CLI (you'll need to provide a Vercel token or authenticate), or guide you through connecting the repository and setting env vars in the Vercel dashboard.
