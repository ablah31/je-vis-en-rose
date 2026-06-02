import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CtaDonation } from "@/components/sections/CtaDonation";
import {
  getArticles,
  getPage,
  getPartners,
  getSettings,
  getTestimonials,
  getUpcomingEvents,
} from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("accueil");
  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription,
  };
}

export default async function HomePage() {
  const [page, settings, articles, events, testimonials, partners] =
    await Promise.all([
      getPage("accueil"),
      getSettings(),
      getArticles(),
      getUpcomingEvents(),
      getTestimonials(),
      getPartners(),
    ]);

  const missions = (page.sections ?? []).filter(
    (s) => s._template === "mission",
  );

  return (
    <>
      <HeroSection page={page} />
      <MissionSection items={missions} />
      <NewsPreview articles={articles.slice(0, 3)} />
      <EventsPreview events={events.slice(0, 3)} />
      <TestimonialsSection testimonials={testimonials} />
      <PartnersSection partners={partners} />
      <CtaDonation helloAssoUrl={settings.helloAssoUrl} />
    </>
  );
}
