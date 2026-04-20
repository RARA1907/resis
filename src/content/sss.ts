export interface FaqItem {
  q: string;
  a: string;
  kategori: string;
}

export const faqKategoriler = [
  "Genel",
  "EPOS",
  "Stok & Maliyet",
  "CRM & Sadakat",
  "Raporlama",
  "Kurulum & Destek",
  "Fiyatlandırma",
  "Teknik",
] as const;

export const faqList: FaqItem[] = [
  {
    kategori: "Genel",
    q: "Resis nedir?",
    a: "Resis; restoran, kafe ve fast-food işletmeleri için tasarlanmış Windows tabanlı POS (EPOS) otomasyon yazılımıdır. Masa yönetiminden stok, CRM ve raporlamaya kadar tüm süreçleri tek platformda birleştirir.",
  },
  {
    kategori: "Genel",
    q: "Hangi işletme tiplerine uygun?",
    a: "Fine-dining restoran, fast-food zincirleri, kafe, bar, büfe, pastane, yemek fabrikası ve otel restoranı dahil her tür yiyecek-içecek işletmesine uygundur.",
  },
  {
    kategori: "Genel",
    q: "Windows dışında çalışır mı?",
    a: "Şu an ana ürün Windows üzerinde çalışır. Bulut tabanlı sürüm (cloud POS) 2026 Q3 yol haritasındadır.",
  },
  {
    kategori: "Genel",
    q: "Tek şubeden fazla şubeyi yönetebilir miyim?",
    a: "Evet. Merkez-şube mimarisi ile sınırsız şube takibi yapılabilir. Raporlar merkezde konsolide edilir.",
  },
  {
    kategori: "Genel",
    q: "Verilerim nerede tutuluyor?",
    a: "Yerel SQL sunucunuzda. İsteğe bağlı olarak yedekler şifrelenerek buluta gönderilir.",
  },
  {
    kategori: "EPOS",
    q: "Masa planını kendim çizebilir miyim?",
    a: "Evet. Sürükle-bırak ile salon planı çizer, masaları özelleştirir ve gerçek zamanlı durum göstergesi alırsınız.",
  },
  {
    kategori: "EPOS",
    q: "Adisyon parçalama nasıl çalışır?",
    a: "Tek masanın adisyonunu kişi ya da ürün bazlı bölebilirsiniz. Her parçaya ayrı ödeme yöntemi tanımlanabilir.",
  },
  {
    kategori: "EPOS",
    q: "Yemek çeki entegrasyonu var mı?",
    a: "Multinet, Sodexo, Ticket, SetCard, Edenred ile hem POS hem sanal (online) entegrasyon mevcuttur.",
  },
  {
    kategori: "EPOS",
    q: "Caller ID paket servis nasıl çalışır?",
    a: "Gelen çağrıyı telefon hattınız Resis'e bildirir. Müşteri kartı otomatik açılır, geçmiş siparişler ve adres listelenir.",
  },
  {
    kategori: "EPOS",
    q: "Mutfak ekranı (KDS) zorunlu mu?",
    a: "Zorunlu değildir; dilerseniz kağıt çıktı yazıcısı ile kullanabilirsiniz. KDS hız ve kağıt tasarrufu sağlar.",
  },
  {
    kategori: "EPOS",
    q: "Garson cihazı (handheld) destekliyor musunuz?",
    a: "Evet. Android tabanlı POS cihazları ve tabletler üzerinden kablosuz masa sipariş girişi yapılabilir.",
  },
  {
    kategori: "EPOS",
    q: "QR menü ve online sipariş mümkün mü?",
    a: "QR menü modülü dahili olarak gelir. Online sipariş için Getir Yemek, Yemeksepeti ve Trendyol Yemek entegrasyonu aktiftir.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Reçete nasıl tanımlanır?",
    a: "Her menü ürünü için hammadde listesi, miktarı ve birimi girilir. Alt reçete (menü içinde menü) da desteklenir.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Otomatik stok düşümü nasıl olur?",
    a: "Satış yapıldığı anda reçetedeki hammaddeler stoğunuzdan otomatik düşülür. Kritik seviyede uyarı gönderilir.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Fire ve sayım modülü nasıl çalışır?",
    a: "Dönem sonu fiziksel sayım girişi yaparsınız, sistem fark raporunu çıkarır. Planlı ve plansız fire kaydı tutulabilir.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Maliyet hesabı nasıl yapılıyor?",
    a: "Hammadde alış fiyatı, porsiyon miktarı ve fire oranları kullanılarak her ürün için anlık üretim maliyeti hesaplanır.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Tedarikçi fiyat listesi tutuluyor mu?",
    a: "Evet. Tedarikçi bazında fiyat geçmişi, karşılaştırma raporu ve alış faturası girişi mevcuttur.",
  },
  {
    kategori: "Stok & Maliyet",
    q: "Barkod desteği var mı?",
    a: "Evet. Barkod okuyucu ile hızlı stok girişi, satış ve sayım yapılabilir.",
  },
  {
    kategori: "CRM & Sadakat",
    q: "Müşteri kartı neleri kapsar?",
    a: "Ad-soyad, telefon, adres, doğum günü, sipariş geçmişi, favori ürün, toplam harcama ve sadakat puanı.",
  },
  {
    kategori: "CRM & Sadakat",
    q: "Happy Hour kampanyası nasıl kurulur?",
    a: "Saat, gün ve kategori bazlı kurallar tanımlar, kampanya otomatik olarak EPOS'ta etkinleşir.",
  },
  {
    kategori: "CRM & Sadakat",
    q: "Toplu e-posta/SMS gönderimi var mı?",
    a: "Evet. Segmentasyonu yaptığınız müşteri listelerine toplu e-posta kampanyası gönderebilirsiniz. SMS entegrasyonu ise 3. parti servis (Netgsm, İleti Merkezi) ile çalışır.",
  },
  {
    kategori: "CRM & Sadakat",
    q: "Sadakat puanı ne kadar esnek?",
    a: "Her ₺ için kaç puan, puan başına kaç ₺ indirim, hangi ürünlerde geçerli — tamamen sizin tanımınız.",
  },
  {
    kategori: "CRM & Sadakat",
    q: "Doğum günü otomasyonu var mı?",
    a: "Evet. Müşterinin doğum günü yaklaştığında otomatik kupon veya ikram mesajı gönderilir.",
  },
  {
    kategori: "Raporlama",
    q: "Günlük kapanış raporu nasıl gelir?",
    a: "Vardiya sonunda nakit, kart, yemek çeki ayrımıyla detaylı kapanış raporu çıkar. Kasa farkı varsa sistem otomatik uyarır.",
  },
  {
    kategori: "Raporlama",
    q: "Garson performansı nasıl ölçülüyor?",
    a: "Ciro, masa sayısı, ortalama servis süresi, iptal oranı ve tavsiye satış yüzdesi raporlanır.",
  },
  {
    kategori: "Raporlama",
    q: "İptal ve iade işlemleri denetleniyor mu?",
    a: "Her iptal/iade; yetkili kullanıcı, saat ve neden bilgisiyle loglanır. Şüpheli işlemler yönetim panelinde öne çıkar.",
  },
  {
    kategori: "Raporlama",
    q: "Raporları dışa aktarabilir miyim?",
    a: "Evet. Excel (XLSX), PDF ve CSV olarak dışa aktarım mümkündür. Muhasebe programlarına (Logo, Mikro, Netsis) direkt entegrasyon vardır.",
  },
  {
    kategori: "Raporlama",
    q: "Saatlik ve günlük yoğunluk grafiği var mı?",
    a: "Evet. Saatlik ciro, trafik ve servis yoğunluğu dashboardda grafikle gösterilir.",
  },
  {
    kategori: "Kurulum & Destek",
    q: "Kurulum ne kadar sürer?",
    a: "Tek şubede 1-2 iş günü. Menü, masa planı, kullanıcı ve cihaz entegrasyonu tamamlanır.",
  },
  {
    kategori: "Kurulum & Destek",
    q: "Eğitim veriyor musunuz?",
    a: "Evet. Yerinde temel eğitim + online destek eğitimleri ücretsiz olarak lisansa dahildir.",
  },
  {
    kategori: "Kurulum & Destek",
    q: "Destek saatleri nedir?",
    a: "7/24 çağrı merkezi ve yapay zeka destekli canlı sohbet botumuz aktiftir. Kritik arıza durumunda ortalama ilk cevap süresi 5 dakikadan kısadır.",
  },
  {
    kategori: "Kurulum & Destek",
    q: "Uzaktan destek nasıl alıyorum?",
    a: "AnyDesk / TeamViewer tabanlı uzak bağlantı ile destek ekibimiz anında cihazınıza erişir.",
  },
  {
    kategori: "Kurulum & Destek",
    q: "Mevcut POS'umdan veri taşıyabilir misiniz?",
    a: "Evet. Mevcut yazılımınızdan ürün, müşteri, adres ve sipariş geçmişi verileri taşınabilir.",
  },
  {
    kategori: "Fiyatlandırma",
    q: "Fiyatlandırma nasıl?",
    a: "Lisans + aylık destek modeli. Şube sayısı, kullanıcı sayısı ve modül seçimine göre özel teklif hazırlanır.",
  },
  {
    kategori: "Fiyatlandırma",
    q: "Demo deneyebilir miyim?",
    a: "Evet. Teklif formunu doldurun; uzmanımız 24 saat içinde demo kurulumu için sizinle iletişime geçsin.",
  },
  {
    kategori: "Fiyatlandırma",
    q: "Sözleşme süresi ne?",
    a: "Aylık veya yıllık ödeme seçenekleri mevcut. Yıllık anlaşmada ilave indirim sağlanır.",
  },
  {
    kategori: "Fiyatlandırma",
    q: "Ek modül sonradan eklenebilir mi?",
    a: "Evet. İhtiyacınıza göre modül eklenip çıkarılabilir. Lisans farkı prorata hesaplanır.",
  },
  {
    kategori: "Fiyatlandırma",
    q: "Donanım dahil mi?",
    a: "Donanım (POS terminali, yazıcı, el terminali, para çekmecesi) isteğe bağlıdır. Entegre tedarik desteği veriyoruz.",
  },
  {
    kategori: "Teknik",
    q: "Hangi donanımlar destekleniyor?",
    a: "Fiş yazıcı (Epson, Star), mutfak yazıcı (Bixolon), POS terminal (Ingenico, Verifone), el terminali (Android), barkod okuyucu, tartı — geniş donanım uyumluluğu.",
  },
  {
    kategori: "Teknik",
    q: "Veritabanı teknolojisi ne?",
    a: "Microsoft SQL Server (Express lisansı dahildir). Büyük şubeler için Standard/Enterprise lisansı önerilir.",
  },
  {
    kategori: "Teknik",
    q: "İnternet kesilince çalışır mı?",
    a: "Evet. Yerel ağda tamamen çalışmaya devam eder. İnternet açıldığında bulut senkronizasyonu otomatik devam eder.",
  },
  {
    kategori: "Teknik",
    q: "Güvenlik ve yetkilendirme nasıl?",
    a: "Rol bazlı yetkilendirme (admin, müdür, garson, kasiyer). Her işlem kullanıcı ve zaman damgalı olarak loglanır.",
  },
  {
    kategori: "Teknik",
    q: "Yedekleme otomatik mi?",
    a: "Evet. Günlük otomatik yedekleme + saatlik artırımlı yedek alır. İsterseniz AWS S3 / Google Drive'a şifrelenmiş yedek yollanır.",
  },
  {
    kategori: "Teknik",
    q: "Veri gizliliği için KVKK uyumlu mu?",
    a: "Evet. Müşteri verileri şifrelenmiş şekilde saklanır, veri işleme politikaları KVKK ile uyumludur.",
  },
  {
    kategori: "Teknik",
    q: "Entegrasyon (e-fatura, e-arşiv) var mı?",
    a: "Evet. GIB onaylı e-fatura / e-arşiv sağlayıcıları (Uyumsoft, Netsis, Logo, Nilvera) ile entegrasyon mevcuttur.",
  },
  {
    kategori: "Teknik",
    q: "Ödeme cihazı entegrasyonu hangi bankalar?",
    a: "Garanti, İş Bankası, Akbank, Yapı Kredi, Ziraat, Halkbank, Vakıfbank, Denizbank, QNB Finansbank ve çoğu ortak POS.",
  },
  {
    kategori: "Teknik",
    q: "API / 3. parti entegrasyon mümkün mü?",
    a: "Evet. REST API üzerinden sipariş, menü, stok ve müşteri verileri 3. parti uygulamalarla entegre edilebilir.",
  },
  {
    kategori: "Teknik",
    q: "Hangi muhasebe programlarıyla entegre?",
    a: "Logo, Mikro, Netsis, ETA, Luca ve Uyumsoft muhasebe programlarına direkt aktarım desteklenir.",
  },
  {
    kategori: "Teknik",
    q: "Mobil bildirim alabilir miyim?",
    a: "Evet. İşletme sahibi mobil uygulaması ile anlık ciro, iptal uyarısı ve kritik stok bildirimleri alırsınız.",
  },
];
