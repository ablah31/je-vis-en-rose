import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <p className="font-heading text-6xl font-semibold text-rose">404</p>
      <h1 className="text-2xl font-semibold text-prune md:text-3xl">
        Cette page est introuvable
      </h1>
      <p className="max-w-md text-muted-foreground">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenons
        ensemble en terrain connu.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Retour à l&apos;accueil
      </Button>
    </section>
  );
}
