import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSettings } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const fontHeading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Je vis en Rose — Association de soutien autour du cancer à Colomiers",
    template: "%s — Je vis en Rose",
  },
  description:
    "Je vis en Rose accompagne, sensibilise et soutient les personnes concernées par le cancer à Colomiers et dans la région toulousaine.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Je vis en Rose",
    images: ["/images/og-image.svg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html
      lang="fr"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-prune focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header
          siteName={settings.siteName}
          logo={settings.logo}
          helloAssoUrl={settings.helloAssoUrl}
        />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
