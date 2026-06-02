import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/Markdown";
import { BackLink } from "@/components/BackLink";
import { getArticle, getArticles } from "@/lib/content";
import { formatDate } from "@/lib/format";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    openGraph: {
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <article className="container max-w-3xl py-12 md:py-16">
      <BackLink href="/actualites" label="Toutes les actualités" />

      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {article.category && (
            <Badge variant="secondary">{article.category}</Badge>
          )}
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {article.author && <span>· {article.author}</span>}
        </div>
        <h1 className="text-3xl font-semibold text-prune md:text-4xl">
          {article.title}
        </h1>
        {article.excerpt && (
          <p className="text-lg text-muted-foreground">{article.excerpt}</p>
        )}
      </header>

      {article.coverImage && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-border">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt ?? ""}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-10">
        <Markdown content={article.body} />
      </div>
    </article>
  );
}
