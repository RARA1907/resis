import { faqList } from "@/content/sss";
import { moduller } from "@/content/moduller";
import { referanslar } from "@/content/referanslar";

export interface KBChunk {
  kaynak: string;
  icerik: string;
}

export function buildKnowledgeBase(): KBChunk[] {
  const faqChunks: KBChunk[] = faqList.map((f) => ({
    kaynak: `SSS / ${f.kategori}`,
    icerik: `Soru: ${f.q}\nCevap: ${f.a}`,
  }));

  const modulChunks: KBChunk[] = moduller.map((m) => ({
    kaynak: `Modül / ${m.title}`,
    icerik: `${m.title} — ${m.subtitle}. ${m.summary}\nÖzellikler: ${m.features
      .map((f) => f.title + " (" + f.text + ")")
      .join("; ")}\nFaydalar: ${m.benefits.join(", ")}.`,
  }));

  const referansChunk: KBChunk = {
    kaynak: "Referanslar",
    icerik: `Resis şu an ${referanslar.length}+ işletmede aktif — örnek müşteriler: ${referanslar
      .map((r) => `${r.ad} (${r.sektor}, ${r.sube} şube, ${r.sehir})`)
      .join("; ")}.`,
  };

  const genel: KBChunk[] = [
    {
      kaynak: "Genel",
      icerik:
        "Resis; Windows tabanlı restoran, kafe ve fast-food otomasyon yazılımıdır. 4 ana modül: EPOS, Stok & Maliyet, CRM & Sadakat, Analiz & Raporlama. 7/24 canlı destek + AI asistan.",
    },
    {
      kaynak: "İletişim",
      icerik:
        "Teklif almak için /teklif-iste formunu doldurun. 24 saat içinde uzman ekibimiz geri döner. rara@raraprojects.com üzerinden de iletişim kurulabilir.",
    },
  ];

  return [...genel, ...modulChunks, ...faqChunks, referansChunk];
}

export function basitArama(soru: string, kb: KBChunk[], limit = 4): KBChunk[] {
  const q = soru.toLocaleLowerCase("tr-TR");
  const kelimeler = q.split(/\s+/).filter((w) => w.length > 2);
  if (kelimeler.length === 0) return kb.slice(0, limit);

  const skor = kb.map((c) => {
    const l = c.icerik.toLocaleLowerCase("tr-TR");
    const score = kelimeler.reduce(
      (acc, k) => acc + (l.includes(k) ? 1 : 0),
      0,
    );
    return { chunk: c, score };
  });

  return skor
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.chunk);
}

export function getSuggestedQuestions(soru: string): string[] {
  const q = soru.toLocaleLowerCase("tr-TR");
  
  if (q.includes("kurulum") || q.includes("kurulum ne kadar")) {
    return ["Sistem gereksinimleri neler?", "Veri taşıma yapılır mı?", "Eğitim veriliyor mu?"];
  }
  if (q.includes("fiyat") || q.includes("ücret") || q.includes("maliyet")) {
    return ["Lisans modeli nedir?", "Destek ücreti var mı?", "Güncelleme ücretli mi?"];
  }
  if (q.includes("yemek çeki") || q.includes("multinet") || q.includes("sodexo")) {
    return ["Hangi çekler entegre?", "Komisyon oranları nedir?", "Gunluk rapor alınır mı?"];
  }
  if (q.includes("modül") || q.includes("özellik")) {
    return ["EPOS modülü nedir?", "Stok modülü nasıl çalışır?", "CRM özellikleri neler?"];
  }
  if (q.includes("demo") || q.includes("deneme")) {
    return ["Demo süresi ne kadar?", "Uzak bağlantıyla gösterim yapılır mı?", "Referans müşteri var mı?"];
  }
  if (q.includes("referans") || q.includes("müşteri")) {
    return ["Kaç işletmede kullanılıyor?", "Zincir restoranlar kullanıyor mu?", "Sektörler neler?"];
  }
  if (q.includes("stok") || q.includes("maliyet") || q.includes("envanter")) {
    return ["Reçete yönetimi var mı?", "Fire takibi yapılır mı?", "Otomatik stok düşümü nedir?"];
  }
  if (q.includes("rapor") || q.includes("analiz")) {
    return ["Günlük raporlar neler?", "Personel performansı takip edilir mi?", "Excel export var mı?"];
  }
  
  return ["Kurulum ne kadar sürer?", "Hangi sektörlere uygun?", "Teklif almak istiyorum"];
}
