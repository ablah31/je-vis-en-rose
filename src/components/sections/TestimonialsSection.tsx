import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Testimonial } from "@/types/content";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection({
  testimonials,
  withHeading = true,
}: {
  testimonials: Testimonial[];
  withHeading?: boolean;
}) {
  if (!testimonials.length) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-cream p-8 text-center text-muted-foreground">
        Les témoignages seront bientôt disponibles.
      </p>
    );
  }

  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container">
        {withHeading && (
          <SectionHeading
            eyebrow="Témoignages"
            title="Des mots qui font du bien"
            description="Paroles partagées et validées par les personnes accompagnées et nos bénévoles."
            align="center"
          />
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={`${t.name}-${t.order}`} className="border-border bg-card">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <Quote className="size-8 text-rose" aria-hidden="true" />
                <blockquote className="flex-1 text-foreground/90">
                  « {t.quote} »
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar>
                    {t.image ? <AvatarImage src={t.image} alt="" /> : null}
                    <AvatarFallback className="bg-secondary text-prune">
                      {initials(t.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    {t.role && (
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
