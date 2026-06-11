import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";
import type {
  Article,
  EventItem,
  PageContent,
  Partner,
  SiteSettings,
  Testimonial,
} from "@/types/content";
import { normalizeSlug } from "@/lib/slug";

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readJson<T>(relativePath: string): Promise<T> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, relativePath), "utf8");
  return JSON.parse(raw) as T;
}

async function readDir(relativePath: string): Promise<string[]> {
  try {
    return await fs.readdir(path.join(CONTENT_DIR, relativePath));
  } catch {
    return [];
  }
}

export const getSettings = cache(async (): Promise<SiteSettings> => {
  return readJson<SiteSettings>("settings/site.json");
});

export const getPage = cache(async (name: string): Promise<PageContent> => {
  return readJson<PageContent>(`pages/${name}.json`);
});

export const getArticles = cache(async (): Promise<Article[]> => {
  const files = (await readDir("actualites")).filter((f) => f.endsWith(".md"));
  const articles = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(
        path.join(CONTENT_DIR, "actualites", file),
        "utf8",
      );
      const { data, content } = matter(raw);
      const rawSlug =
        (data.slug as string) || file.replace(/\.md$/, "");
      return {
        ...(data as Omit<Article, "body">),
        slug: normalizeSlug(rawSlug),
        body: content.trim(),
      } as Article;
    }),
  );
  return articles.toSorted(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
});

export const getArticle = cache(
  async (slug: string): Promise<Article | null> => {
    const articles = await getArticles();
    const normalized = normalizeSlug(slug);
    return articles.find((a) => a.slug === normalized) ?? null;
  },
);

export const getEvents = cache(async (): Promise<EventItem[]> => {
  const files = (await readDir("evenements")).filter((f) => f.endsWith(".md"));
  const events = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(
        path.join(CONTENT_DIR, "evenements", file),
        "utf8",
      );
      const { data, content } = matter(raw);
      const rawSlug =
        (data.slug as string) || file.replace(/\.md$/, "");
      return {
        ...(data as Omit<EventItem, "body">),
        slug: normalizeSlug(rawSlug),
        body: content.trim(),
      } as EventItem;
    }),
  );
  return events.toSorted(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );
});

export const getEvent = cache(
  async (slug: string): Promise<EventItem | null> => {
    const events = await getEvents();
    const normalized = normalizeSlug(slug);
    return events.find((e) => e.slug === normalized) ?? null;
  },
);

function isUpcoming(event: EventItem): boolean {
  if (event.isPastEvent) return false;
  return new Date(event.startDate).getTime() >= Date.now();
}

export const getUpcomingEvents = cache(async (): Promise<EventItem[]> => {
  const events = await getEvents();
  return events
    .filter(isUpcoming)
    .toSorted(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );
});

export const getPastEvents = cache(async (): Promise<EventItem[]> => {
  const events = await getEvents();
  return events.filter((e) => !isUpcoming(e));
});

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const files = (await readDir("temoignages")).filter((f) =>
    f.endsWith(".json"),
  );
  const items = await Promise.all(
    files.map((file) => readJson<Testimonial>(`temoignages/${file}`)),
  );
  return items
    .filter((t) => t.published)
    .toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0));
});

export const getPartners = cache(async (): Promise<Partner[]> => {
  const files = (await readDir("partenaires")).filter((f) =>
    f.endsWith(".json"),
  );
  const items = await Promise.all(
    files.map((file) => readJson<Partner>(`partenaires/${file}`)),
  );
  return items
    .filter((p) => p.published)
    .toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0));
});
