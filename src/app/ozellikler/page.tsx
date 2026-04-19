export default function Ozellikler() {
  return (
    <main className="flex-1">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Özellikler</h1>
          <p className="text-xl text-gray-600 mb-16">
            RESIS'in tüm özelliklerini keşfedin. Restoran ve cafe işletmeniz 
            için ihtiyaç duyduğunuz her şey bu programda.
          </p>

          <div className="space-y-16">
            {allFeatures.map((feature, index) => (
              <div key={index} className="border-b pb-16 last:border-0">
                <div className="text-primary font-medium mb-2">{feature.category}</div>
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const allFeatures = [
  {
    category: "Cari Yönetimi",
    title: "Müşteri ve Tedarikçi Takibi",
    description:
      "Cari (müşteri/tedarikçi) kartları oluşturun ve yönetin. Telefon, e-posta ve adres bilgilerini saklayın. Telefon rehberi oluşturarak toplu SMS veya e-posta gönderin. Cari bakiye ekstresi ve işlem geçmişini anlık görüntüleyin.",
  },
  {
    category: "Stok Yönetimi",
    title: "Stok, Ürün ve Demirbaş",
    description:
      "Depo bazlı stok takibi yapın. Stok giriş, çıkış, virman ve devir işlemlerini kaydedin. Kategori sistemi ile ürünleri gruplayın. Minimum ve maksimum seviye uyarıları ile stok kontrolünü otomatikleştirin.",
  },
  {
    category: "Menü Sistemi",
    title: "Menü ve Kategori Yönetimi",
    description:
      "Restoran menülerini kolayca oluşturun ve güncelleyin. Kategorilere göre gruplayın. Fiyat değişikliklerini tek yerden yapın. Muadil ürün tanımlayarak müşteri tercihlerine esneklik sağlayın.",
  },
  {
    category: "Üretim",
    title: "Ürün Reçetesi ve Üretim",
    description:
      "Her ürün için reçete tanımlayın. Hangi stokların ne kadar kullanılacağını belirleyin. Üretim bildirimi ile stok çıkışlarını otomatik yapın. Üretim raporları ile maliyet analizi yapın.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Nakit ve Ödeme Yönetimi",
    description:
      "Birden fazla kasa tanımlayın. Nakit tahsilat ve ödemeleri kaydedin. Çek/senet işlemlerini takip edin. Kasalar arası transfer yapın. Günlük kasa raporları alın.",
  },
  {
    category: "Banka İşlemleri",
    title: "Banka ve Kredi Kartı",
    description:
      "Banka hesaplarınızı tanımlayın. Kredi kartı tahsilatlarını kaydedin. Hesap virmanı yapın. Yatırılan ve çekilen para işlemlerini takip edin.",
  },
  {
    category: "Fatura & İrsaliye",
    title: "Fatura ve İrsaliye",
    description:
      "Alış ve satış faturaları düzenleyin. İrsaliye işlemlerini yapın. KDV ve iskonto hesaplayın. Fatura ve irsaliye raporları alın.",
  },
  {
    category: "Devir & Sayım",
    title: "Devir ve Sayım İşlemleri",
    description:
      "Dönem başı devir yapın. Periyodik stok sayımı gerçekleştirin. Sayım sonucu fireleri otomatik hesaplayın. Depo bazlı sayım raporları alın.",
  },
  {
    category: "Raporlama",
    title: "Detaylı Raporlar",
    description:
      "Cari raporları (bakiye, ekstresi, telefon). Stok raporları (durum, seviye, hareket). Satış raporları (ürün, garson, ödeme şekli). Finansal raporlar (kasa, banka, gelir-gider). Dışa aktarma özelliği (Excel, PDF).",
  },
  {
    category: "Kullanıcı Yönetimi",
    title: "Personel ve Yetkilendirme",
    description:
      "Personel tanımlayın. Kullanıcı adı ve şifre atayın. Her kullanıcıya özel yetki seviyeleri belirleyin. Garson, kasiyer, yönetici gibi rol tanımları yapın.",
  },
  {
    category: "Tanımlamalar",
    title: "Genel Tanımlamalar",
    description:
      "Birim tanımları (adet, gram, litre). Depo tanımlama. Firma bilgileri. Özel kodlar. İndirim saatleri tanımlama.",
  },
  {
    category: "Yazdırma",
    title: "Yazdırma Desteği",
    description:
      "Fatura ve irsaliye yazdırma. Barkod etiketi yazdırma. Rapor yazdırma. Özel yazıcı tanımlama.",
  },
];