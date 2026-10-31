# Anthony Mokhov — Portfolio

Electrical engineering portfolio, live at **https://1am0.github.io**.

Built with [Astro](https://astro.build) + MDX. The site is fully static: pages ship as plain HTML,
and each project is a Markdown file.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 (drafts visible)
npm run build     # type-check + production build into dist/ (drafts hidden)
npm run preview   # serve the production build
```

Pushing to `main` deploys automatically through `.github/workflows/deploy.yml`.
In the repo settings, **Pages → Source** must be set to **GitHub Actions**.

## Add or edit a project

1. Create `src/content/projects/<slug>.mdx`. The slug becomes the URL `/projects/<slug>/`.
2. Fill in the frontmatter (the schema is in `src/content.config.ts`):

   ```yaml
   ---
   title: Bench Power Supply
   summary: One sentence shown on the card.
   category: hardware        # or: software
   order: 1                  # lower = earlier
   featured: true
   draft: false              # true = only visible in `npm run dev`
   date: 2026-05-01
   tags: [STM32, KiCad, Buck converter]
   cover: ../../assets/projects/bench-psu/cover.jpg
   coverAlt: Assembled PCB on the bench
   repo: https://github.com/1Am0/bench-psu
   ---
   ```

3. Put images in `src/assets/projects/<slug>/` and reference them with relative paths in Markdown,
   e.g. `![Schematic](../../assets/projects/bench-psu/schematic.png)`. Astro optimizes them at build time.
4. `src/content/projects/hardware-project-1.mdx` contains the recommended write-up sections
   (requirements → system design → schematic/PCB → BOM → firmware → testing → next revision).

## Edit other content

- Name, links, résumé path: `src/data/site.ts`
- Skills, experience, awards: `src/data/site.ts`
- About text and section layout: `src/pages/index.astro`
- Colors and fonts: `src/styles/global.css`

## Résumé

Drop the PDF in `public/resume.pdf` and set `resume: '/resume.pdf'` in `src/data/site.ts`.
The résumé buttons in the nav and hero appear automatically.
