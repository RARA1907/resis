"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stagger, fadeUp, slideLeft, slideRight } from "@/lib/motion";

const slides = [
  {
    seg: "Restoran",
    bg: "/images/hero/slider-1.jpg",
    title: "Profesyonel Restoran Yönetimi",
    sub: "20+ yıllık tecrübe ile işletmenizi geleceğe taşıyoruz.",
    primaryScreen: "/ekranlar/on-yuz/05-on-yuz.png",
    backScreen: "/ekranlar/on-yuz/01-on-yuz.png",
    accentScreen: "/ekranlar/on-yuz/03-on-yuz.png",
  },
  {
    seg: "Fast-food",
    bg: "/images/hero/slider-2.jpg",
    title: "Kolay Kullanım",
    sub: "Anlık raporlar ve kontrol sistemi ile tüm süreçler elinizin altında.",
    primaryScreen: "/ekranlar/on-yuz/07-on-yuz.png",
    backScreen: "/ekranlar/on-yuz/02-on-yuz.png",
    accentScreen: "/ekranlar/on-yuz/08-on-yuz.png",
  },
  {
    seg: "Kafe",
    bg: "/images/hero/slider-3.jpg",
    title: "Tam Kapsamlı Çözüm",
    sub: "Masa, stok, cari ve raporlama tek platformda birleşiyor.",
    primaryScreen: "/ekranlar/on-yuz/04-on-yuz.png",
    backScreen: "/ekranlar/on-yuz/06-on-yuz.png",
    accentScreen: "/ekranlar/on-yuz/09-on-yuz.png",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  const next = useCallback(() => setI((p) => (p + 1) % slides.length), []);
  const prev = useCallback(
    () => setI((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [auto, next]);

  const s = slides[i];

  return (
    <section className="relative min-h-[88vh] flex flex-col overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.bg}
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <Image
              src={s.bg}
              alt={s.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      </div>

      {/* Content Container */}
      <div className="relative flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Seg Label */}
            <motion.div
              variants={slideLeft}
              className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-accent"
            >
              {s.seg}
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white tracking-[-0.045em] leading-[0.96]"
              >
                {s.title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={s.sub}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl text-white/80 max-w-lg"
              >
                {s.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-primary"
                asChild
              >
                <a href="/teklif-iste">Teklif İste</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="/ekranlar">Ekranları İncele</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: macOS Window Composition */}
          <motion.div
            variants={slideRight}
            className="relative hidden lg:block h-[420px]"
          >
            {/* Back Window */}
            <motion.div
              key={`back-${i}`}
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 right-0 w-[380px] rounded-xl overflow-hidden shadow-window bg-surface"
            >
              {/* macOS Window Chrome */}
              <div className="h-8 bg-surface-2 border-b border-border flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center text-xs text-muted font-mono">
                  Resis POS — Ön Yüz
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-ink">
                <Image
                  src={s.backScreen}
                  alt="Ekran görüntüsü"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Accent Window */}
            <motion.div
              key={`accent-${i}`}
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[280px] rounded-xl overflow-hidden shadow-window bg-surface"
            >
              <div className="h-8 bg-surface-2 border-b border-border flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center text-xs text-muted font-mono">
                  Rapor
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-ink">
                <Image
                  src={s.accentScreen}
                  alt="Ekran görüntüsü"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Primary Window (Front) */}
            <motion.div
              key={`primary-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] rounded-xl overflow-hidden shadow-window bg-surface"
            >
              <div className="h-8 bg-surface-2 border-b border-border flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center text-xs text-muted font-mono">
                  Ana Ekran
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-ink">
                <Image
                  src={s.primaryScreen}
                  alt="Ekran görüntüsü"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="relative px-6 pb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setI(idx);
                  setAuto(false);
                }}
                className={`relative h-2 transition-all duration-300 ${
                  idx === i ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                } rounded-full`}
                aria-label={`Slayt ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                prev();
                setAuto(false);
              }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => {
                next();
                setAuto(false);
              }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 font-mono uppercase tracking-wider">
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
