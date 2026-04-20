import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { blogYazilari } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Resis",
  description:
    "Restoran otomasyonu, işletmecilik, stok yönetimi ve CRM stratejileri üzerine Resis blog yazıları.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Restoran işletmeciliğine dair rehberler, vaka analizleri ve ipuçları."
        description="Operasyondan pazarlamaya, stok yönetiminden müşteri sadakatine kadar sektörden içerikler."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogYazilari.map((y) => (
              <Link
                key={y.slug}
                href={`/blog/${y.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <Badge variant="outline" className="w-fit">
                  {y.kategori}
                </Badge>
                <h3 className="mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {y.baslik}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {y.ozet}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(y.tarih).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {y.okumaSuresi}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
