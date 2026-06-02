import Image from "next/image";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Partner } from "@/types/content";

export function PartnersSection({ partners }: { partners: Partner[] }) {
  if (!partners.length) return null;

  return (
    <section className="container py-16 md:py-20">
      <SectionHeading
        eyebrow="Partenaires"
        title="Ils nous soutiennent"
        align="center"
      />
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-6">
        {partners.map((partner) => {
          const content = (
            <span className="flex h-24 w-44 items-center justify-center rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <span className="text-center text-sm font-medium text-muted-foreground">
                  {partner.name}
                </span>
              )}
            </span>
          );

          return (
            <li key={`${partner.name}-${partner.order}`}>
              {partner.websiteUrl ? (
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                  className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
