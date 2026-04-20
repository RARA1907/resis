export interface BlogYazi {
  slug: string;
  baslik: string;
  ozet: string;
  yazar: string;
  tarih: string;
  okumaSuresi: string;
  kategori: string;
  icerik: string;
}

export const blogYazilari: BlogYazi[] = [
  {
    slug: "restoran-otomasyonu-nedir",
    baslik: "Restoran Otomasyonu Nedir, Neden Gereklidir?",
    ozet:
      "Restoran otomasyon yazılımının kapsamı, sağladığı operasyonel faydalar ve işletme kârlılığına etkisi — yerli yazılımın güncel durumu.",
    yazar: "Resis Ekibi",
    tarih: "2026-04-15",
    okumaSuresi: "6 dk",
    kategori: "Sektör",
    icerik: `Restoran otomasyonu; masa yönetiminden sipariş alma sürecine, stok takibinden müşteri ilişkilerine ve raporlamaya kadar bir yiyecek-içecek işletmesinin tüm operasyonel süreçlerini dijital ortamda yöneten yazılım sistemleridir.

**Neden restoran otomasyonu?**

- Adisyon kaybını sıfırlar
- Hata oranını minimuma indirir
- Stok sayımını ve maliyet takibini otomatikleştirir
- Personel performansını ölçülebilir kılar
- Müşteri verilerini toplar, segmente eder, kampanyaya çevirir

**Başlıca modüller**

1. EPOS (masa, adisyon, tahsilat)
2. Stok & Maliyet
3. CRM & Sadakat
4. Raporlama

Bu dört modülün tamamını tek platformda sunan Resis, Türkiye'de 500+ işletme tarafından tercih ediliyor.`,
  },
  {
    slug: "happy-hour-stratejisi",
    baslik: "Happy Hour ile Boş Saatlerini Nasıl Doldurursun?",
    ozet:
      "Restoran ve kafelerde yoğun olmayan saatlerde ciroyu artırmanın en etkili yolu: akıllı Happy Hour kampanya kurgusu.",
    yazar: "Pazarlama Ekibi",
    tarih: "2026-04-08",
    okumaSuresi: "4 dk",
    kategori: "Pazarlama",
    icerik: `Happy Hour, düşük yoğunluklu saatlerde fiyat veya ürün bazlı indirimler sunarak trafiği artırma stratejisidir.

**Hangi saatler?**
- Öğleden sonra 15:00-17:00 (kafeler için)
- Akşam 17:00-19:00 (restoranlar için)
- Hafta başı pazartesi-çarşamba (zincirler için)

**Kampanya kurgusu**
- 2+1 ürün kampanyası
- %30 içecek indirimi
- Menü kombinasyonları
- Sadakat puanı çift katı

Resis CRM modülünde Happy Hour kampanyaları saat ve gün bazlı otomatik devreye girer, kasiyer hiçbir manuel giriş yapmaz.`,
  },
  {
    slug: "stok-kaybini-nasil-onlersin",
    baslik: "Restoranda Stok Kaybını Nasıl Önlersin?",
    ozet:
      "Hammadde sızıntısı, fire, yanlış porsiyonlama ve sayım farkı — her biri kâr marjınıza doğrudan darbe vuruyor.",
    yazar: "İşletme Danışmanlığı",
    tarih: "2026-04-01",
    okumaSuresi: "7 dk",
    kategori: "Operasyon",
    icerik: `Restoranlarda ortalama stok kaybı toplam maliyetin %5-15'i arasındadır. Bu kayıp; sızıntı, fire, yanlış porsiyonlama ve kasiyer hatalarından oluşur.

**5 adımda stok kaybını azaltın:**

1. **Reçete disiplini:** Her menü ürününün gramajı net tanımlı olmalı
2. **Otomatik düşüm:** Satışla birlikte stok azalmalı
3. **Kritik seviye uyarısı:** Hammadde azaldığında bildirim gelmeli
4. **Periyodik sayım:** Haftalık fiziksel sayım disiplini
5. **Fire kayıt:** Planlı (prep) ve plansız (atık) fire ayrımı

Resis'in Stok & Maliyet modülü bu beş adımı otomatik hale getirir.`,
  },
];

export function getBlogBySlug(slug: string): BlogYazi | undefined {
  return blogYazilari.find((b) => b.slug === slug);
}
