import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { InfoCardGrid } from "@/components/sections/InfoCardGrid";
import { DonationButton } from "@/components/DonationButton";
import { getPage, getSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import type { PageSection } from "@/types/content";

const MEMBERSHIP_SUBJECT = "Demande d'adhésion à Je vis en Rose";

const MEMBERSHIP_BODY = `Bonjour,

Je souhaite devenir adhérent de l'association Je vis en Rose.

Nom :
Prénom :
Téléphone :
Ville :

Merci de m'indiquer les modalités d'adhésion.

Cordialement,`;

const buildMembershipMailto = (email: string) => {
  const subject = encodeURIComponent(MEMBERSHIP_SUBJECT);
  const body = encodeURIComponent(MEMBERSHIP_BODY);
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const withMembershipMailto = (
  sections: PageSection[],
  email: string,
): PageSection[] =>
  sections.map((section) => {
    if (section.heading !== "Devenir adhérent") return section;
    return {
      ...section,
      linkUrl: buildMembershipMailto(email),
    };
  });

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPage("soutenir"), "/soutenir");
}

export default async function SoutenirPage() {
  const [page, settings] = await Promise.all([
    getPage("soutenir"),
    getSettings(),
  ]);

  const sections = withMembershipMailto(page.sections ?? [], settings.email);

  return (
    <>
      <PageHero
        title={page.heroTitle ?? page.title}
        subtitle={page.heroSubtitle}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
      >
        <DonationButton href={settings.helloAssoUrl} size="lg" />
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/contact" />}
        >
          <Mail className="size-4" aria-hidden="true" />
          Nous contacter
        </Button>
      </PageHero>

      <section className="container py-16 md:py-20">
        <InfoCardGrid items={sections} columns={2} />

        <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0 text-rose" aria-hidden="true" />
          Le paiement des dons est géré en toute sécurité par HelloAsso. Aucun
          paiement n&apos;est traité directement sur ce site.
        </p>
      </section>
    </>
  );
}
