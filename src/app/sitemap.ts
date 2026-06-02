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
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/evenements/${event.slug}`,
    lastModified: new Date(event.startDate),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...eventEntries];
}
