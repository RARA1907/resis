import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kullanım Kılavuzu | Resis",
  description:
    "Resis 2010 resmi kullanım kılavuzu — ön yüz ve arka yüz PDF dokümanları, video eğitimler ve hızlı başlangıç rehberleri.",
};

const bolumler = [
  {
    baslik: "Ön yüz kılavuzu",
    aciklama:
      "Garson ve kasiyer kullanıcıları için masa planı, adisyon, sipariş alma ve tahsilat süreçleri.",
    badge: "29 sayfa",
    href: "/kullanim/on-yuz",
  },
  {
    baslik: "Arka yüz kılavuzu",
    aciklama:
      "Yönetici kullanıcıları için menü kurulumu, kullanıcı yönetimi, stok, CRM ve raporlama modülleri.",
    badge: "178 sayfa",
    href: "/kullanim/arka-yuz",
  },
];

const hizliLinkler = [
  {
    baslik: "Menü ve ürün tanımlama",
    adim: "Ana menü → Tanımlar → Ürün Kartı",
  },
  {
    baslik: "Yeni kullanıcı açma",
    adim: "Arka yüz → Sistem → Kullanıcı Yönetimi",
  },
  {
    baslik: "Vardiya açma / kapama",
    adim: "Ön yüz → Kasa İşlemleri → Vardiya",
  },
  {
    baslik: "Happy Hour kampanyası",
    adim: "Arka yüz → CRM → Kampanya Tanımlama",
  },
  {
    baslik: "Yedekleme",
    adim: "Arka yüz → Sistem → Yedek Al / Geri Yükle",
  },
  {
    baslik: "Yemek çeki tanımı",
    adim: "Arka yüz → Tanımlar → Ödeme Tipi",
  },
];

export default function KullanimPage() {
  return (
    <>
      <PageHero
        eyebrow="Kullanım"
        title="Resis 2010 resmi kullanım kılavuzu."
        description="Ön yüz (garson/kasiyer) ve arka yüz (yönetici) için resmi dokümantasyon, PDF eğitim dosyaları ve sık kullanılan işlemlerin hızlı rehberi."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {bolumler.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {b.baslik}
                  </h3>
                  <p className="mt-3 text-muted">{b.aciklama}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Kılavuzu görüntüle
                  </span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                    {b.badge}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/40 py-20">
        <Container>
          <div className="mb-10 text-center">
            <div className="section-label">Hızlı rehber</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Sık kullanılan işlemler ve menü yolları
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-3">
            {hizliLinkler.map((h) => (
              <div
                key={h.baslik}
                className="flex items-start justify-between gap-6 rounded-xl border border-border bg-surface p-5"
              >
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {h.baslik}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted">{h.adim}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-border bg-surface p-10 text-center md:p-14">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Download className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
              PDF kılavuzları indirin
            </h3>
            <p className="mt-4 max-w-lg text-muted">
              Mevcut müşteriler için resmi kullanım kılavuzlarının en güncel
              PDF sürümleri destek portalımızdan indirilebilir.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/teklif-iste">Demo talep et</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sss">Sıkça sorulan sorular</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
