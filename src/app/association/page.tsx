import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaDonation } from "@/components/sections/CtaDonation";
import { getPage, getSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPage("association"));
}

export default async function AssociationPage() {
  const [page, settings] = await Promise.all([
    getPage("association"),
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
        <div className="mx-auto max-w-3xl space-y-12">
          {(page.sections ?? []).map((section, index) => (
            <article key={section.heading ?? index} className="space-y-3">
              {section.heading && (
                <h2 className="text-2xl font-semibold text-prune md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p className="text-lg leading-relaxed text-foreground/85">
                  {section.body}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <CtaDonation helloAssoUrl={settings.helloAssoUrl} />
    </>
  );
}
