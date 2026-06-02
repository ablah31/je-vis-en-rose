interface LegalPageLayoutProps {
  title: string;
  intro?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="container max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-semibold text-prune md:text-4xl">{title}</h1>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
      <div className="mt-10 space-y-8 text-foreground/85 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-prune [&_p]:mt-2 [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function ToComplete({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-prune">
      {children}
    </span>
  );
}
