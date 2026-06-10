import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Actualités",
  description:
    "Suivez les actualités de l'association Je vis en Rose à Colomiers : actions, événements et temps forts.",
  path: "/actualites",
});

export default async function ActualitesPage() {
  const articles = await getArticles();

  return (
    <>
      <PageHero
        title="Actualités"
        subtitle="Les dernières nouvelles, actions et temps forts de l'association."
      />

      <section className="container py-16 md:py-20">
        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-border bg-cream p-10 text-center text-muted-foreground">
            Aucune actualité publiée pour le moment. Revenez bientôt !
          </p>
        )}
      </section>
    </>
  );
}
