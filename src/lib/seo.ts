import type { Metadata } from "next";
import type { PageContent } from "@/types/content";

export function pageMetadata(page: Pick<PageContent, "title" | "seoTitle" | "seoDescription">): Metadata {
  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle ?? page.title,
      description: page.seoDescription,
    },
  };
}
