import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

const parseSubtitle = (subtitle: string) => {
  const lines = subtitle
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const [intro = "", ...items] = lines;

  return { intro, items };
};

const HeroSubtitle = ({ text }: { text: string }) => {
  const { intro, items } = parseSubtitle(text);

  if (!intro) return null;

  if (items.length === 0) {
    return <p className="text-lg text-foreground/80 md:text-xl">{intro}</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-foreground/80 md:text-xl">{intro}</p>
      <ul className="space-y-2 text-base text-foreground/80 md:text-lg">
        {items.map((item, index) => (
          <li key={`${index}-${item}`} className="flex gap-3">
            <span className="text-rose" aria-hidden="true">
              –
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-secondary", className)}>
      <div className="container grid items-center gap-8 py-12 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-prune md:text-5xl">
            {title}
          </h1>
          {subtitle ? <HeroSubtitle text={subtitle} /> : null}
          {children && (
            <div className="flex flex-wrap gap-3 pt-2">{children}</div>
          )}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1 ring-border">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
