"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/shared/container";
import { stagger, fadeUp, slideLeft } from "@/lib/motion";

const stats = [
  { value: 500, suffix: "+", label: "İşletme" },
  { value: 10000, suffix: "+", label: "Aktif kullanıcı" },
  { value: 3, suffix: "M+", label: "Aylık adisyon" },
  { value: 7, suffix: "/24", label: "AI destek" },
];

function CountUp({
  end,
  suffix = "",
  duration = 1.2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(0)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function StatBand() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture/stat-band.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 py-16 md:py-20"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={idx}
              className="text-center"
            >
              <div className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight tabular-nums text-white">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/60 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
