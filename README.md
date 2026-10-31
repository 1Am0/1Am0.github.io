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
npm run fresh     # clear all caches, then start the dev server
npm run clean     # just clear caches (.astro, node_modules/.astro, node_modules/.vite, dist)
```

**After pulling new changes**, stop the dev server and run:

```bash
npm install
npm run fresh
```

`npm install` picks up any new packages. `npm run fresh` throws away Astro's cached content data, so changes
to project fields (like a new frontmatter option) show up straight away. The scripts work in PowerShell, cmd,
macOS and Linux.

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

## Interactive 3D models

Project pages can show a 3D model visitors can rotate: a PCB, an enclosure, or a whole mechanism. Drag to
rotate, scroll or pinch to zoom, use the arrow keys, and there are reset / turntable / fullscreen buttons. If the
file contains **animations** (piano keys pressing, a lid opening, a gear train turning), an animation bar
appears with play/pause, a timeline you can drag, and a picker when there are several.

### Get a GLB file

The viewer takes **GLB** (binary glTF), the standard 3D format for the web.

- **KiCad 8+ (PCBs):** PCB Editor → File → Export → GLB. Done.
- **Fusion (still model):** File → Export → **FBX** (keeps colours better than OBJ), then convert to GLB in
  Blender: File → Import → FBX, then File → Export → glTF 2.0, format **glTF Binary (.glb)**.
- **Fusion (animated), e.g. a piano with moving keys:** Fusion's own animations don't export, so do the motion
  in [Blender](https://www.blender.org) (free):
  1. In Fusion, make each moving part (every key) its own **component**, then File → Export → **FBX**. Each
     component arrives in Blender as a separate object you can move.
  2. In Blender, File → Import → FBX. For each key, set its pivot where it hinges (Object → Set Origin → 3D
     Cursor after snapping the cursor to the hinge), then insert rotation keyframes (I → Rotation) for "up",
     "down", "up".
  3. Optional: make several clips (e.g. "Scale" and "Chord") as separate Actions in the Action Editor and push
     each one down to the NLA editor. Each becomes a choice in the site's animation picker.
  4. File → Export → glTF 2.0 → **glTF Binary (.glb)**, with Animation ticked (Mode: "Actions" or "NLA Tracks").
- **SolidWorks / Onshape / Altium:** export FBX or OBJ (or STEP, converted with a free tool such as
  FreeCAD) and follow the same Blender route.

Check the file before uploading by dragging it onto <https://gltf-viewer.donmccurdy.com>: if it looks and moves
right there, it will on the site.

**File size:** aim for under ~10 MB. CAD exports are often much bigger than they need to be. Shrink one with:

```bash
npx @gltf-transform/cli optimize big.glb small.glb --compress draco --texture-compress webp
```

(or in Blender, tick Compression in the glTF export options; for very detailed models, use Decimate first).

### Add it to a project

1. Put the file in `public/models/`, e.g. `public/models/piano.glb`.
2. Add it to the project's frontmatter:

   ```yaml
   model:
     src: /models/piano.glb
     alt: 3D model of the piano with the key action animated   # describe what it shows
     caption: Key action / animated                             # optional
     poster: ../../assets/projects/piano/render.png             # optional still shown while loading
     orbit: 30deg 55deg auto                                    # optional starting angle
     animation: Scale                                           # optional: which animation shows first
     spin: false                                                # optional: turntable spin (default: on for
                                                                #   still models, off for animated ones)
   ```

   Or place one (or more) anywhere in the write-up:

   ```mdx
   import ModelViewer from '../../components/ModelViewer.astro';

   <ModelViewer src="/models/piano.glb" alt="3D model of the piano" caption="Key action" n={3} animation="Chord" />
   ```

The 3D library (~1 MB) only downloads when a model scrolls into view, so pages without models stay fast.
Animations play on a loop while the model is on screen and pause when you scroll away. For visitors who have
reduced motion turned on, nothing moves until they press play. `BoardViewer` still works as another name for
`ModelViewer`.

Samples to delete once you have your own: `public/models/example-board.glb` (still PCB, used by placeholder 1)
and `public/models/example-keyboard.glb` (animated keyboard, used by placeholder 2).

## Click to zoom

Every image on a project page can be opened full screen: the cover, every `Figure`, and plain Markdown
images in the write-up. In the viewer, click the image (or press Z) to switch between "fit to screen" and actual
size, "Original" opens the file in a new tab, and Esc closes it. Nothing to set up. For sharp zooming, export
schematics and layouts at high resolution (2000 px wide or more, or 300 dpi from KiCad's Plot / Export).

## Demo videos

1. Record a short clip of the board working (5–15 s, landscape, steady). Phone video is fine.
2. Shrink it to an MP4 under ~3 MB. With [HandBrake](https://handbrake.fr): preset "Web → Creator 720p",
   tick "Web Optimized", untick audio. Or with ffmpeg:

   ```bash
   ffmpeg -i raw.mov -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart demo.mp4
   ```

3. Put it in `public/videos/` and add it to the frontmatter:

   ```yaml
   video:
     src: /videos/psu-load-test.mp4
     alt: Output holding 5.00 V as the load steps from 0 to 2 A   # what the clip shows
     caption: Load step test                                      # optional
     poster: ../../assets/projects/bench-psu/video-poster.jpg     # optional first frame
   ```

   Or place one anywhere in the write-up (as many as you like):

   ```mdx
   import DemoVideo from '../../components/DemoVideo.astro';

   <DemoVideo src="/videos/psu-load-test.mp4" alt="Output holding 5 V as the load steps" caption="Load step test" n={4} />
   ```

Clips loop silently while on screen, pause when scrolled away, and have a pause button. They don't autoplay for
visitors with reduced motion turned on. For a longer video with sound (a walkthrough), add `controls: true`
(or `controls` on the component) to get a normal player instead. YouTube links can go in `demo:` instead.

## Design files

List files people can download (schematic PDF, Gerbers, BOM, firmware, STEP) in a "Design files" box on the
project page:

```yaml
downloads:
  - label: Schematic
    href: /files/bench-psu/schematic.pdf     # file in public/files/bench-psu/
  - label: Gerber files
    href: /files/bench-psu/gerbers.zip
    note: Rev B, JLCPCB-ready
  - label: Release v1.1
    href: https://github.com/1Am0/bench-psu/releases/tag/v1.1   # full URLs work too
```

The file type and size are filled in automatically, and the build fails with a clear message if a file is
missing, so you can't ship a broken link. Keep large or frequently-changing files in GitHub Releases and link
to them instead.

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
