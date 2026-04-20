import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function CtaAlt() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(230,57,70,0.15), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(255,213,0,0.1), transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-10 text-center shadow-md md:p-16">
          <div className="section-label">Hemen başlayın</div>
          <h2 className="kinetic mt-4 text-4xl md:text-6xl">
            Resis'i işletmenize göre kurgulayalım.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted md:text-lg">
            2 dakikada formu doldurun, uzman ekibimiz size özel teklifle 24 saat
            içinde dönsün.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/teklif-iste">
                Teklif iste
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sss">Sıkça sorulan sorular</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
