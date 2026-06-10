import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { InfoCardGrid } from "@/components/sections/InfoCardGrid";
import { DonationButton } from "@/components/DonationButton";
import { getPage, getSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPage("actions"), "/actions");
}

export default async function ActionsPage() {
  const [page, settings] = await Promise.all([
    getPage("actions"),
    getSettings(),
  ]);

  return (
    <>
      <PageHero
        title={page.heroTitle ?? page.title}
        subtitle={page.heroSubtitle}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
      />

      <section className="container py-16 md:py-20">
        <InfoCardGrid items={page.sections ?? []} />

        <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl bg-secondary p-8 text-center sm:flex-row">
          <p className="text-lg font-medium text-prune">
            Envie de participer ou d&apos;en savoir plus ?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              <Mail className="size-4" aria-hidden="true" />
              Nous contacter
            </Button>
            <DonationButton href={settings.helloAssoUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
