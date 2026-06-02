import type { Metadata } from "next";
import { Info, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { getPage, getSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPage("contact"));
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getPage("contact"),
    getSettings(),
  ]);

  const mapsUrl = settings.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.address)}`
    : null;

  return (
    <>
      <PageHero
        title={page.heroTitle ?? page.title}
        subtitle={page.heroSubtitle}
      />

      <section className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-prune">Nos coordonnées</h2>
            <ul className="space-y-4 text-foreground/85">
              {settings.address && (
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-rose" aria-hidden="true" />
                  <span>
                    {settings.address}
                    {mapsUrl && (
                      <>
                        {" — "}
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose underline underline-offset-2 hover:text-prune"
                        >
                          voir sur la carte
                        </a>
                      </>
                    )}
                  </span>
                </li>
              )}
              {settings.email && (
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-rose" aria-hidden="true" />
                  <a
                    href={`mailto:${settings.email}`}
                    className="hover:text-prune"
                  >
                    {settings.email}
                  </a>
                </li>
              )}
              {settings.phone && (
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-rose" aria-hidden="true" />
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    className="hover:text-prune"
                  >
                    {settings.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary p-5 text-sm text-prune">
            <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              Merci de ne pas transmettre d&apos;informations médicales
              sensibles (diagnostic, traitement, dossier patient) via ce
              formulaire. Pour toute question médicale, adressez-vous à un
              professionnel de santé.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-prune">
            Écrivez-nous
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
