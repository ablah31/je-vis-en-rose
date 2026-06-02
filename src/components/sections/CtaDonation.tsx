import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaDonationProps {
  helloAssoUrl: string;
  title?: string;
  message?: string;
  label?: string;
}

export function CtaDonation({
  helloAssoUrl,
  title = "Votre don a un impact réel et local",
  message = "Chaque contribution finance des soins de support pour les personnes touchées par le cancer et soutient la recherche médicale. Le paiement est géré en toute sécurité par HelloAsso.",
  label = "Faire un don sur HelloAsso",
}: CtaDonationProps) {
  return (
    <section className="container py-16 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-prune px-6 py-12 text-center text-white md:px-12 md:py-16">
        <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-rose/30" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 size-40 rounded-full bg-rose/20" />
        <div className="relative mx-auto max-w-2xl space-y-5">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/15">
            <Heart className="size-7" aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-white/85">{message}</p>
          <div className="pt-2">
            <Button
              size="lg"
              nativeButton={false}
              className="bg-white text-prune hover:bg-white/90"
              render={
                <a href={helloAssoUrl} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Heart className="size-4" aria-hidden="true" />
              {label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
