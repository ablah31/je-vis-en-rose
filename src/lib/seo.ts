import type { Metadata } from "next";
import type { PageContent } from "@/types/content";
import { SITE_URL } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/images/logo-final-JVR.jpg";
export const SITE_NAME = "Je vis en Rose";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

interface BuildMetadataOptions {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: "fr_FR",
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && type === "article"
        ? { publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export function pageMetadata(
  page: Pick<
    PageContent,
    "title" | "seoTitle" | "seoDescription" | "heroImage"
  >,
  path: string,
): Metadata {
  return buildMetadata({
    title: page.seoTitle ?? page.title,
    description: page.seoDescription,
    path,
    image: page.heroImage ?? DEFAULT_OG_IMAGE,
  });
}
