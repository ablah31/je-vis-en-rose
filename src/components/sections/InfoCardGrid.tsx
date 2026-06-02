import {
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
        return (
          <Card
            key={item.heading ?? index}
            className="h-full border-border bg-card transition-shadow hover:shadow-md"
          >
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-prune">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-prune">
                {item.heading}
              </h3>
              <p className="text-muted-foreground">{item.body}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
