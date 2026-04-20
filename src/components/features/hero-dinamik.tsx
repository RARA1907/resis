"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

type Segment = "restoran" | "fastfood" | "cafe";

const segments: Record<
  Segment,
  { label: string; headline: string; sub: string }
> = {
  restoran: {
    label: "Restoran",
    headline: "Masadan mutfağa kusursuz akış.",
    sub: "Gelişmiş masa planı, adisyon parçalama, çoklu ödeme ve garson performansı tek ekranda.",
  },
  fastfood: {
    label: "Fast-food",
    headline: "Hızlı satış, sıfır kuyruk.",
    sub: "Dokunmatik hız ekranı, Caller ID ile paket servis ve tek tuşla ödeme akışı.",
  },
  cafe: {
    label: "Kafe",
    headline: "Küçük mekân, büyük kontrol.",
    sub: "Menü yönetimi, sadakat kampanyaları ve Happy Hour fiyatlarıyla tekrar kazanım.",
  },
};

export function HeroDinamik() {
  const [active, setActive] = useState<Segment>("restoran");
  const data = segments[active];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(230,57,70,0.35), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="section-label">7/24 AI destek · Türkiye</span>
        </div>

        <motion.h1
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="kinetic mt-6 text-[56px] sm:text-[72px] md:text-[96px]"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          key={`${active}-sub`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {data.sub}
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/teklif-iste">
              Teklif iste
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/ekranlar">
              <Play className="h-4 w-4" />
              Ekranları incele
            </Link>
          </Button>
        </div>

        <div
          role="tablist"
          aria-label="İşletme tipi"
          className="mt-12 inline-flex rounded-full border border-border bg-surface p-1"
        >
          {(Object.keys(segments) as Segment[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-full transition-all",
                active === key
                  ? "bg-primary text-primary-fg shadow-sm"
                  : "text-muted hover:text-foreground",
              )}
            >
              {segments[key].label}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
