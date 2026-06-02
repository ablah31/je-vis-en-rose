"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/lib/navigation";
import { MobileNav } from "@/components/layout/MobileNav";
import { DonationButton } from "@/components/DonationButton";

interface HeaderProps {
  siteName: string;
  logo?: string;
  helloAssoUrl: string;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ siteName, logo, helloAssoUrl }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`${siteName} — retour à l'accueil`}
        >
          {logo ? (
            <Image
              src={logo}
              alt=""
              width={160}
              height={40}
              className="h-9 w-auto md:h-10"
              priority
            />
          ) : (
            <span className="font-heading text-xl font-semibold text-prune">
              {siteName}
            </span>
          )}
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {MAIN_NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-prune focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active && "bg-secondary text-prune",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <DonationButton
            href={helloAssoUrl}
            className="hidden sm:inline-flex"
          />
          <MobileNav
            siteName={siteName}
            helloAssoUrl={helloAssoUrl}
            pathname={pathname}
          />
        </div>
      </div>
    </header>
  );
}
