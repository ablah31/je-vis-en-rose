import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format";
import type { EventItem } from "@/types/content";

export function EventCard({ event }: { event: EventItem }) {
  const past = event.isPastEvent;
  return (
    <Link
      href={`/evenements/${event.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {event.coverImage && (
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
            <Image
              src={event.coverImage}
              alt={event.coverImageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {past && (
              <div className="absolute left-3 top-3">
                <Badge variant="outline" className="bg-background/90">
                  Passé
                </Badge>
              </div>
            )}
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-prune">
            {event.title}
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0 text-rose" aria-hidden="true" />
              <time dateTime={event.startDate}>{formatDate(event.startDate)}</time>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-rose" aria-hidden="true" />
              <span>{event.location}</span>
            </li>
          </ul>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {event.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
