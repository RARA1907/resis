"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Restoran Yönetiminde <br />
            <span className="text-primary">Yeni Dönem</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tüm operasyonunuzu tek platformda yönetin. Stok, cari, kasa, 
            menü ve raporlamayı kolaylaştırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/indir"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
            >
              Demo İndir
            </Link>
            <Link
              href="/ozellikler"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Özellikler
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Clickable */}
      <section className="py-20 bg-background-secondary px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Neler Yapabilirsiniz?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features - Clickable/Expandable */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFeature(openFeature === index ? null : index)}
                className={`w-full px-8 py-6 text-left flex justify-between items-center ${
                  openFeature === index ? "bg-primary text-white" : "bg-white hover:bg-gray-50"
                } transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className={`text-sm ${openFeature === index ? "text-blue-100" : "text-gray-500"}`}>
                      {feature.shortDesc}
                    </p>
                  </div>
                </div>
                <span className="text-2xl">{openFeature === index ? "−" : "+"}</span>
              </button>
              {openFeature === index && (
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                    <span className="text-gray-500">Ekran görüntüsü buraya eklenecek</span>
                  </div>
                  <Link
                    href="/ozellikler"
                    className="text-primary hover:underline text-sm"
                  >
                    Detaylar →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hemen Denemeye Başlayın
          </h2>
          <p className="text-red-100 text-lg mb-8">
            500+ işletme tarafından tercih edilen RESIS'i siz de deneyin.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-5 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Başla
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "👥",
    title: "Cari Yönetimi",
    description: "Müşteri ve tedarikçi takibi, telefon rehberi ve mail gönderimi.",
    link: "/ozellikler",
  },
  {
    icon: "📦",
    title: "Stok Kontrolü",
    description: "Stok, ürün ve demirbaş takibi ile depo yönetimi.",
    link: "/ozellikler",
  },
  {
    icon: "🍽️",
    title: "Menü Sistemi",
    description: "Kolay menü oluşturma, kategori ve fiyat yönetimi.",
    link: "/ozellikler",
  },
  {
    icon: "💰",
    title: "Kasa & Banka",
    description: "Gelir-gider takibi, banka işlemleri ve raporlama.",
    link: "/ozellikler",
  },
  {
    icon: "📊",
    title: "Detaylı Raporlar",
    description: "Satış, stok ve finansal raporların tamamı.",
    link: "/ozellikler",
  },
  {
    icon: "🏭",
    title: "Üretim",
    description: "Reçete yönetimi ve üretim bildirimi.",
    link: "/ozellikler",
  },
  {
    icon: "📄",
    title: "Fatura & İrsaliye",
    description: "Alış-satış fatura ve irsaliye işlemleri.",
    link: "/ozellikler",
  },
  {
    icon: "👤",
    title: "Kullanıcı Yönetimi",
    description: "Personel tanımlama ve yetkilendirme sistemi.",
    link: "/ozellikler",
  },
];

const detailedFeatures = [
  {
    icon: "👥",
    title: "Cari Yönetimi",
    shortDesc: "Müşteri ve tedarikçi takibi",
    description:
      "Cari kartları oluşturun, telefon rehberi oluşturun ve toplu mail gönderin. Müşteri bakiyelerini ve işlem geçmişini anlık takip edin. Cari türü (müşteri, tedarikçi, personel) belirleyebilir, fatura adresi, şehir, ülke bilgilerini kaydedebilirsiniz. Cari bakiye ekstresi ve detaylı işlem geçmişi raporları alabilirsiniz.",
  },
  {
    icon: "📦",
    title: "Stok Yönetimi",
    shortDesc: "Stok, ürün ve demirbaş takibi",
    description:
      "Stok giriş-çıkış, virman ve devir işlemlerini yapın. Kategorilere göre ürünleri gruplayın ve minimum-maksimum seviye uyarıları alın. Depo bazlı stok takibi yapın. Birden fazla depo tanımlayabilir ve stokları depolar arası transfer edebilirsiniz.",
  },
  {
    icon: "🍽️",
    title: "Menü Sistemi",
    shortDesc: "Kolay menü oluşturma ve yönetimi",
    description:
      "Menü tanımlama, kategori yönetimi ve fiyat güncelleme yapın. Muadil ürün tanımlama ile müşteri tercihlerine esneklik sağlayın (örn: kola yerine ayran). Kategorilere göre (İçecekler, Pizzalar, Salon) gruplayın. Menü içeriğine alternatif ürünler ekleyin.",
  },
  {
    icon: "💰",
    title: "Kasa & Banka",
    shortDesc: "Finansal işlemler",
    description:
      "Nakit tahsilat ve ödemeleri kaydedin. Çek/senet işlemlerini takip edin. Banka hesaplarınızı tanımlayın. Kredi kartı tahsilatlarını kaydedin. Kasalar arası transfer yapın. Günlük kasa raporları alın.",
  },
  {
    icon: "📊",
    title: "Raporlama",
    shortDesc: "Detaylı raporlar",
    description:
      "Cari raporları (bakiye, ekstresi, telefon). Stok raporları (durum, seviye, hareket). Satış raporları (ürün, garson, ödeme şekli). Finansal raporlar (kasa, banka, gelir-gider). Excel ve PDF dışa aktarma özellikleri.",
  },
  {
    icon: "🏭",
    title: "Üretim",
    shortDesc: "Reçete ve üretim yönetimi",
    description:
      "Her ürün için reçete tanımlayın. Hangi stokların ne kadar kullanılacağını belirleyin. Üretim bildirimi ile stok çıkışlarını otomatik yapın. Üretim raporları ile maliyet analizi yapın.",
  },
  {
    icon: "📄",
    title: "Fatura & İrsaliye",
    shortDesc: "Fatura ve irsaliye işlemleri",
    description:
      "Alış ve satış faturaları düzenleyin. İrsaliye işlemlerini yapın. KDV ve iskonto hesaplayın. Fatura ve irsaliye raporları alın. Cari bazlı faturalaştırma yapın.",
  },
  {
    icon: "👤",
    title: "Kullanıcı Yönetimi",
    shortDesc: "Personel ve yetkilendirme",
    description:
      "Personel tanımlayın. Kullanıcı adı ve şifre atayın. Her kullanıcıya özel yetki seviyeleri belirleyin. Garson, kasiyer, yönetici gibi rol tanımları yapın. Arka plan ve ön plan kullanıcı izinlerini ayrı ayrı düzenleyin.",
  },
];