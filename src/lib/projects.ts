import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(category?: Project['data']['category']) {
  const all = await getCollection('projects', ({ data }) => !(import.meta.env.PROD && data.draft));
  return all
    .filter((p) => !category || p.data.category === category)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
