"use client";

import { Container } from "@/components/shared/container";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Printer, Cable, Wifi } from "lucide-react";

const posDevices = [
  { name: "Hugin Tiger", type: "Kablolu & Kablosuz" },
  { name: "Hugin Yeni Nesil S1", type: "Kablolu & Kablosuz" },
  { name: "Beko X30 TR", type: "Kablolu & Kablosuz" },
  { name: "Pavon86", type: "Kablolu & Kablosuz" },
  { name: "Inpos", type: "Kablolu & Kablosuz" },
];

export function PosEntegrasyon() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <div className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-primary">
              Entegrasyon
            </div>
            <h2 className="mt-3 text-3xl md:text-[52px] font-extrabold tracking-[-0.035em] text-foreground">
              Yazar Kasa POS Entegrasyonu
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl">
              Resis, sektördeki tüm önde gelen yazar kasa POS cihazlarıyla tam uyumlu çalışır. Kablolu ve kablosuz bağlantı seçenekleriyle işletmenize esneklik sunar.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {posDevices.map((device, idx) => (
              <motion.div
                key={device.name}
                variants={fadeUp}
                custom={idx}
                className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-surface-2 hover:border-primary/30 transition-all"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Printer className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {device.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Cable className="h-3 w-3" />
                      Kablolu
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Wifi className="h-3 w-3" />
                      Kablosuz
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20"
          >
            <p className="text-sm text-muted text-center">
              <span className="font-semibold text-primary">Not:</span>{" "}
              Tüm cihazlar için kablolu ve kablosuz entegrasyon çalışmalarımız devam etmektedir. Güncel uyumluluk listesi için iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
