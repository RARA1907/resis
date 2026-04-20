"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

export function CtaAlt() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture/cta.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      {/* Radial Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 40%, rgba(230,57,70,0.35), transparent 55%),
            radial-gradient(circle at 70% 60%, rgba(255,213,0,0.15), transparent 45%)
          `,
        }}
      />

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-accent">
            Hemen başlayın
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-[-0.035em] leading-[0.96] text-white">
            Resis&apos;i işletmenize göre kurgulayalım.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70 md:text-lg">
            2 dakikada formu doldurun, uzman ekibimiz size özel teklifle 24 saat
            içinde dönsün.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-primary">
              <Link href="/teklif-iste">
                Teklif iste
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/sss">Sıkça sorulan sorular</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
