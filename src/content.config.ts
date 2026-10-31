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
      // Lower numbers sort first within a category.
      order: z.number().default(100),
      featured: z.boolean().default(false),
      // Drafts render in `astro dev` but are left out of production builds.
      draft: z.boolean().default(false),
      date: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
    }),
});

export const collections = { projects };
