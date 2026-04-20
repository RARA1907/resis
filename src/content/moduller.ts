import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Boxes,
  HeartHandshake,
  LineChart,
  CreditCard,
  Receipt,
  Phone,
  MapPin,
  Bell,
  Users,
  ClipboardList,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Mail,
  Gift,
  Calendar,
  PackageSearch,
  ScanBarcode,
  FileSpreadsheet,
  PieChart,
} from "lucide-react";

export interface ModulFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Modul {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  eyebrow: string;
  summary: string;
  features: ModulFeature[];
  benefits: string[];
  screens?: string[];
}

export const moduller: Modul[] = [
  {
    slug: "epos",
    icon: Cpu,
    eyebrow: "Modül 01",
    title: "Yeni Nesil Akıllı EPOS",
    subtitle: "Masa, adisyon ve tahsilat tek ekranda",
    summary:
      "Restoran, kafe ve fast-food işletmelerinin tümünde masa planlama, adisyon parçalama, çoklu ödeme yöntemi ve Caller ID destekli paket servis ile saniyeler içinde servis ve tahsilat.",
    features: [
      {
        icon: MapPin,
        title: "Akıllı masa planı",
        text: "Gerçek zamanlı durum, açık adisyon, garson ataması ve sürükle-bırak ile masa birleştirme/taşıma.",
      },
      {
        icon: Receipt,
        title: "Adisyon parçalama",
        text: "Tek masadan çoklu fiş kesimi, kişi/ürün bazlı bölme, ikram, iskonto ve iade yönetimi.",
      },
      {
        icon: CreditCard,
        title: "Çoklu ödeme",
        text: "Nakit, kredi kartı, açık hesap, yemek çeki (Multinet, Sodexo, Ticket, SetCard) tek adisyonda.",
      },
      {
        icon: Phone,
        title: "Caller ID paket servis",
        text: "Numara tanıma, müşteri adresi otomatik açılır, kurye takibi ve ETA bildirimi.",
      },
      {
        icon: Bell,
        title: "Mutfak ekranı (KDS)",
        text: "Sipariş direkt mutfağa düşer, bölüm bazlı yazıcı/ekran dağılımı, hazırlık süresi takibi.",
      },
      {
        icon: Users,
        title: "Garson performansı",
        text: "Aktif masa sayısı, ortalama servis süresi, iptal oranı ve tavsiye satış metriği.",
      },
    ],
    benefits: [
      "Servis süresini %30'a kadar azaltır",
      "Adisyon kaybını ve manuel hata oranını sıfırlar",
      "7/24 çalışan destek hattı ile servis duraksamaz",
      "Tüm şubeler tek merkezden yönetilebilir",
    ],
  },
  {
    slug: "stok-maliyet",
    icon: Boxes,
    eyebrow: "Modül 02",
    title: "Stok & Maliyet Kontrolü",
    subtitle: "Reçete bazlı otomatik stok, fire ve üretim maliyeti",
    summary:
      "Her satış, reçetedeki hammaddelere otomatik düşer. Üretim maliyetini anlık görün, fire ve sayım farkını kontrol altına alın, kârlılığınızı menü bazında takip edin.",
    features: [
      {
        icon: ClipboardList,
        title: "Reçete yönetimi",
        text: "Menü kalemleri için detaylı içerik listesi. Alt reçete, porsiyon ve birim dönüşüm destekli.",
      },
      {
        icon: PackageSearch,
        title: "Otomatik stok düşümü",
        text: "Her satışta hammadde stoğu anlık azalır, kritik seviyede uyarı gelir.",
      },
      {
        icon: AlertCircle,
        title: "Fire & sayım",
        text: "Dönem sonu fiziksel sayım, fire tanımlama, sayım farkının maliyete yansıması.",
      },
      {
        icon: ScanBarcode,
        title: "Barkod + tedarikçi",
        text: "Tedarikçi fiyat listesi, alış faturası, barkodla hızlı giriş.",
      },
      {
        icon: FileSpreadsheet,
        title: "Maliyet raporu",
        text: "Ürün bazlı üretim maliyeti, brüt kâr marjı ve menü mühendisliği raporları.",
      },
      {
        icon: TrendingUp,
        title: "Trend takibi",
        text: "Hammadde fiyat değişimini izler, kâr marjına etkisini gösterir.",
      },
    ],
    benefits: [
      "Hammadde kaybını ve sızıntıyı %20'ye kadar azaltır",
      "Kârsız menü kalemlerini ortaya çıkarır",
      "Dönemsel fiyat değişiminde otomatik uyarı",
      "İşletme sahibine net kârlılık dashboardu",
    ],
  },
  {
    slug: "crm-sadakat",
    icon: HeartHandshake,
    eyebrow: "Modül 03",
    title: "Müşteri Sadakati & CRM",
    subtitle: "Happy Hour, sadakat puanı, toplu iletişim",
    summary:
      "Müşterinizi tanıyın, tekrar eden siparişe dönüştürün. Puan, kampanya, Happy Hour, toplu e-posta ve SMS ile geri kazanım stratejisi tek platformda.",
    features: [
      {
        icon: Users,
        title: "Müşteri kartı",
        text: "Ad, telefon, doğum günü, sipariş geçmişi, favori ürünler ve demografi.",
      },
      {
        icon: Gift,
        title: "Sadakat puanı",
        text: "Her ₺'a puan kazandır, özel kampanyalar ile harcamaya dönüştür.",
      },
      {
        icon: Calendar,
        title: "Happy Hour",
        text: "Saat, gün ve kategori bazlı otomatik indirim şablonları.",
      },
      {
        icon: Mail,
        title: "Toplu e-posta & SMS",
        text: "Segmentasyona göre hedefli kampanya gönderimi, açılma oranı raporu.",
      },
      {
        icon: BarChart3,
        title: "Müşteri segmentasyonu",
        text: "En değerli müşterileri, uyuyan müşterileri ve yeni müşterileri otomatik gruplandırır.",
      },
      {
        icon: TrendingUp,
        title: "Geri kazanım",
        text: "Son 30 gündür gelmeyen müşteriye otomatik hatırlatma kampanyası.",
      },
    ],
    benefits: [
      "Tekrar eden müşteri oranını artırır",
      "Doğum günü ve özel gün kampanyalarını otomatik tetikler",
      "Sadakat programı ile ortalama sepet tutarını büyütür",
      "Kampanya ROI'sını canlı dashboardda izle",
    ],
  },
  {
    slug: "analiz-raporlama",
    icon: LineChart,
    eyebrow: "Modül 04",
    title: "Gelişmiş Analiz & Raporlama",
    subtitle: "Personel, kasiyer, iptal, iade ve nakit akışı",
    summary:
      "Günlük tahsilat dökümü, personel/garson performansı, iptal-iade denetimi, vardiya raporu ve yönetim dashboardu. İşletme sahibi için tek ekranda karar destek sistemi.",
    features: [
      {
        icon: PieChart,
        title: "Günlük kapanış",
        text: "Nakit, kart, yemek çeki ayrımı; vardiya sonu kasa tutanağı.",
      },
      {
        icon: Users,
        title: "Garson & kasiyer",
        text: "Ciro, iptal sayısı, ortalama servis süresi, tavsiye satış performansı.",
      },
      {
        icon: AlertCircle,
        title: "İptal & iade denetimi",
        text: "Her iptal işleminin nedeni, yetkili kullanıcısı ve saat kaydı.",
      },
      {
        icon: BarChart3,
        title: "Saatlik yoğunluk",
        text: "Hangi saatlerde ciro, trafik ve servis yoğunluğu zirveye çıkıyor?",
      },
      {
        icon: TrendingUp,
        title: "Ürün satış analizi",
        text: "En çok satanlar, kâr getirenler, hareket etmeyen stoklar.",
      },
      {
        icon: FileSpreadsheet,
        title: "Excel & PDF ihracat",
        text: "Tüm raporlar muhasebe için tek tıkla dışa aktarılır.",
      },
    ],
    benefits: [
      "İşletmeyi sayılarla yönetin, tahmin değil veri ile karar verin",
      "Vardiya ve personel performansını şeffaflaştırır",
      "Fire, iptal ve kasiyer hatalarını anında fark edersiniz",
      "Yatırım geri dönüşünü (ROI) canlı raporlar",
    ],
  },
];

export function getModulBySlug(slug: string): Modul | undefined {
  return moduller.find((m) => m.slug === slug);
}
