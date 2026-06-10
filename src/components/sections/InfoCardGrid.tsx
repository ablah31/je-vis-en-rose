import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  HandHeart,
  HeartHandshake,
  Megaphone,
  Share2,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { PageSection } from "@/types/content";

const ICON_BY_KEYWORD: { match: RegExp; Icon: LucideIcon }[] = [
  { match: /accompagn/i, Icon: HeartHandshake },
  { match: /sensibilis/i, Icon: Megaphone },
  { match: /[ée]v[ée]nement/i, Icon: Calendar },
  { match: /atelier/i, Icon: Sparkles },
  { match: /b[ée]n[ée]vol/i, Icon: Users },
  { match: /partenaire/i, Icon: HandHeart },
  { match: /relayer|partag/i, Icon: Share2 },
  { match: /don/i, Icon: HandHeart },
  { match: /soutien|soutenir/i, Icon: HeartHandshake },
];

function pickIcon(heading?: string): LucideIcon {
  if (!heading) return Sparkles;
  return ICON_BY_KEYWORD.find((e) => e.match.test(heading))?.Icon ?? Sparkles;
}

function CardBody({ item, Icon }: { item: PageSection; Icon: LucideIcon }) {
  const hasLink = Boolean(item.linkUrl);
  return (
    <CardContent className="flex h-full flex-col gap-4 p-6">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-prune">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-xl font-semibold text-prune">
        {item.heading}
        {hasLink ? (
          <ArrowUpRight
            className="ml-1 inline-block size-4 align-super text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        ) : null}
      </h3>
      <p className="text-muted-foreground">{item.body}</p>
    </CardContent>
  );
}

export function InfoCardGrid({
  items,
  columns = 3,
}: {
  items: PageSection[];
  columns?: 2 | 3;
}) {
  if (!items.length) return null;

  return (
    <div
      className={
        columns === 2
          ? "grid gap-6 sm:grid-cols-2"
          : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {items.map((item, index) => {
        const Icon = pickIcon(item.heading);
        const key = item.heading ?? index;
        const cardClassName =
          "h-full border-border bg-card transition-shadow hover:shadow-md";

        if (!item.linkUrl) {
          return (
            <Card key={key} className={cardClassName}>
              <CardBody item={item} Icon={Icon} />
            </Card>
          );
        }

        const isExternal = /^https?:\/\//.test(item.linkUrl);
        const linkClassName = "group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring";
        const linkedCard = (
          <Card className={`${cardClassName} group-hover:border-accent`}>
            <CardBody item={item} Icon={Icon} />
          </Card>
        );

        return isExternal ? (
          <a
            key={key}
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={`${item.heading ?? "En savoir plus"} (nouvel onglet)`}
          >
            {linkedCard}
          </a>
        ) : (
          <Link key={key} href={item.linkUrl} className={linkClassName}>
            {linkedCard}
          </Link>
        );
      })}
    </div>
  );
}
