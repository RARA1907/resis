import { Container } from "@/components/shared/container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, description, align = "left" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-2/40 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(230,57,70,0.08), transparent 55%)",
        }}
      />
      <Container className="relative">
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow && <div className="section-label">{eyebrow}</div>}
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-muted md:text-lg">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
