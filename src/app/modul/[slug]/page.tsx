import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getModulBySlug, moduller } from "@/content/moduller";

export function generateStaticParams() {
  return moduller.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const modul = getModulBySlug(slug);
  if (!modul) return { title: "Modül bulunamadı" };
  return {
    title: `${modul.title} | Resis`,
    description: modul.summary,
  };
}

export default async function ModulDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const modul = getModulBySlug(slug);
  if (!modul) notFound();

  const Icon = modul.icon;
  const digerler = moduller.filter((m) => m.slug !== slug);

  return (
    <>
      <PageHero eyebrow={modul.eyebrow} title={modul.title} description={modul.summary} />

      <section className="py-20 md:py-24">
        <Container>
          <div className="mb-12 flex items-center gap-4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <Badge variant="outline">{modul.subtitle}</Badge>
            </div>
          </div>

          <div className="mb-12 grid gap-3 md:grid-cols-2 md:gap-4">
            {modul.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
              >
                <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="text-sm text-foreground md:text-base">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="section-label">Özellikler</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {modul.title.replace(/^[A-Za-zÇĞİÖŞÜçğıöşü ]+ /, "")} içinde neler var?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modul.features.map((f) => {
              const FIcon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-2 text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <FIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/40 py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center md:p-14">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Bu modül işletmenize uygun mu?
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              2 dakikada teklif formunu doldurun — 24 saat içinde işletmenize özel
              entegrasyon ve fiyat teklifini gönderelim.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/teklif-iste">
                  Ücretsiz teklif iste
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ekranlar">Ekran görüntüleri</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10">
            <div className="section-label">Diğer modüller</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Resis ekosisteminin geri kalanını keşfedin
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {digerler.map((m) => {
              const DIcon = m.icon;
              return (
                <Link
                  key={m.slug}
                  href={`/modul/${m.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <DIcon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-lg font-semibold tracking-tight">
                    {m.title}
                  </div>
                  <p className="mt-2 text-sm text-muted">{m.subtitle}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    İncele
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
