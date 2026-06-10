import type { Metadata } from "next";
import {
  LegalPageLayout,
  ToComplete,
} from "@/components/sections/LegalPageLayout";
import { getSettings } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site de l'association Je vis en Rose : traitement des données du formulaire de contact.",
  path: "/politique-confidentialite",
});

export default async function PolitiqueConfidentialitePage() {
  const settings = await getSettings();

  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      intro="Nous attachons une grande importance au respect de votre vie privée et à la protection de vos données."
    >
      <div>
        <h2>Données collectées via le formulaire de contact</h2>
        <p>
          Le formulaire de contact recueille uniquement votre nom, votre adresse
          email, l&apos;objet et le contenu de votre message. Ces informations
          servent exclusivement à traiter votre demande et à vous répondre.
        </p>
      </div>

      <div>
        <h2>Aucune donnée médicale sensible</h2>
        <p>
          Ce site ne collecte ni ne conserve de données de santé. Nous vous
          invitons à ne jamais transmettre d&apos;informations médicales
          sensibles (diagnostic, traitement, dossier patient) via le formulaire
          de contact.
        </p>
      </div>

      <div>
        <h2>Conservation des données</h2>
        <p>
          Les messages envoyés via le formulaire sont transmis par email à
          l&apos;association et ne sont pas stockés dans une base de données sur
          ce site. La durée de conservation des emails reçus est limitée au
          temps nécessaire au traitement de votre demande.
        </p>
      </div>

      <div>
        <h2>Outils tiers</h2>
        <p>
          Le site est hébergé chez{" "}
          <ToComplete>hébergeur à compléter</ToComplete> et l&apos;envoi des
          emails de contact peut s&apos;appuyer sur un service tiers
          (Resend). Les dons sont gérés de manière externe et sécurisée par
          HelloAsso. Aucun paiement n&apos;est traité directement sur ce site.
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données. Pour exercer ces
          droits, contactez-nous à l&apos;adresse{" "}
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
