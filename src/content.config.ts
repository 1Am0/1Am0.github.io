import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A drawing shown in the project's media panel: an exported schematic or board layout (PNG/JPG/WebP/SVG).
const drawing = (image: SchemaContext['image']) =>
  z
    .object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })
    .optional();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['hardware', 'software']),
      // e.g. "Embedded systems", "Power electronics", "Signal processing".
      discipline: z.string(),
      role: z.string().default('Independent project'),
      status: z.enum(['complete', 'in-progress']).default('complete'),
      // Short design notes shown on the featured card and project spec sheet.
      highlights: z.array(z.string()).default([]),
      // Lower numbers sort first within a category.
      order: z.number().default(100),
      featured: z.boolean().default(false),
      // false = listed in the archive (/projects/) and keeps its page, but not shown on the home page.
      showOnHome: z.boolean().default(true),
      // Drafts render in `astro dev` but are left out of production builds.
      draft: z.boolean().default(false),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // Photo of the finished build. Also used as the card image and social preview.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Short caption under the cover on the project page (defaults to coverAlt).
      coverCaption: z.string().optional(),
      // Name of the cover's tab in the media panel. Defaults to "Photo" ("Screenshot" for software); use "Render" for CAD renders.
      coverLabel: z.string().optional(),
      // Schematic and PCB layout images, shown as tabs next to the 3D model at the top of the project page.
      // (The layout field is called `pcb` because MDX reserves `layout`.)
      schematic: drawing(image),
      pcb: drawing(image),
      // Which tab the media panel opens on (it's moved to the front). Default order: model, schematic, pcb,
      // photo, demo.
      firstView: z.enum(['model', 'schematic', 'pcb', 'photo', 'demo']).optional(),
      // Interactive 3D model shown on the project page (PCB, enclosure, mechanism…). `src` is a .glb under
      // public/, e.g. /models/board.glb. Animations inside the GLB get play/pause and timeline controls.
      model: z
        .object({
          src: z.string().regex(/\.glb$/i, 'model.src must point to a .glb file'),
          alt: z.string().optional(),
          caption: z.string().optional(),
          poster: image().optional(),
          orbit: z.string().optional(),
          // Turntable spin; defaults to on for still models, off for animated ones.
          spin: z.boolean().optional(),
          // Name of the animation to show first, if the file has several.
          animation: z.string().optional(),
        })
        .optional(),
      // Demo clip shown under the media on the project page. `src` is an .mp4/.webm under public/.
      video: z
        .object({
          src: z.string().regex(/\.(mp4|webm)$/i, 'video.src must point to an .mp4 or .webm file'),
          alt: z.string(),
          caption: z.string().optional(),
          poster: image().optional(),
          controls: z.boolean().optional(),
        })
        .optional(),
      // "Design files" row: schematic PDF, Gerbers, BOM, CAD… Local paths are under public/, e.g.
      // /files/<slug>/schematic.pdf; full URLs (GitHub releases etc.) also work.
      downloads: z
        .array(
          z.object({
            label: z.string(),
            href: z.string().refine((h) => h.startsWith('/') || /^https?:\/\//.test(h), {
              message: 'downloads.href must start with / (a file in public/) or be a full https:// URL',
            }),
            note: z.string().optional(),
          }),
        )
        .default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
    }),
});

export const collections = { projects };
