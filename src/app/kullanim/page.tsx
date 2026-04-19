import Link from "next/link";
import { useState } from "react";

export default function Kullanim() {
  return (
    <main className="flex-1 pt-20">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Kullanım Kılavuzu</h1>
          <p className="text-xl text-gray-600 mb-12">
            RESIS programını nasıl kullanacağınızı öğrenin. Aşağıdaki konulardan
            birini seçerek başlayabilirsiniz.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <a
                key={index}
                href={`#${topic.slug}`}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">RESIS</div>
          <div className="flex gap-8 text-gray-600">
            <Link href="/ozellikler">Özellikler</Link>
            <Link href="/kullanim">Kullanım</Link>
            <Link href="/indir">İndir</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
          <div className="text-gray-500 text-sm">© 2026 RESIS. Tüm hakları saklıdır.</div>
        </div>
      </footer>
    </main>
  );
}

const topics = [
  {
    slug: "cari-tanimlama",
    title: "Cari Tanımlama",
    description: "Müşteri ve tedarikçi kartları oluşturma ve düzenleme",
  },
  {
    slug: "stok-tanimlama",
    title: "Stok Tanımlama",
    description: "Stok, ürün ve demirbaş tanımlama",
  },
  {
    slug: "urun-tanimlama",
    title: "Ürün Tanımlama",
    description: "Satışa sunulan ürünlerin tanımlanması",
  },
  {
    slug: "kategori-tanimlama",
    title: "Kategori Tanımlama",
    description: "Ürün kategorileri oluşturma ve yönetme",
  },
  {
    slug: "menu-tanimlama",
    title: "Menü Tanımlama",
    description: "Menü oluşturma ve içerik belirleme",
  },
  {
    slug: "menu-muadil",
    title: "Muaddil Ürün Tanımlama",
    description: "Menü içinde değişkenlik tanımlama",
  },
  {
    slug: "stok-hareketleri",
    title: "Stok Hareketleri",
    description: "Giriş, çıkış, virman ve devir işlemleri",
  },
  {
    slug: "kat-tanimlama",
    title: "Kat Tanımlama",
    description: "Kat ve masa tanımlama",
  },
  {
    slug: "masa-ayarla",
    title: "Masa Ayarları",
    description: "Masa boyutu ve şekli ayarlama",
  },
  {
    slug: "uretim",
    title: "Üretim İşlemleri",
    description: "Ürün reçetesi ve üretim bildirimi",
  },
  {
    slug: "devir-sayim",
    title: "Devir ve Sayım İşlemleri",
    description: "Stok sayımı ve devir işlemleri",
  },
  {
    slug: "banka-devir",
    title: "Banka Devir İşlemleri",
    description: "Banka hesapları arası transfer",
  },
  {
    slug: "cari-devir",
    title: "Cari Devir İşlemleri",
    description: "Cari bakiye devri",
  },
  {
    slug: "kasa-devir",
    title: "Kasa Devir İşlemleri",
    description: "Kasa arası transfer",
  },
  {
    slug: "stok-sayim",
    title: "Stok-Ürün Sayım İşlemi",
    description: "Periyodik sayım ve fire tespiti",
  },
  {
    slug: "irsaliye-fatura",
    title: "İrsaliye ve Fatura",
    description: "Alış ve satış fatura/irsaliye işlemleri",
  },
  {
    slug: "kasa-tanimlama",
    title: "Kasa Tanımlama",
    description: "Para kasaları tanımlama",
  },
  {
    slug: "nakits-tahsilat",
    title: "Nakit Tahsilat ve Ödeme",
    description: "Nakit giriş ve çıkış işlemleri",
  },
  {
    slug: "cek-tahsilat",
    title: "Çek Tahsilat ve Ödeme",
    description: "Çek ve senet işlemleri",
  },
  {
    slug: "kasa-transfer",
    title: "Kasadan Kasaya Transfer",
    description: "Kasalar arası para transferi",
  },
  {
    slug: "sirket-giderleri",
    title: "Şirket Giderleri",
    description: "Şirket giderlerinin kaydedilmesi",
  },
  {
    slug: "personel-maas",
    title: "Personel Maaş Ataması",
    description: "Personel maaş ve avans ödemeleri",
  },
  {
    slug: "banka-tanimlama",
    title: "Banka Tanımlama",
    description: "Banka ve şube tanımlama",
  },
  {
    slug: "kredi-karti",
    title: "Kredi Kartı Tahsilatı",
    description: "Kredi kartı ile ödeme alma",
  },
  {
    slug: "hesap-virman",
    title: "Hesap Virman İşlemleri",
    description: "Banka hesapları arası transfer",
  },
  {
    slug: "hesaba-para",
    title: "Hesaba Yatırılan ve Çekilen",
    description: "Para yatırma ve çekme işlemleri",
  },
  {
    slug: "genel-tanimlamalar",
    title: "Genel Tanımlamalar",
    description: "Birim, fiyat birim, özel kod tanımları",
  },
  {
    slug: "depo-tanimlama",
    title: "Depo Tanımlama",
    description: "Depo kayıtları oluşturma",
  },
  {
    slug: "firma-tanimlama",
    title: "Firma Tanımlama",
    description: "Firma bilgileri ve logo",
  },
  {
    slug: "personel-tanimlama",
    title: "Personel Tanımlama",
    description: "Çalışan bilgileri",
  },
  {
    slug: "kullanici-izinleri",
    title: "Kullanıcı İzinleri",
    description: "Kullanıcı yetkilendirme",
  },
  {
    slug: "on-yuz-kullanici",
    title: "Ön Yüz Kullanıcı İzni",
    description: "Garson, kasiyer yetkilendirme",
  },
  {
    slug: "indirim-saat",
    title: "İndirim Saati Tanımlama",
    description: "Zamanlı indirim tanımlama",
  },
  {
    slug: "ekstra-ozellik",
    title: "Ekstra Özellik Tanımlama",
    description: " Ekstra seçenekler (örn: acılı, soğansız)",
  },
  {
    slug: "kategori-ozellik",
    title: "Kategori Özellik Eşleştirme",
    description: "Kategorideki ürünlerle özellik eşleştirme",
  },
  {
    slug: "ekstra-malzeme",
    title: "Ekstra Malzeme Eşleştirme",
    description: "Ekstra parasal özellikler",
  },
  {
    slug: "sira-sifirla",
    title: "Sıra Sıfırla",
    description: "Hızlı satış sıra numarası sıfırlama",
  },
  {
    slug: "raporlar",
    title: "Raporlar",
    description: "Cari, stok, menü, kasa, banka raporları",
  },
];