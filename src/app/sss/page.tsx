import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSections } from "@/components/features/faq-sections";
import { faqList } from "@/content/sss";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Resis",
  description:
    "Resis restoran otomasyonu hakkında sık sorulan 50 soru ve cevabı — EPOS, stok, CRM, raporlama, kurulum ve teknik detaylar.",
};

export default function SssPage() {
  return (
    <>
      <PageHero
        eyebrow="Sıkça Sorulan Sorular"
        title="Sorularınızı kategoriler halinde yanıtladık."
        description={`Toplam ${faqList.length}+ konuyu inceleyin. Aradığınızı bulamadıysanız 7/24 yapay zeka destek botu sağ alt köşede hazır.`}
      />
      <section className="py-16 md:py-20">
        <Container>
          <FaqSections faqs={faqList} />
        </Container>
      </section>
    </>
  );
}
