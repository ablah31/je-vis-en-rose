import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EventCard } from "@/components/EventCard";
import type { EventItem } from "@/types/content";

export function EventsPreview({ events }: { events: EventItem[] }) {
  return (
    <section className="container py-16 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Agenda" title="Nos prochains événements" />
        <Button
          variant="ghost"
          nativeButton={false}
          className="group self-start md:self-end"
          render={<Link href="/evenements" />}
        >
          Tous les événements
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {events.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-border bg-cream p-8 text-center text-muted-foreground">
          Aucun événement à venir pour l'instant. De nouvelles dates arrivent
          bientôt.
        </p>
      )}
    </section>
  );
}
