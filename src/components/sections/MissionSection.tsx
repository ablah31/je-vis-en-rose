import { HandHeart, HeartHandshake, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { PageSection } from "@/types/content";

const ICONS = [HeartHandshake, Megaphone, HandHeart];

export function MissionSection({ items }: { items: PageSection[] }) {
  if (!items.length) return null;

  return (
    <section className="container py-16 md:py-20">
      <SectionHeading
        eyebrow="Nos missions"
        title="Un accompagnement humain et bienveillant"
        description="Nous agissons au quotidien pour ne laisser personne seul face à la maladie."
        align="center"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <Card
              key={item.heading ?? index}
              className="border-border bg-card text-center transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col items-center gap-4 p-8">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-prune">
                  <Icon className="size-7" aria-hidden="true" />
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
    </section>
  );
}
