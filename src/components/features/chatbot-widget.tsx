"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mesaj {
  rol: "kullanici" | "bot";
  icerik: string;
}

const ilkMesaj: Mesaj = {
  rol: "bot",
  icerik:
    "Merhaba! Ben Resis asistanıyım. Masa yönetimi, stok, CRM veya kurulum gibi konularda sorularınızı yanıtlayabilirim.",
};

const hazirSorular = [
  "Kurulum ne kadar sürer?",
  "Yemek çeki entegrasyonu var mı?",
  "Fiyatlandırma nasıl?",
  "Mevcut POS'umdan veri taşınır mı?",
];

export function ChatbotWidget() {
  const [acik, setAcik] = useState(true);
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([ilkMesaj]);
  const [girdi, setGirdi] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [mesajlar]);

  const gonder = async (metin: string) => {
    const temiz = metin.trim();
    if (!temiz || yukleniyor) return;

    const yeniKullaniciMesaji: Mesaj = { rol: "kullanici", icerik: temiz };
    setMesajlar((m) => [...m, yeniKullaniciMesaji]);
    setGirdi("");
    setYukleniyor(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mesaj: temiz,
          gecmis: mesajlar.slice(-6),
        }),
      });
      const data = await res.json();
      setMesajlar((m) => [
        ...m,
        {
          rol: "bot",
          icerik:
            data?.cevap ??
            "Üzgünüm, şu an cevap veremiyorum. Sıkça Sorulan Sorular sayfasına göz atabilir ya da teklif formunu doldurabilirsiniz.",
        },
      ]);
    } catch {
      setMesajlar((m) => [
        ...m,
        {
          rol: "bot",
          icerik:
            "Bağlantı hatası. Lütfen daha sonra tekrar deneyin veya teklif formumuzu kullanın.",
        },
      ]);
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setAcik((a) => !a)}
        aria-label={acik ? "Sohbet kapat" : "Sohbet aç"}
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        {acik ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {acik && (
        <div
          role="dialog"
          aria-label="Resis destek asistanı"
          className="fixed bottom-24 right-6 z-40 flex h-[500px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-border bg-surface-2 p-4">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold tracking-tight">
                Resis Asistanı
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                7/24 aktif
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto p-4 text-sm"
          >
            {mesajlar.map((m, i) => (
              <div
                key={i}
                className={
                  m.rol === "kullanici"
                    ? "ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-white"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2 leading-relaxed text-foreground"
                }
              >
                {m.icerik}
              </div>
            ))}
            {yukleniyor && (
              <div className="mr-auto inline-flex items-center gap-2 rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2 text-muted">
                <Loader2 className="h-3 w-3 animate-spin" />
                Yazıyor…
              </div>
            )}

            {mesajlar.length === 1 && !yukleniyor && (
              <div className="pt-2">
                <div className="mb-2 text-xs text-muted">Hızlı sorular:</div>
                <div className="flex flex-wrap gap-2">
                  {hazirSorular.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => gonder(s)}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              gonder(girdi);
            }}
            className="border-t border-border p-3"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={girdi}
                onChange={(e) => setGirdi(e.target.value)}
                placeholder="Sorunuzu yazın…"
                className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                disabled={yukleniyor}
              />
              <Button
                type="submit"
                size="sm"
                disabled={!girdi.trim() || yukleniyor}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
