import { NextResponse } from "next/server";
import { buildKnowledgeBase, basitArama, getSuggestedQuestions } from "@/lib/chatbot-kb";

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
      return NextResponse.json({ 
        cevap: "Lütfen bir soru yazın.",
        oneriler: ["Kurulum ne kadar sürer?", "Fiyatlandırma nasıl?", "Modüller neler?"]
      });
    }

    const kb = buildKnowledgeBase();
    const alakali = basitArama(soru, kb, 4);
    const oneriler = getSuggestedQuestions(soru);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || alakali.length === 0) {
      const cevap = alakali.length > 0
        ? `${alakali[0].icerik.replace(/^Soru:.+?\nCevap:\s*/s, "")}\n\n[Detaylı bilgi için](/sss) | [Teklif al](/teklif-iste)`
        : "Bu konuda henüz bilgim yok. [SSS sayfasında](/sss) 50+ sorunun cevabı var; özel bir ihtiyaç için [teklif formunu](/teklif-iste) doldurursanız uzmanımız sizinle iletişime geçer.";
      return NextResponse.json({ cevap, oneriler });
    }

    const context = alakali
      .map((c, i) => `[${i + 1}] Kaynak: ${c.kaynak}\n${c.icerik}`)
      .join("\n\n");

    const linkTalimat = `Link verme kuralları:
- /modul/epos, /modul/stok-maliyet, /modul/crm-sadakat, /modul/analiz-raporlama sayfalarına yönlendirme yapabilirsin
- /sss sayfasına sıkça sorulan sorular için yönlendir
- /teklif-iste formuna özel ihtiyaçlar için yönlendir
- /ekranlar sayfasına ekran görüntüleri için yönlendir
- /referanslar sayfasına müşteri referansları için yönlendir
- Link formatı: [Görüntüle](/yol) şeklinde Markdown kullan
- Her cevapta en fazla 2 link ver, doğrudan ilgili sayfaya yönlendir`;

    const sistemTalimat = `Sen Resis restoran otomasyonu yazılımının Türkçe destek asistanısın. Aşağıdaki bilgi tabanını kullanarak cevap ver. Bilgi tabanında olmayan konularda tahmin yürütme, "bu konuda kesin bilgim yok" deyip kullanıcıyı /teklif-iste formuna yönlendir. Cevaplar kısa (3-5 cümle), samimi ama profesyonel. "Kaptan" yerine "siz" kullan.

${linkTalimat}

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
          maxOutputTokens: 400,
        },
      }),
    });

    if (!res.ok) {
      return NextResponse.json({
        cevap: "AI asistan şu an meşgul. Sorularınıza [SSS sayfasından](/sss) cevap bulabilir ya da [teklif formunu](/teklif-iste) doldurabilirsiniz.",
        oneriler,
      });
    }

    const data = await res.json();
    const cevap = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ??
      "Üzgünüm, cevap üretemedim. [SSS sayfasına](/sss) bakmanızı öneririm.";

    return NextResponse.json({ cevap, oneriler });
  } catch {
    return NextResponse.json(
      {
        cevap: "Sohbet servisinde bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        oneriler: ["Kurulum ne kadar sürer?", "Fiyatlandırma nasıl?", "Demo talep et"],
      },
      { status: 200 },
    );
  }
}
