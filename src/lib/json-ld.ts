import type { Article, EventItem, SiteSettings } from "@/types/content";
import { absoluteUrl } from "@/lib/seo";

export function organizationSchema(settings: SiteSettings) {
  const sameAs = [
    settings.facebookUrl,
    settings.instagramUrl,
    settings.youtubeUrl,
    settings.linkedinUrl,
  ].filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: settings.siteName,
    url: absoluteUrl("/"),
    logo: settings.logo ? absoluteUrl(settings.logo) : undefined,
    description: settings.siteDescription,
    email: settings.email,
    telephone: settings.phone,
    address: settings.address
      ? {
          "@type": "PostalAddress",
          streetAddress: settings.address,
          addressLocality: "Colomiers",
          postalCode: "31770",
          addressCountry: "FR",
        }
      : undefined,
    areaServed: [
      { "@type": "City", name: "Colomiers" },
      { "@type": "City", name: "Toulouse" },
      { "@type": "AdministrativeArea", name: "Haute-Garonne" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: article.coverImage
      ? absoluteUrl(article.coverImage)
      : undefined,
    author: article.author
      ? { "@type": "Person", name: article.author }
      : { "@type": "Organization", name: "Je vis en Rose" },
    publisher: {
      "@type": "Organization",
      name: "Je vis en Rose",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo-final-JVR.jpg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/actualites/${article.slug}`),
  };
}

export function eventSchema(event: EventItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    startDate: event.startDate,
    endDate: event.endDate,
    image: event.coverImage ? absoluteUrl(event.coverImage) : undefined,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: event.isPastEvent
      ? "https://schema.org/EventScheduled"
      : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: event.address ?? event.location,
    },
    organizer: {
      "@type": "NGO",
      name: "Je vis en Rose",
      url: absoluteUrl("/"),
    },
    url: absoluteUrl(`/evenements/${event.slug}`),
  };
}
