import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { referanslar } from "@/content/referanslar";

export function ReferansGrid() {
  const goster = referanslar.slice(0, 12);
  return (
    <section className="border-y border-border bg-surface-2/40 py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">Referanslar</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Türkiye'nin dört bir yanında 500+ işletme Resis ile çalışıyor.
            </h2>
          </div>
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Tüm referanslar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
          {goster.map((r) => (
            <div
              key={r.ad}
              title={`${r.ad} — ${r.sube} şube, ${r.sehir}`}
              className="flex h-24 items-center justify-center rounded-xl border border-border bg-surface p-4 grayscale transition-all hover:grayscale-0 hover:border-primary/30"
            >
              <div className="relative h-full w-full">
                <Image
                  src={r.logo}
                  alt={`${r.ad} logosu`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
