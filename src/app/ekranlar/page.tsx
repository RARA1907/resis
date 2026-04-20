import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { EkranlarGaleri } from "@/components/features/ekranlar-galeri";
import { ekranlar } from "@/content/ekranlar";

export const metadata: Metadata = {
  title: "Ekran Görüntüleri | Resis",
  description: `Resis arayüzünden ${ekranlar.total} ekran görüntüsü. Masa planı, adisyon, stok, müşteri kartı, raporlama ekranları tek yerde.`,
};

export default function EkranlarPage() {
  return (
    <>
      <PageHero
        eyebrow="Ekran görüntüleri"
        title="Resis arayüzünü detaylı inceleyin."
        description={`Toplam ${ekranlar.total} ekran — masa planından raporlama panellerine kadar yazılımın her köşesi.`}
      />
      <section className="py-12 md:py-16">
        <Container>
          <EkranlarGaleri ekranlar={ekranlar} />
        </Container>
      </section>
    </>
  );
}
