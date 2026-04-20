import type { Metadata } from "next";
import { Target, Heart, Zap, Shield } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Hakkımızda | Resis",
  description:
    "Resis — Türkiye'nin yerli restoran otomasyon yazılımı. 10+ yıllık sektör deneyimi, 500+ işletme, 7/24 yerli destek ekibi.",
};

const degerler = [
  {
    icon: Target,
    title: "Yerli ve millî",
    text: "Türk restoran sektörünün ihtiyaçlarına özel olarak, Türkiye'de geliştirilmiş yazılım. Yemek çeki, KDV, e-fatura, muhasebe entegrasyonu ilk günden.",
  },
  {
    icon: Zap,
    title: "Hız ve stabilite",
    text: "Windows üzerinde SQL Server ile yüksek performans. Yoğun saatlerde bile yavaşlamaz, internet kesilse de çalışır.",
  },
  {
    icon: Heart,
    title: "İşletmeciye yakın",
    text: "Destek ekibimiz sektörü bilen insanlardan oluşur. Yapay zeka sohbet botu ise 7/24 aktif.",
  },
  {
    icon: Shield,
    title: "Veri güvenliği",
    text: "Verileriniz yerel sunucunuzda, şifrelenmiş yedekler isterseniz bulutta. KVKK uyumlu veri işleme politikası.",
  },
];

export default function HakkindaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Restoran sektörünün yerli otomasyon ortağı."
        description="10+ yıldır Türkiye'nin dört bir yanındaki restoran, kafe ve fast-food işletmelerinin dijital dönüşümüne eşlik ediyoruz."
      />

      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              Resis; masa yönetiminden stok kontrolüne, müşteri sadakatinden
              raporlamaya kadar restoran işletmenizin tüm süreçlerini tek bir
              platformda birleştirmek için tasarlandı. Amacımız her ölçekteki
              yiyecek-içecek işletmesinin operasyonel verimliliğini artırmak ve
              kârlılığını ölçülebilir kılmak.
            </p>
            <p className="text-muted">
              Tek şubeli bir kafeden, çok şubeli franchise zincirine kadar
              500'den fazla işletme Resis ile her gün binlerce siparişi işliyor.
              Yerli bir yazılım olmanın bize kazandırdığı en büyük avantaj;
              Türkiye'deki restoran kültürünü, muhasebe alışkanlıklarını, yasal
              yükümlülükleri ve müşteri davranışlarını yazılımın kalbine
              gömmemiz oldu.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/40 py-20 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <div className="section-label">Değerlerimiz</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              İşimize bu 4 ilke yön veriyor.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {degerler.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="section-label">Misyon</div>
              <p className="mt-4 text-xl font-medium leading-relaxed md:text-2xl">
                Türkiye'deki her restoran, kafe ve fast-food işletmesinin
                dijital olarak yönetilmesine olanak tanımak.
              </p>
            </div>
            <div>
              <div className="section-label">Vizyon</div>
              <p className="mt-4 text-xl font-medium leading-relaxed md:text-2xl">
                Yerli yazılımın global arenada referans olarak gösterilmesini
                sağlamak.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
