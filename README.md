# AI Tools Directory

A curated directory of 60+ AI tools across 20 categories. Built with Next.js 15, Tailwind CSS, and deployed on Cloudflare Pages.

**Live:** https://ai-tools-directory-7a0.pages.dev

## Setup

```bash
npm install
npm run dev    # Development server at localhost:3000
npm run build  # Static export to /out
```

## Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name=ai-tools-directory
```

## Stack

- **Next.js 15** — Static export (SSG)
- **Tailwind CSS 4** — Styling
- **Lucide React** — Icons
- **Cloudflare Pages** — Hosting

## Structure

```
src/
  app/
    page.tsx              # Homepage
    about/page.tsx        # About page
    submit/page.tsx       # Submit tool page
    search/page.tsx       # Search + filters
    category/[slug]/      # Category pages (20)
    tool/[slug]/          # Tool detail pages (60+)
  components/
    header.tsx            # Site header
    footer.tsx            # Site footer
    tool-card.tsx         # Tool card component
  data/
    tools.ts              # 60+ real AI tools
    categories.ts         # 20 categories
```

## Adding Tools

Edit `src/data/tools.ts` and add a new entry to the `tools` array. Rebuild and deploy.
