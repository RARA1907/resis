import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            RESIS
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/ozellikler" className="text-gray-600 hover:text-foreground transition-colors">
              Özellikler
            </Link>
            <Link href="/kullanim" className="text-gray-600 hover:text-foreground transition-colors">
              Kullanım
            </Link>
            <Link href="/indir" className="text-gray-600 hover:text-foreground transition-colors">
              İndir
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-foreground transition-colors">
              İletişim
            </Link>
          </div>
          <Link
            href="/indir"
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            Demo İndir
          </Link>
        </div>
      </nav>

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

      {/* Features Grid */}
      <section className="py-20 bg-background-secondary px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Neler Yapabilirsiniz?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {feature.badge}
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-gray-400">{feature.imageAlt}</span>
              </div>
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
          <p className="text-blue-100 text-lg mb-8">
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">RESIS</div>
          <div className="flex gap-8 text-gray-600">
            <Link href="/ozellikler" className="hover:text-foreground">Özellikler</Link>
            <Link href="/kullanim" className="hover:text-foreground">Kullanım</Link>
            <Link href="/indir" className="hover:text-foreground">İndir</Link>
            <Link href="/iletisim" className="hover:text-foreground">İletişim</Link>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 RESIS. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "👥",
    title: "Cari Yönetimi",
    description: "Müşteri ve tedarikçi takibi, telefon rehberi ve mail gönderimi.",
  },
  {
    icon: "📦",
    title: "Stok Kontrolü",
    description: "Stok, ürün ve demirbaş takibi ile depo yönetimi.",
  },
  {
    icon: "🍽️",
    title: "Menü Sistemi",
    description: "Kolay menü oluşturma, kategori ve fiyat yönetimi.",
  },
  {
    icon: "💰",
    title: "Kasa & Banka",
    description: "Gelir-gider takibi, banka işlemleri ve raporlama.",
  },
  {
    icon: "📊",
    title: "Detaylı Raporlar",
    description: "Satış, stok ve finansal raporların tamamı.",
  },
  {
    icon: "🏭",
    title: "Üretim",
    description: "Reçete yönetimi ve üretim bildirimi.",
  },
  {
    icon: "📄",
    title: "Fatura & İrsaliye",
    description: "Alış-satış fatura ve irsaliye işlemleri.",
  },
  {
    icon: "👤",
    title: "Kullanıcı Yönetimi",
    description: "Personel tanımlama ve yetkilendirme sistemi.",
  },
];

const detailedFeatures = [
  {
    badge: "Cari Yönetimi",
    title: "Müşterilerinizi Tek Platformda Yönetin",
    description:
      "Cari kartları oluşturun, telefon rehberi oluşturun ve toplu mail gönderin. Müşteri bakiyelerini ve işlem geçmişini anlık takip edin.",
    imageAlt: "Cari Yönetimi",
  },
  {
    badge: "Stok Yönetimi",
    title: "Stoklarınızı Kontrol Altında Tutun",
    description:
      "Stok giriş-çıkış, virman ve devir işlemlerini yapın. Kategorilere göre ürünleri gruplayın ve minimum-maksimum seviye uyarıları alın.",
    imageAlt: "Stok Yönetimi",
  },
  {
    badge: "Menü Sistemi",
    title: "Menülerinizi Kolayca Oluşturun",
    description:
      "Menü tanımlama, kategori yönetimi ve fiyat güncelleme. Muadil ürün tanımlama ile müşteri tercihlerine göre esneklik sağlayın.",
    imageAlt: "Menü Sistemi",
  },
  {
    badge: "Kasa & Banka",
    title: "Finansal İşlemleriniz Tek Yerden",
    description:
      "Nakit tahsilat ve ödeme, çek işlemleri, banka transferleri ve personel maaş ödemeleri. Tüm finansal hareketleri kayıt altına alın.",
    imageAlt: "Kasa & Banka",
  },
  {
    badge: "Raporlama",
    title: "İşletmenizi Verilerle Analiz Edin",
    description:
      "Cari, stok, ürün, menü, kampanya ve satış raporları. Detaylı finansal analiz ve dışa aktarma özellikleri.",
    imageAlt: "Raporlama",
  },
  {
    badge: "Kullanıcı Yönetimi",
    title: "Ekipinizi Etkili Yönetin",
    description:
      "Personel tanımlama, kullanıcı yetkilendirme ve görev dağılımı. Her kullanıcıya özel erişim hakları belirleyin.",
    imageAlt: "Kullanıcı Yönetimi",
  },
];