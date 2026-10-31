import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
      // Drafts render in `astro dev` but are left out of production builds.
      draft: z.boolean().default(false),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
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
