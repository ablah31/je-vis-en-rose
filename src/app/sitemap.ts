import type { MetadataRoute } from "next";
import { getArticles, getEvents } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const STATIC_PATHS = [
  "",
  "/association",
  "/actions",
  "/actualites",
  "/evenements",
  "/temoignages",
  "/soutenir",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

// CMS entries may have a missing or malformed date; omit lastModified rather
// than letting an invalid Date crash sitemap generation.
function toValidDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, events] = await Promise.all([getArticles(), getEvents()]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/actualites/${article.slug}`,
    lastModified: toValidDate(article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/evenements/${event.slug}`,
    lastModified: toValidDate(event.startDate),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...eventEntries];
}
