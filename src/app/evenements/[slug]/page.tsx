import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/Markdown";
import { BackLink } from "@/components/BackLink";
import { JsonLd } from "@/components/JsonLd";
import { getEvent, getEvents } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { breadcrumbSchema, eventSchema } from "@/lib/json-ld";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return {};
  return buildMetadata({
    title: event.seoTitle ?? event.title,
    description: event.seoDescription ?? event.excerpt,
    path: `/evenements/${event.slug}`,
    image: event.coverImage ?? DEFAULT_OG_IMAGE,
    type: "article",
    publishedTime: event.startDate,
  });
}

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) notFound();

  return (
    <article className="container max-w-3xl py-12 md:py-16">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Événements", path: "/evenements" },
            { name: event.title, path: `/evenements/${event.slug}` },
          ]),
          eventSchema(event),
        ]}
      />
      <BackLink href="/evenements" label="Tous les événements" />

      <header className="mt-6 space-y-4">
        {event.isPastEvent && <Badge variant="outline">Événement passé</Badge>}
        <h1 className="text-3xl font-semibold text-prune md:text-4xl">
          {event.title}
        </h1>
        <ul className="flex flex-col gap-2 text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-5 shrink-0 text-rose" aria-hidden="true" />
            <time dateTime={event.startDate}>
              {formatDateTime(event.startDate)}
            </time>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-5 shrink-0 text-rose" aria-hidden="true" />
            <span>
              {event.location}
              {event.address ? ` — ${event.address}` : ""}
            </span>
          </li>
        </ul>
      </header>

      {event.coverImage && (
        <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-border">
          <Image
            src={event.coverImage}
            alt={event.coverImageAlt ?? ""}
            width={0}
            height={0}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full"
          />
        </div>
      )}

      <div className="mt-10">
        <Markdown content={event.body} />
      </div>

      {event.registrationUrl && !event.isPastEvent && (
        <div className="mt-10">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            S&apos;inscrire à l&apos;événement
            <ExternalLink className="size-4" aria-hidden="true" />
          </Button>
        </div>
      )}
    </article>
  );
}
