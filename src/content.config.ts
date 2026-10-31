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
      // Interactive 3D board shown on the project page. `src` is a .glb under public/, e.g. /models/board.glb.
      model: z
        .object({
          src: z.string().regex(/\.glb$/i, 'model.src must point to a .glb file'),
          alt: z.string().optional(),
          caption: z.string().optional(),
          poster: image().optional(),
          orbit: z.string().optional(),
        })
        .optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
    }),
});

export const collections = { projects };
