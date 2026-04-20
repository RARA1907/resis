import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { referanslar } from "@/content/referanslar";

export const metadata: Metadata = {
  title: "Referanslar | Resis",
  description:
    "Resis restoran otomasyonunu tercih eden restoran, kafe, fast-food ve zincir işletmeler — 500+ aktif kullanıcı.",
};

export default function ReferanslarPage() {
  const toplamSube = referanslar.reduce((acc, r) => acc + r.sube, 0);

  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Türkiye'nin dört bir yanında Resis ile çalışan işletmeler."
        description={`${referanslar.length} görünür marka, ${toplamSube}+ şube — fast-food, restoran, kafe ve daha fazlası. Toplam 500+ işletme Resis ile her gün binlerce siparişi yönetiyor.`}
      />

      <section className="border-b border-border bg-surface-2/40 py-12">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat value="500+" label="Aktif işletme" />
            <Stat value="1000+" label="Şube" />
            <Stat value="80+" label="Şehir" />
            <Stat value="20+" label="Yıl tecrübe" />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {referanslar.map((r) => (
              <div
                key={r.ad}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-surface-2 p-2">
                    <Image
                      src={r.logo}
                      alt={`${r.ad} logosu`}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>
                  <Badge variant="outline">{r.sektor}</Badge>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {r.ad}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5" /> {r.sube} şube
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {r.sehir}
                  </span>
                </div>
                {r.notu && (
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                    {r.notu}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/40 py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center md:p-14">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Siz de bu listeye katılın.
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              İşletmeniz için ücretsiz danışmanlık ve demo kurulum — 24 saat
              içinde size özel teklif hazırlıyoruz.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/teklif-iste">
                Teklif iste
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-mono text-3xl font-bold tracking-tight tabular-nums md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
