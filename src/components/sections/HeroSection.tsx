import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PageContent } from "@/types/content";

interface HeroSectionProps {
  page: PageContent;
}

export function HeroSection({ page }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary via-cream to-background" />
      <div className="container grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-sm font-medium text-prune">
            <Heart className="size-4 text-rose" aria-hidden="true" />
            Association locale à Colomiers
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-prune md:text-5xl lg:text-6xl">
            {page.heroTitle ?? page.title}
          </h1>
          {page.heroSubtitle && (
            <p className="max-w-xl text-lg text-foreground/80 md:text-xl">
              {page.heroSubtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href={page.ctaUrl ?? "/soutenir"} />}
            >
              {page.ctaLabel ?? "Soutenir l'association"}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {page.ctaSecondaryLabel && (
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href={page.ctaSecondaryUrl ?? "/association"} />}
              >
                {page.ctaSecondaryLabel}
              </Button>
            )}
          </div>
        </div>

        {page.heroImage && (
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-border">
              <Image
                src={page.heroImage}
                alt={page.heroImageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
