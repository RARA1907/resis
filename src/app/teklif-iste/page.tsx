import type { Metadata } from "next";
import { Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { TeklifForm } from "@/components/features/teklif-form";

export const metadata: Metadata = {
  title: "Teklif İste | Resis",
  description:
    "İşletmenize özel 24 saat içinde fiyat teklifi alın. Ücretsiz danışmanlık + demo kurulum.",
};

export default function TeklifIstePage() {
  return (
    <>
      <PageHero
        eyebrow="Teklif iste"
        title="2 dakikada formu doldurun, 24 saat içinde size özel teklif gelsin."
        description="Tek formla ihtiyaç analizi + modül önerisi + fiyat teklifi. Demo kurulum tamamen ücretsiz."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="rounded-3xl border border-border bg-surface p-6 md:p-10">
              <TeklifForm />
            </div>
            <aside className="space-y-4">
              <SideCard
                icon={Clock}
                title="24 saat içinde dönüş"
                text="Başvurunuza hafta içi mesai saatlerinde 24 saatten kısa sürede yanıt veriyoruz."
              />
              <SideCard
                icon={ShieldCheck}
                title="Ücretsiz danışmanlık"
                text="İşletmenize en uygun modül ve donanımı birlikte belirleriz. Satın alma zorunluluğu yoktur."
              />
              <SideCard
                icon={MessageCircle}
                title="7/24 AI destek"
                text="Formu doldurmadan önce merak ettiklerinizi sağ alttaki sohbet botuna sorun — anında cevap."
              />
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function SideCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Clock;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
