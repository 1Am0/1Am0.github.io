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
   discipline: Power electronics
   role: Independent project # or e.g. "Team of 4, led PCB layout"
   status: complete          # or: in-progress
   highlights:               # short design notes (featured card + spec sheet)
     - 4-layer board, 2–16 V input
     - TPS63070 buck-boost, 3.3 V / 9 V selectable
   order: 1                  # lower = earlier; the first `featured` hardware project gets the big slot
   featured: true
   draft: false              # true = only visible in `npm run dev`
   date: 2026-05-01
   tags: [STM32, KiCad, Buck converter]
   cover: ../../assets/projects/bench-psu/cover.jpg
   coverAlt: Assembled PCB on the bench
   repo: https://github.com/1Am0/bench-psu
   ---
   ```

3. Put images in `src/assets/projects/<slug>/`. For framed, captioned figures use the `Figure` component:

   ```mdx
   import Figure from '../../components/Figure.astro';
   import schematic from '../../assets/projects/bench-psu/schematic.png';

   <Figure src={schematic} alt="Power stage schematic" n={2} caption="Schematic / power stage" />
   ```

   Plain Markdown images (`![alt](../../assets/...)`) also work. Astro optimizes all of them at build time.
4. `src/content/projects/hardware-project-1.mdx` contains the recommended write-up sections
   (requirements → system design → schematic/PCB → BOM → firmware → testing → next revision).

   Each `##` heading becomes an entry in the page's "On this page" contents list (shown on wide screens
   once a write-up has three or more sections).

## Interactive 3D board models

Project pages can show a rotatable 3D model of a PCB (drag to rotate, scroll or pinch to zoom, arrow keys,
reset / pause / fullscreen buttons).

1. Export a **GLB** from your PCB tool:
   - **KiCad 8+:** PCB Editor → File → Export → GLB.
   - **Altium / Fusion / others:** export STEP, then convert to GLB (e.g. import into Blender and
     File → Export → glTF 2.0 (.glb)).
   Keep it under ~10 MB; KiCad exports of small boards are usually 1–5 MB.
2. Put the file in `public/models/`, e.g. `public/models/weather-station.glb`.
3. Add it to the project's frontmatter:

   ```yaml
   model:
     src: /models/weather-station.glb
     caption: PCB assembly / interactive 3D    # optional
     poster: ../../assets/projects/weather-station/render.png  # optional still image shown while loading
     orbit: 30deg 55deg auto                    # optional starting angle
   ```

   Or place one (or more) anywhere in the write-up:

   ```mdx
   import BoardViewer from '../../components/BoardViewer.astro';

   <BoardViewer src="/models/weather-station.glb" alt="3D model of the weather station PCB" n={3} />
   ```

The 3D library (~1 MB) only downloads when a model scrolls into view, so pages without models stay fast. The
model spins slowly while visible, and doesn't spin for visitors who have reduced motion turned on.
`public/models/example-board.glb` is a sample used by the placeholder project; delete it once you have
your own.

## Pages

| Path | Source |
| --- | --- |
| `/` | `src/pages/index.astro`: hero, featured project, software list, background, about & contact |
| `/projects/` | `src/pages/projects/index.astro`: archive table of every project |
| `/projects/<slug>/` | `src/pages/projects/[...slug].astro`: title block, design notes, write-up, contents |
| 404 | `src/pages/404.astro` |

## Edit other content

Everything personal lives in `src/data/site.ts`:

- `site`: name, links, email, plus three optional extras that stay hidden until set:
  - `resume`: put the PDF at `public/resume.pdf` and set `'/resume.pdf'`; résumé buttons appear in the nav,
    hero and contact section.
  - `now`: a one-line status shown in the hero with a green "Now" indicator.
  - `photo`: a headshot shown above the quick-facts table (import the image at the top of the file).
- `education`: school, graduation year, headline details and coursework chips.
- `experience`, `awards`, `skillGroups`.

The About paragraph is in `src/pages/index.astro`. Colors and spacing are tokens at the top of
`src/styles/global.css` (light and dark themes). Fonts are configured in `astro.config.mjs` and
self-hosted at build time.

## Social preview image

`public/og.png` (1200×630) is the image shown when the site is shared on LinkedIn, iMessage, Discord and so
on. It was rendered from the site's own styles; if your name or tagline changes, regenerate it or replace it
with any 1200×630 PNG.

## Quality checks

The site was checked with Lighthouse (100 for performance, accessibility, best practices and SEO on mobile and
desktop) and axe-core (no violations). Light-theme text colors meet WCAG AA contrast. Before deploying a big
change, run `npm run build`; it type-checks every page and validates each project's frontmatter.
