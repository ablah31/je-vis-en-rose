import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EventCard } from "@/components/EventCard";
import { Separator } from "@/components/ui/separator";
import { getPastEvents, getUpcomingEvents } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Événements",
  description:
    "Découvrez les événements à venir et passés de l'association Je vis en Rose à Colomiers.",
  path: "/evenements",
});

export default async function EvenementsPage() {
  const [upcoming, past] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <>
      <PageHero
        title="Événements"
        subtitle="Rencontres, marches solidaires et temps de partage tout au long de l'année."
      />

      <section className="container py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-prune md:text-3xl">
          À venir
        </h2>
        {upcoming.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-border bg-cream p-8 text-center text-muted-foreground">
            Aucun événement à venir pour l&apos;instant. De nouvelles dates
            arrivent bientôt.
          </p>
        )}

        {past.length > 0 && (
          <>
            <Separator className="my-14" />
            <h2 className="text-2xl font-semibold text-prune md:text-3xl">
              Événements passés
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
