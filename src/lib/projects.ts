import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(category?: Project['data']['category']) {
  const all = await getCollection('projects', ({ data }) => !(import.meta.env.PROD && data.draft));
  return all
    .filter((p) => !category || p.data.category === category)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Drawing-number style code, e.g. HW-001 / SW-002, from a project's position in its category. */
export function projectCode(project: Project, index: number) {
  return `${project.data.category === 'hardware' ? 'HW' : 'SW'}-${String(index + 1).padStart(3, '0')}`;
}

export async function getProjectCodes() {
  const codes = new Map<string, string>();
  for (const category of ['hardware', 'software'] as const) {
    (await getProjects(category)).forEach((p, i) => codes.set(p.id, projectCode(p, i)));
  }
  return codes;
}
