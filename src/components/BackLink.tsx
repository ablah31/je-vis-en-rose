import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-prune transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
    >
      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}
