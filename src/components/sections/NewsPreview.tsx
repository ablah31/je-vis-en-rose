import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/types/content";

export function NewsPreview({ articles }: { articles: Article[] }) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Actualités"
            title="Les dernières nouvelles"
          />
          <Button
            variant="ghost"
            nativeButton={false}
            className="group self-start md:self-end"
            render={<Link href="/actualites" />}
          >
            Toutes les actualités
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {articles.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-background p-8 text-center text-muted-foreground">
            Aucune actualité pour le moment. Revenez bientôt !
          </p>
        )}
      </div>
    </section>
  );
}
