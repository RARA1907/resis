"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "resis-cookie-consent";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setShow(false);
  };

  if (!mounted || !show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface p-4 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-foreground">
            <p className="mb-2 font-medium">
              Çerez Kullanımı
            </p>
            <p className="text-muted">
              Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. 
              Kabul ederek tüm çerezleri kullanmamıza izin vermiş olursunuz. 
              Detaylar için{" "}
              <Link href="/gizlilik-politikasi" className="text-primary underline-offset-2 hover:underline">
                Gizlilik Politikamızı
              </Link>{" "}
              ve{" "}
              <Link href="/cerez-politikasi" className="text-primary underline-offset-2 hover:underline">
                Çerez Politikamızı
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:flex-shrink-0">
            <Button variant="outline" size="sm" onClick={reject}>
              Reddet
            </Button>
            <Button size="sm" onClick={accept}>
              Kabul Et
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
