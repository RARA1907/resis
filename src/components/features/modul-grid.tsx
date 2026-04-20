"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Boxes, HeartHandshake, LineChart, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { stagger, fadeUp } from "@/lib/motion";

const moduller = [
  {
    href: "/modul/epos",
    icon: Cpu,
    title: "Yeni Nesil Akıllı EPOS",
    text: "Masa planlama, adisyon parçalama, çoklu ödeme, Caller ID'li paket servis.",
    preview: "/ekranlar/arka-yuz/001-arka-yuz.png",
  },
  {
    href: "/modul/stok-maliyet",
    icon: Boxes,
    title: "Stok & Maliyet Kontrolü",
    text: "Reçete bazlı otomatik stok düşümü, fire/sayım, üretim maliyet raporu.",
    preview: "/ekranlar/arka-yuz/002-arka-yuz.png",
  },
  {
    href: "/modul/crm-sadakat",
    icon: HeartHandshake,
    title: "Müşteri Sadakati & CRM",
    text: "Happy Hour, toplu e-mail kampanyaları, müşteri kartları ve segmentasyon.",
    preview: "/ekranlar/arka-yuz/003-arka-yuz.png",
  },
  {
    href: "/modul/analiz-raporlama",
    icon: LineChart,
    title: "Gelişmiş Analiz & Raporlama",
    text: "Personel/garson performansı, iptal/iade denetimi, günlük tahsilat dökümü.",
    preview: "/ekranlar/arka-yuz/004-arka-yuz.png",
  },
];

export function ModulGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-primary">
                Modüller
              </div>
              <h2 className="mt-3 text-3xl md:text-[52px] font-extrabold tracking-[-0.035em] text-foreground">
                Tek platform, dört güçlü modül.
              </h2>
            </div>
            <p className="max-w-md text-muted">
              İşletmenizin büyüklüğüne ve tipine göre modülleri birlikte veya ayrı
              kullanın — tam entegre, tutarlı veri.
            </p>
          </motion.div>

          {/* Module Cards */}
          <motion.div
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {moduller.map((m) => (
              <ModulCard key={m.href} module={m} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ModulCard({
  module: m,
}: {
  module: (typeof moduller)[0];
}) {
  const Icon = m.icon;

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={m.href}
        className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:shadow-lg"
      >
        {/* Hover Preview Image */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
          <Image
            src={m.preview}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
            {m.title}
          </h3>
          <p className="mt-3 text-muted">{m.text}</p>
        </div>

        {/* CTA */}
        <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
          İncele
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Hover Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
        />
      </Link>
    </motion.div>
  );
}
