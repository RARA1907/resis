import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  ad: z.string().min(2).max(60),
  isletmeAdi: z.string().min(2).max(80),
  telefon: z.string().min(10).regex(/^[0-9 +()-]+$/),
  email: z.string().email(),
  tip: z.enum(["restoran", "fastfood", "kafe", "zincir", "diger"]),
  subeSayisi: z.enum(["1", "2-5", "6-20", "20+"]),
  moduller: z.array(z.string()).min(1),
  mesaj: z.string().max(600).optional(),
  kvkk: z.literal(true),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Form verileri geçersiz" },
        { status: 400 },
      );
    }

    const d = parsed.data;
    const zaman = new Date().toISOString();

    const kayit = {
      zaman,
      ...d,
      ua: req.headers.get("user-agent") ?? "",
      ip:
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        "",
    };

    console.log("[teklif-iste]", JSON.stringify(kayit));

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(kayit),
        });
      } catch (err) {
        console.error("[supabase] lead insert failed:", err);
      }
    }

    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(kayit),
        });
      } catch (err) {
        console.error("[webhook] lead notify failed:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[teklif-iste] hata:", err);
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası" },
      { status: 500 },
    );
  }
}
