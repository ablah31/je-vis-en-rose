"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationButton } from "@/components/DonationButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/lib/navigation";

interface MobileNavProps {
  siteName: string;
  helloAssoUrl: string;
  pathname: string;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav({ siteName, helloAssoUrl, pathname }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label="Ouvrir le menu"
          />
        }
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm">
        <SheetHeader>
          <SheetTitle className="font-heading text-prune">
            {siteName}
          </SheetTitle>
        </SheetHeader>
        <nav
          className="flex flex-col gap-1 px-4"
          aria-label="Navigation mobile"
        >
          {MAIN_NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-prune focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active && "bg-secondary text-prune",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto p-4">
          <DonationButton href={helloAssoUrl} className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
