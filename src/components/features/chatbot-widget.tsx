"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mesaj {
  rol: "kullanici" | "bot";
  icerik: string;
}

interface APIResponse {
  cevap: string;
  oneriler?: string[];
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

const STORAGE_KEY = "resis-chatbot-closed";

function formatCevap(cevap: string): React.ReactNode {
  const parts = cevap.split(/(\[.*?\]\(.*?\))/g);
  
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      const [, text, url] = match;
      return (
        <Link
          key={i}
          href={url}
          className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
        >
          {text}
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ChatbotWidget() {
  const [acik, setAcik] = useState(false);
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([ilkMesaj]);
  const [girdi, setGirdi] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [oneriler, setOneriler] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const isMobile = window.innerWidth < 768;
    const wasClosed = localStorage.getItem(STORAGE_KEY);
    
    if (!isMobile && !wasClosed) {
      setAcik(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [mesajlar]);

  const toggleChat = () => {
    const newState = !acik;
    setAcik(newState);
    if (newState === false) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const gonder = async (metin: string) => {
    const temiz = metin.trim();
    if (!temiz || yukleniyor) return;

    const yeniKullaniciMesaji: Mesaj = { rol: "kullanici", icerik: temiz };
    setMesajlar((m) => [...m, yeniKullaniciMesaji]);
    setGirdi("");
    setYukleniyor(true);
    setOneriler([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mesaj: temiz,
          gecmis: mesajlar.slice(-6),
        }),
      });
      const data: APIResponse = await res.json();
      
      setMesajlar((m) => [
        ...m,
        { rol: "bot", icerik: data.cevap },
      ]);
      
      if (data.oneriler && data.oneriler.length > 0) {
        setOneriler(data.oneriler);
      }
    } catch {
      setMesajlar((m) => [
        ...m,
        {
          rol: "bot",
          icerik: "Bağlantı hatası. Lütfen daha sonra tekrar deneyin.",
        },
      ]);
    } finally {
      setYukleniyor(false);
    }
  };

  if (!mounted) return null;

  const sonMesajBot = mesajlar.length > 0 && mesajlar[mesajlar.length - 1].rol === "bot";

  return (
    <>
      <button
        type="button"
        onClick={toggleChat}
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
                    : "mr-auto max-w-[90%] rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2 leading-relaxed text-foreground"
                }
              >
                {m.rol === "bot" ? formatCevap(m.icerik) : m.icerik}
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

            {sonMesajBot && oneriler.length > 0 && !yukleniyor && (
              <div className="pt-2">
                <div className="mb-2 text-xs text-muted">İlgili sorular:</div>
                <div className="flex flex-wrap gap-2">
                  {oneriler.map((s) => (
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
