import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/actualites/${article.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {article.coverImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
            <Image
              src={article.coverImage}
              alt={article.coverImageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {article.category && (
              <Badge variant="secondary">{article.category}</Badge>
            )}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-prune">
            {article.title}
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
