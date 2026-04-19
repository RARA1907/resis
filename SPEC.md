# RESIS Tanıtım Sitesi - Teknik Şartname

## 1. Proje Bilgileri
- **Proje Adı**: RESIS Tanıtım Sitesi
- **Tip**: Statik Tanıtım Sitesi
- **Teknoloji**: Next.js 14 + React + TypeScript + TailwindCSS
- **Hosting**: Vercel (ücretsiz)

## 2. Tasarım Kararları

### 2.1 Renk Paleti
| Renk | Kod | Kullanım |
|------|-----|---------|
| **Beyaz** | `#FFFFFF` | Ana arka plan |
| **Gren** | `#F8FAF8` | İkincil arka plan |
| **Koyu Gren** | `#1A1A1A` | Metin |
| **Vurgu (Mavi)** | `#2563EB` | Butonlar, linkler |
| **Açık Mavi** | `#DBEAFE` | Hover arka plan |

### 2.2 Tipografi
- **Başlık**: Inter (Google Fonts) - Bold
- **Gövde**: Inter - Regular
- **Boyutlar**:
  - H1: 56px / 64px line-height
  - H2: 40px / 48px
  - H3: 24px / 32px
  - Body: 16px / 24px
  - Küçük: 14px / 20px

### 2.3 Boşluk Sistemi
- Base: 4px
- Container max-genişlik: 1200px
- Section boşluk: 96px (üst/alt)
- Kart boşluk: 24px
- Buton padding: 16px 32px

## 3. Sayfa Yapısı

### 3.1 Shared Components
- **Navbar**: Logo + Linkler + "Demo İndir" butonu (sticky)
- **Footer**: Copyright + Linkler + Sosyal

### 3.2 Ana Sayfa (`/`)
1. **Hero Bölümü**
   - Büyük başlık: "Restoran Yönetiminde Yeni Dönem"
   - Alt metin: "Tüm operasyonunuzu tek platformda yönetin"
   - 2 CTA: "Demo İndir" (primary), "Özellikler" (secondary)
   - Arka plan: Minimal gradient

2. **Öne Çıkan 4 Özellik** (Grid - 4 kolon)
   - Her kart: İkon + Başlık + Kısa açıklama

3. **İstatistikler** (Opsiyonel - Firmanın verilerine göre)
   - "500+ İşletme"
   - "10.000+ Kullanıcı"

4. **Özellik Listesi** (Alternating sections)
   - Sol: görsel, Sağ: metin (ters sıralı)
   - Konular:
     1. Cari Yönetimi
     2. Stok & Ürün
     3. Menü Sistemi
     4. Kasa & Banka
     5. Raporlama
     6. Kullanıcı Yönetimi

5. **CTA Section**
   - "Hemen Deneyin"
   - Email input + Submit

6. **Footer**

### 3.3 Özellikler Sayfası (`/ozellikler`)
- Tüm özelliklerin detaylı açıklaması
- Her özellik için alt başlık + paragraf

### 3.4 Kullanım Klavuzu (`/kullanim`)
- Arama kutusu
- Konu listesi (akkordion veya kart)

### 3.5 İndir Sayfası (`/indir`)
- Program açıklaması
- İndirme butonu
- Sistem gereksinimleri

### 3.6 İletişim Sayfası (`/iletisim`)
- İletişim formu (Name, Email, Message)
- Firmanın iletişim bilgileri

## 4. Teknik Gereksinimler

### 4.1 SEO
- Meta title, description
- Open Graph etiketleri
- Semantic HTML

### 4.2 Performance
- Image optimization (next/image)
- Lazy loading
- Minimal JS bundle

### 4.3 Responsive
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 5. Deployment

### Vercel Entegrasyonu
1. GitHub'a push et
2. Vercel'de import et
3. Deploy otomatik çalışır
4. Custom domain: `resis.com.tr`

## 6. İleride Eklenecekler
- Analytics (Google Analytics)
- Blog / Duyurular
- SSS sayfası