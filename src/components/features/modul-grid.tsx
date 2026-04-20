"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Boxes,
  HeartHandshake,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { stagger, fadeUp } from "@/lib/motion";

const moduller = [
  {
    href: "/modul/epos",
    icon: Cpu,
    title: "Yeni Nesil Akıllı EPOS",
    text: "Masa planlama, adisyon parçalama, çoklu ödeme, Caller ID'li paket servis.",
  },
  {
    href: "/modul/stok-maliyet",
    icon: Boxes,
    title: "Stok & Maliyet Kontrolü",
    text: "Reçete bazlı otomatik stok düşümü, fire/sayım, üretim maliyet raporu.",
  },
  {
    href: "/modul/crm-sadakat",
    icon: HeartHandshake,
    title: "Müşteri Sadakati & CRM",
    text: "Happy Hour, toplu e-mail kampanyaları, müşteri kartları ve segmentasyon.",
  },
  {
    href: "/modul/analiz-raporlama",
    icon: LineChart,
    title: "Gelişmiş Analiz & Raporlama",
    text: "Personel/garson performansı, iptal/iade denetimi, günlük tahsilat dökümü.",
  },
];

export function ModulGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">Modüller</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Tek platform, dört güçlü modül.
            </h2>
          </div>
          <p className="max-w-md text-muted">
            İşletmenizin büyüklüğüne ve tipine göre modülleri birlikte veya ayrı
            kullanın — tam entegre, tutarlı veri.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {moduller.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.href} variants={fadeUp}>
                <Link
                  href={m.href}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-muted">{m.text}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    İncele
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
