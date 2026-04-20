import { NextResponse } from "next/server";
import { buildKnowledgeBase, basitArama } from "@/lib/chatbot-kb";

export const runtime = "nodejs";

interface ChatPayload {
  mesaj: string;
  gecmis?: { rol: "kullanici" | "bot"; icerik: string }[];
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatPayload;
    const soru = (body.mesaj ?? "").trim();
    if (!soru) {
      return NextResponse.json({ cevap: "Lütfen bir soru yazın." });
    }

    const kb = buildKnowledgeBase();
    const alakali = basitArama(soru, kb, 4);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || alakali.length === 0) {
      const cevap =
        alakali.length > 0
          ? `${alakali[0].icerik.replace(/^Soru:.+?\nCevap:\s*/s, "")}\n\nDaha fazlası için /sss sayfasına göz atabilirsiniz.`
          : "Bu konuda henüz bilgim yok. /sss sayfasında 50+ sorunun cevabı var; özel bir ihtiyaç için /teklif-iste formunu doldurursanız uzmanımız sizinle iletişime geçer.";
      return NextResponse.json({ cevap });
    }

    const context = alakali
      .map((c, i) => `[${i + 1}] Kaynak: ${c.kaynak}\n${c.icerik}`)
      .join("\n\n");

    const sistemTalimat = `Sen Resis restoran otomasyonu yazılımının Türkçe destek asistanısın. Aşağıdaki bilgi tabanını kullanarak cevap ver. Bilgi tabanında olmayan konularda tahmin yürütme, "bu konuda kesin bilgim yok, /teklif-iste formunu doldurursanız uzmanımız dönsün" yönlendirmesi yap. Cevaplar kısa (3-5 cümle), samimi ama profesyonel. Kaptan yerine "siz" kullan.

Bilgi tabanı:
${context}`;

    const gecmisMesajlar = (body.gecmis ?? []).map((m) => ({
      role: m.rol === "kullanici" ? "user" : "model",
      parts: [{ text: m.icerik }],
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sistemTalimat }] },
        contents: [
          ...gecmisMesajlar,
          { role: "user", parts: [{ text: soru }] },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 350,
        },
      }),
    });

    if (!res.ok) {
      return NextResponse.json({
        cevap:
          "AI asistan şu an meşgul. Sorularınıza /sss sayfasından cevap bulabilir ya da /teklif-iste formunu doldurabilirsiniz.",
      });
    }

    const data = await res.json();
    const cevap =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ??
      "Üzgünüm, cevap üretemedim. /sss sayfasına bakmanızı öneririm.";

    return NextResponse.json({ cevap });
  } catch {
    return NextResponse.json(
      {
        cevap:
          "Sohbet servisinde bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 200 },
    );
  }
}
