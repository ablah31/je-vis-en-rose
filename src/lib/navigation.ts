export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "L'association", href: "/association" },
  { label: "Nos actions", href: "/actions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Événements", href: "/evenements" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Nous soutenir", href: "/soutenir" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_NAV: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];
