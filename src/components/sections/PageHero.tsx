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
          {subtitle && (
            <p className="text-lg text-foreground/80 md:text-xl">{subtitle}</p>
          )}
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
