"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import type { FaqItem } from "@/content/sss";

interface FaqSectionsProps {
  faqs: FaqItem[];
}

export function FaqSections({ faqs }: FaqSectionsProps) {
  const [query, setQuery] = useState("");
  const [activeKat, setActiveKat] = useState<string>("Hepsi");

  const kategoriler = useMemo(() => {
    const set = new Set(faqs.map((f) => f.kategori));
    return ["Hepsi", ...Array.from(set)];
  }, [faqs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchKat = activeKat === "Hepsi" || f.kategori === activeKat;
      const matchQ =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return matchKat && matchQ;
    });
  }, [faqs, query, activeKat]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            type="search"
            placeholder="Soru ara (örn: stok, reçete, kurulum)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {kategoriler.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setActiveKat(k)}
            className={
              activeKat === k
                ? "rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white"
                : "rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            }
          >
            {k}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-8 text-center text-muted">
          Aramanıza uygun soru bulunamadı. AI destek botuna sorun — hemen yanıt versin.
        </div>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filtered.map((f, i) => (
            <AccordionItem key={`${f.kategori}-${i}`} value={`${f.kategori}-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
