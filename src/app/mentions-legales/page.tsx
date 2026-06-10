import type { Metadata } from "next";
import {
  LegalPageLayout,
  ToComplete,
} from "@/components/sections/LegalPageLayout";
import { getSettings } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site de l'association Je vis en Rose à Colomiers.",
  path: "/mentions-legales",
});

export default async function MentionsLegalesPage() {
  const settings = await getSettings();

  return (
    <LegalPageLayout
      title="Mentions légales"
      intro="Les informations ci-dessous sont à compléter par l'association avant la mise en ligne."
    >
      <div>
        <h2>Éditeur du site</h2>
        <p>
          {settings.siteName} — association loi 1901.
          <br />
          Adresse : {settings.address || <ToComplete>à compléter</ToComplete>}.
          <br />
          Numéro RNA / SIRET : <ToComplete>à compléter</ToComplete>.
          <br />
          Email : {settings.email || <ToComplete>à compléter</ToComplete>}.
        </p>
      </div>

      <div>
        <h2>Responsable de la publication</h2>
        <p>
          <ToComplete>Nom du responsable de la publication à compléter</ToComplete>.
        </p>
      </div>

      <div>
        <h2>Hébergeur</h2>
        <p>
          <ToComplete>
            Nom et adresse de l&apos;hébergeur à compléter (par exemple Vercel
            Inc. ou Netlify Inc.)
          </ToComplete>
          .
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          logos) est, sauf mention contraire, la propriété de l&apos;association
          ou utilisé avec autorisation. Toute reproduction sans accord préalable
          est interdite.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Pour toute question relative au site, vous pouvez nous écrire à
          l&apos;adresse{" "}
          {settings.email ? (
            <a
              href={`mailto:${settings.email}`}
              className="text-rose underline underline-offset-2 hover:text-prune"
            >
              {settings.email}
            </a>
          ) : (
            <ToComplete>à compléter</ToComplete>
          )}
          .
        </p>
      </div>
    </LegalPageLayout>
  );
}
