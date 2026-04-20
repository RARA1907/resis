"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { EkranManifest, EkranItem } from "@/content/ekranlar";

interface Props {
  ekranlar: EkranManifest;
}

type TabKey = "on-yuz" | "arka-yuz";

export function EkranlarGaleri({ ekranlar }: Props) {
  const [aktif, setAktif] = useState<TabKey>("on-yuz");
  const aktifListe = aktif === "on-yuz" ? ekranlar.onYuz : ekranlar.arkaYuz;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const mevcutEkran =
    lightboxIndex !== null ? aktifListe[lightboxIndex] : null;

  const kapat = useCallback(() => setLightboxIndex(null), []);
  const sonraki = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % aktifListe.length,
    );
  }, [aktifListe.length]);
  const onceki = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + aktifListe.length) % aktifListe.length,
    );
  }, [aktifListe.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") kapat();
      if (e.key === "ArrowRight") sonraki();
      if (e.key === "ArrowLeft") onceki();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, kapat, sonraki, onceki]);

  return (
    <div>
      <div className="mb-8 flex gap-2 border-b border-border">
        <Tab active={aktif === "on-yuz"} onClick={() => setAktif("on-yuz")}>
          Ön Yüz ({ekranlar.onYuz.length})
        </Tab>
        <Tab
          active={aktif === "arka-yuz"}
          onClick={() => setAktif("arka-yuz")}
        >
          Arka Yüz ({ekranlar.arkaYuz.length})
        </Tab>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {aktifListe.map((ekran, i) => (
          <GaleriThumb
            key={ekran.file}
            ekran={ekran}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {mevcutEkran !== null && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={kapat}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              kapat();
            }}
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              onceki();
            }}
            aria-label="Önceki"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              sonraki();
            }}
            aria-label="Sonraki"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={mevcutEkran.file}
              alt={mevcutEkran.name}
              width={1600}
              height={1000}
              unoptimized
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
            <div className="mt-3 text-center text-sm text-white/80">
              {mevcutEkran.name} — {lightboxIndex + 1} / {aktifListe.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "relative border-b-2 border-primary px-4 py-3 text-sm font-medium text-foreground"
          : "px-4 py-3 text-sm text-muted transition-colors hover:text-foreground"
      }
    >
      {children}
    </button>
  );
}

function GaleriThumb({
  ekran,
  onClick,
}: {
  ekran: EkranItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface-2 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <Image
        src={ekran.file}
        alt={ekran.name}
        fill
        unoptimized
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover object-top transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <div className="text-xs font-medium text-white">{ekran.name}</div>
      </div>
    </button>
  );
}
