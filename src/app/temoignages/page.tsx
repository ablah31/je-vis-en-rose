import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaDonation } from "@/components/sections/CtaDonation";
import { getSettings, getTestimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Témoignages",
  description:
    "Des témoignages publics et validés par l'association Je vis en Rose, dans le respect et la confidentialité des personnes.",
  path: "/temoignages",
});

export default async function TemoignagesPage() {
  const [testimonials, settings] = await Promise.all([
    getTestimonials(),
    getSettings(),
  ]);

  return (
    <>
      <PageHero
        title="Témoignages"
        subtitle="Des paroles partagées et validées par l'association, avec respect et bienveillance."
      />

      <div className="py-4">
        <TestimonialsSection testimonials={testimonials} withHeading={false} />
      </div>

      <CtaDonation helloAssoUrl={settings.helloAssoUrl} />
    </>
  );
}
