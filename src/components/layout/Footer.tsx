import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/social";
import { DonationButton } from "@/components/DonationButton";
import { LEGAL_NAV, MAIN_NAV } from "@/lib/navigation";
import type { SiteSettings } from "@/types/content";

interface FooterProps {
  settings: SiteSettings;
}

export function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear();
  const socials = [
    { url: settings.facebookUrl, label: "Facebook", Icon: FacebookIcon },
    { url: settings.instagramUrl, label: "Instagram", Icon: InstagramIcon },
    { url: settings.youtubeUrl, label: "YouTube", Icon: YoutubeIcon },
    { url: settings.linkedinUrl, label: "LinkedIn", Icon: LinkedinIcon },
  ].filter((s) => s.url);

  return (
    <footer className="mt-auto border-t border-border bg-cream">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold text-prune">
            {settings.siteName}
          </p>
          <p className="text-sm text-muted-foreground">
            {settings.siteDescription}
          </p>
          {socials.length > 0 && (
            <ul className="flex gap-2 pt-1">
              {socials.map(({ url, label, Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border text-prune transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Liens rapides" className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Navigation</p>
          <ul className="space-y-2">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-prune"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {settings.address && (
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                <span>{settings.address}</span>
              </li>
            )}
            {settings.email && (
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                <a
                  href={`mailto:${settings.email}`}
                  className="transition-colors hover:text-prune"
                >
                  {settings.email}
                </a>
              </li>
            )}
            {settings.phone && (
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden="true" />
                <a
                  href={`tel:${settings.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-prune"
                >
                  {settings.phone}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Soutenir</p>
          <p className="text-sm text-muted-foreground">
            Votre générosité permet de poursuivre nos actions près de chez vous.
          </p>
          <DonationButton
            href={settings.helloAssoUrl}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {settings.siteName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-prune"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
