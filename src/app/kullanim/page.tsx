"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";

export default function Kullanim() {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.content.toLowerCase().includes(search.toLowerCase())
  );

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = [];
    }
    acc[topic.category].push(topic);
    return acc;
  }, {} as Record<string, typeof topics>);

  return (
    <main className="flex-1">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Kullanım Kılavuzu</h1>
          <p className="text-xl text-gray-600 mb-8">
            RESIS programını nasıl kullanacağınızı öğrenin. Aşağıdaki konulardan birini seçerek başlayabilirsiniz.
          </p>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Konu ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-8">
            {Object.entries(groupedTopics).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-xl font-bold mb-4 text-primary">{category}</h2>
                <Accordion
                  items={items.map((item) => ({
                    title: item.title,
                    content: item.content,
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const topics = [
  {
    category: "Cari İşlemleri",
    title: "Cari Tanımlama",
    content: "Cari tanımlamak için cari işlemleri sekmesinden cari tanımlama bölümü tıklanır. 'Yeni' butonuna tıklanarak cari kartı açılır. Cari türü kısmında belirlenen seçeneklerden (müşteri, tedarikçi, müşteri personel) istenen seçilir. Cari kart otomatik olarak atanır. Fatura adresi, şehir, ülke vs. gibi bilgiler girildikten sonra kaydet butonu ile bu işlem kaydedilir.",
  },
  {
    category: "Cari İşlemleri",
    title: "Cari Düzenleme",
    content: "Cari listeden düzenleme yapılacak carinin üzerine gelinir ve seçili hale getirilir. Bu işlemden sonra düzenleme yapılacak yerler düzenlenir ve kaydet butonu tıklanır.",
  },
  {
    category: "Cari İşlemleri",
    title: "Cari Görüntüleme",
    content: "Görüntüle butonu ile yapmış olduğumuz kayıtları kontrol edebiliriz ama üzerinde değişiklik yapamayız.",
  },
  {
    category: "Cari İşlemleri",
    title: "Telefon Rehberi",
    content: "Telefon rehberi butonu carilerin telefon numaralarını kayıt altına alabileceğimiz ve gerektiğinde buradan tahsis edebileceğimiz bölümdür.",
  },
  {
    category: "Stok İşlemleri",
    title: "Stok Tanımlama",
    content: "Kubede kullanılacak stokların bilgisayara tanıtılması için kullanılan bölümdür. Stok sekmesinden stok tanımlama bölümüne gelinerek stok kartı açılır. Sistem otomatik olarak kendisi stok kodunu oluşturur. Ekleyeceğimiz stok ürünü ile ilgili bilgiler girilir. Depo bilgisi bölümünden o stok ürününün hangi depoda bulunacağı bilgisi belirlenir. 'KAYDET' butonuna basıldığında işlem tamamlanmış olur.",
  },
  {
    category: "Stok İşlemleri",
    title: "Ürün Tanımlama",
    content: "Müşteriye satılacak ürünlerin ve kube üretimlerinin tanımlaması için kullanılır. Stok sekmesinden ürün tanımlarına gelinerek ürün kartı açılır. Sistem otomatik olarak kendisi ürün kodunu oluşturur. Ürün tanımlamada sadece 'Birim 1' kullanılır ve mutlaka ürünün adet mi gramaj mı olduğu belirtilmelidir. 'Satış fiyatı 1' kısmı menüdeki fiyattır. Depo bilgisi bölümünden ürünün bulunduğu depoyu da seçerek 'KAYDET' dediğimizde kayıt işlemi tamamlanmış olur.",
  },
  {
    category: "Stok İşlemleri",
    title: "Demirbaş Tanımlama",
    content: "Bu ekran stok tanımlama ve ürün tanımlama ekranı ile aynıdır. Stok sekmesinden demir başı tanımlarına girilerek demirbaş kartı açılır. Sistem otomatik olarak kendisi demirbaş kodunu oluşturur. Gerekli bilgiler girildikten sonra 'KAYDET' butonunu tıklarız ve işlem tamamlanmış olur.",
  },
  {
    category: "Stok İşlemleri",
    title: "Kategori Tanımlama",
    content: "Eklediğimiz ürünleri (ön yüzde) belirli kategoriler altına almak için bu sekmeyi kullanıyoruz. Stok sekmesinden kategori tanımlama sekmesine tıklandığında kategori adı bölümünden kategorinin adı yazılır. Yazıcı adı belirtilir. Kategori türünden kategorinin nerede gözükmesi istiyorsak (hızlı satış, paket, salon) o belirlenir. 'EKLE' dediğimizde kategori eklenmiş olur.",
  },
  {
    category: "Menü İşlemleri",
    title: "Menü Tanımlama",
    content: "Menü oluşturmak için bu sekmeyi kullanıyoruz. Stok sekmesinden menü tanımlama sekmesini tıklandığında menü kartı açılır. Menünün yazısının altındaki stok kodu sekmesinden tanımlamış olduğumuz menü seçilir. İçerik bölümünün altındaki stok kodu sekmesinden ise menünün içeriğini oluşturacak ürünleri seçilir. Tablodan menünün içerisine konulacak ürünleri görürüz. 'Aktar' dediğimizde menünün içeriği eklenmiş olur.",
  },
  {
    category: "Menü İşlemleri",
    title: "Menü İçerisine Muadil Ürün Tanımlama",
    content: "Buradan menü içersinde değişkenliği olan ürünleri tanımlamak için bu bölümü kullanırız. Örnek (kola yerine ayran isteme durumu veya parmak patates yerine elma patates isteme durumu). Stok sekmesinden Menü içeriğine muadil ürün tanımlama sekmesine gelinir ve menü seçilir. Ürün sekmesinin altından ürün seçilir. Muadil ürün sekmesinin altından muadil ürün seçilir. 'EKLE' sekmesini tıkladığımızda muadil ürünler belirlenmiş olur.",
  },
  {
    category: "Stok Hareketleri",
    title: "Stok Hareketleri (Giriş, Çıkış, Virman, Devir)",
    content: "Stokta (giriş, çıkış, virman, devir) gibi hareketleri takip etmek için bu sekmeyi kullanıyoruz. Yeni bir stok hareketi eklemek için 'YENİ' sekmesini tıklarız. Hareket tipini (giriş, çıkış, virman, devir) belirliyoruz. Stok sekmesinden ürünü belirliyoruz. Depo bölümünden bulunduğu depoyu belirleriz. Miktarını belirledikten sonra yeni kayıt eklemiş oluruz.",
  },
  {
    category: "Masa Yönetimi",
    title: "Kat Tanımlama",
    content: "Masa sekmesinden Kat Tanımlama sekmesi tıklanarak işlem yapılır. Birden fazla kata sahip olan işletmelerde katları isimlendirmek ve yeni katlar oluşturmak için bu sekmeyi kullanırız. Kat adını yazıp 'EKLE' dediğimizde işlem tamamlanmış olur.",
  },
  {
    category: "Masa Yönetimi",
    title: "Masa Tanımlama",
    content: "Bu bölüm yeni masa eklemek ya da kaldırmak, masa şekli, masa adı gibi özelliklerin belirlendiği bölümdür. Masa eklemek istiyorsak Yeni Masa sekmesi tıklanır. Masa özellikleri sekmesi tıklandığında ise masa adı, masa şekli gibi özellikleri ayarlayacağımız bir pencere açılır. Masa adı ve masa şekli belirlendikten sonra TAMAM sekmesi tıklanır ve işlem tamamlanmış olur.",
  },
  {
    category: "Üretim İşlemleri",
    title: "Ürün Reçetesi Tanımlama",
    content: "Kube üretim ya da menü içinde yapılan değişiklikler ve bir ürünün içeriğini oluşma için kullanılan bölümdür. Ürün reçetesi tanımlamaya girilerek stok kodu bölümündeki butona basarak reşetesini oluşturacağımız ürünü bularak aktar butonuyla bu tabloya aktarırız. Ardından içine ekleyeceğimiz stok ve ürünler için butonu kullanarak istediğimiz stok ya da ürüne ulaşabiliriz. Birim ve miktarları girildikten sonra 'ekle' dediğimizde ürün reçetesi eklenmiş olur.",
  },
  {
    category: "Üretim İşlemleri",
    title: "Üretim Bildirimi",
    content: "Üretim yapacağımız ürünü stok ihtiyacı tablolarını çıkartarak üretimden sonra elimizde kalacak stoklar ve üretim için ihtiyacımız olan stokların gösterildiği ekrandır. Yeni üretim açmak için YENİ ÜRETİM sekmesini tıklarız. Ürün sekmesindeki butona tıklayarak açılan pencereden stokta tanımlanan ürünü seçiyoruz. Alt kısmından elimizde bulunan ürün miktarını giriyoruz. Depoyu da seçtikten sonra ekle diyerek işlemi tamamlıyoruz.",
  },
  {
    category: "Devir ve Sayım",
    title: "Devir İşlemleri",
    content: "Devir, eğer programa işletmenin açılışı ile başlanılmadı ise elimizde bulunan malların sayımı yapılarak o stok ve ürünlerin sistemimize dahil edilme işlemi için kullanılan bir özelliktir. Bu sekme altında sayım işlemleri de yapılmaktadır. Sayım işletme içerisinde gerçekleştirdiğimiz peryodik sayım ile program arasındaki eşleştirmeyi sağlaması için kullanılan özelliktir.",
  },
  {
    category: "Devir ve Sayım",
    title: "Banka Devir",
    content: "Banka hesaplarımızın programda işlenen tutarlarının da eklenerek banka hesaplarımızı net bir şekilde takip etme işlemi için yapılmaktadır. Kırmızı ile seçilen kısım arama yapmanız için tasarlanmış kısımlar bulunmaktadır. Mavi ile seçili kısım ise kayıtlı bulunan çek listesini göstermektedir. Kahverengi ile seçili kısım ise kullanacağımız kayıt, düzeltme, değişiklik, silme işlemi ve ekrandan çıkma işlemlerini gerçekleştireceğimiz butonlar bulunmaktadır.",
  },
  {
    category: "Devir ve Sayım",
    title: "Cari Devir",
    content: "Carilerin var olan bakiyelerini sisteme dahil etme imkanı vermektedir. 'YENİ KAYIT' bölümünde işlem yapacağımız carinin seçimi için butonunu kullanarak car listesini getirerek aktarımı sağlarız. Saat ve tarih sistem saat ve tarihi otomatik gelir. Durum bölümünden borç veya alacak cariyi seçilir. Devredilen tutar girilerek kayıt işlemi gerçekleşir.",
  },
  {
    category: "Devir ve Sayım",
    title: "Kasa Devir",
    content: "Kasa kayıtlarının programa giriş aşamasında kayıt için kullanılır. 'YENİ KAYIT' bölümünde işleme kasa seçilerek başlanır. Tarih ve saat sistem saati olarak otomatik gelir. Kasanın kayıtlardaki durumuna göre tespit edilerek seçilir. Devir tutarı ve birimi girilerek kayıt gerçekleştirilir.",
  },
  {
    category: "Devir ve Sayım",
    title: "Stok-Ürün Sayım İşlemi",
    content: "Bu bölümde stok ve ürünlerin yapılan sayım sonrasında karşılaştırmak ve fireleri belirlemek amaçlı kullanılır. Üst kısımda arama yapmanız için bulunan özel sekmeler bulunmaktadır. 'YENİ KAYIT' bölümünde tarih ayarlanarak sayım yapan yetkili kişi, sayım numarası, sayım adı gibi kısımlar doldurulur. Hangi depo üzerinden sayım yapılacağı seçilir ve o depoya ait bilgiler gelir. Sayım kayıt altına alınabilir.",
  },
  {
    category: "Fatura ve İrsaliye",
    title: "İrsaliye İşlemleri",
    content: "Bu bölümde bize kesilen veya bizim kestiğimiz fatura ve irsaliyeleri kaydederek stoklarımızın kontrollerini düzgün ve kusursuz yapmamızı sağlar. 'İRSALİYE' bölümünde yapacağımız kayıt işlemini seçerek yeni tasarı açılır. Açılan ekranda eğer alış ile ilgili bir işlem yapıyor isek bize verilen fatura veya irsaliyeye göre kayıt yapmalıyız. Eğer satış ile ilgili bir işlem yapıyor isek bizim fatura bilgilerimize göre işlem yapmamız gerekmektedir.",
  },
  {
    category: "Fatura ve İrsaliye",
    title: "Fatura Kesme",
    content: "Cari seçilir bu cari nin daha önceki irsaliyelerini faturalaştıracağız. Cariyi seçtikten sonra bu bölümde butona basarak o cariye ait irsaliye listesini açar ve buradan seçtiğimiz tüm irsaliyeleri bu faturanın altına bağlarız. 'KAYDET' butonu ile kayıt altına alınır.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Kasa Tanımlama",
    content: "Para aktivasyonu olan kişi veya birimlerin para sevkiyatlarını ve yapılan işlemlerin izlerini tutmak için yapılan tanımlamalardır. 'YENİ KAYIT' bu pencereyi yeni bir kasa tanımlamak veya mevcut bir kasayı düzenlemek için kullanırız. Gerekli bilgiler girilir. Ön yüzde yapılan nakit satışlar bu kasanın altında toplanmasını istiyorsak bu sekmeyi işaretlemeliyiz.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Nakit Tahsilat",
    content: "Cari kayıtlarımızdan yapmış olduğumuz tahsilatların kaydedeceğimiz ekrandır. Buradan yapılan kayıtlar cari ekstralarda ve cari bakiyede görülecektir. 'YENİ KAYIT' butonu ile cariden tahsil edilen paranın kayıt altına alma işlemidir. Gerekli kısımları doldurarak kayıt altına alınır. Sistem üzerinde kayıtlı işlemleri görüntüleme imkanı da sağlanmaktadır.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Nakit Ödeme",
    content: "Bu işlem basamağında ise bizim carilere yapmış olduğumuz ödemeyi sergiler. NAKİT ÖDEME ile aynı düzenekte çalışır. 'YENİ KAYIT' bölümünde Cariye verilen paranın kayıt altına alma işlemidir. Gerekli kısımları doldurarak kayıt altına alınır.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Çek Tahsilat ve Ödeme",
    content: "Kasa sekmesinin altında bulunur. İşlem basamakları işleyişi olarak aynı temel mantık üzerine kurulmuştur. Bizim verdiğimiz çek ve bize verilen çek olarak iki kısımdan oluşmaktadır. 'YENİ KAYIT' butonundan çek ile ilgili gerekli bilgileri girerek kayıt altına almanız mümkündür.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Kasadan Kasaya Transfer",
    content: "Bu bölümde kasalar arasındaki para sevkiyatlarının kaydı tutulur. Satışta kasiyerin kasasına giren nakit tutarın akşam merkezi yönetime devir kayıtlarının yapıldığı işlem basamağıdır. 'YENİ KAYIT' bölümünde tarih, saat bilgileri sabit gelmektedir. Kaynak kısmına paranın nereden çıktığı, hedef kasa kısmına ise paranın nereye giriş yapılacağı kasa isimleri seçilir. Miktar ve gerekli açıklama yapılarak kayıt altına alınır.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Şirket Giderleri",
    content: "Bu bölümde şirket içerisinde fiş veya fuara alınmadan yapılan giderlerin kayıt altına alındığı işlem basamağıdır. 'YENİ KAYIT' bölümünde yapılan giderlerin bilgileri girilir. Paranın hangi kasadan çıktığı, tutar ve istenildiği taktirde bunların gruplanmasını sağlayan özel kod sekmesini kullanarak kayıt altına alınabilir.",
  },
  {
    category: "Kasa İşlemleri",
    title: "Personel Maaş Ataması",
    content: "Personellerimize maaş, avans, pirim vb. ödemelerimizin kaydedilmesi aşamasıdır. Buradan kaydedilen tutarlar personelimizin bakiyesini takip edeceğimiz Cari Bakiye raporlarında alacaklı duruma alırız. Para ataması yapılacak personeli butonuna basarak personel listesini açılır. Bu listeden personeli seçili hale getirerek aktar butonu ile kayıt ekranına taşınır. Maaş tutarını girerek kayıt altına alabiliriz.",
  },
  {
    category: "Banka İşlemleri",
    title: "Banka Tanımlama",
    content: "Çalışmakta olduğumuz bankaları tanımlamak için bu kısmı kullanırız. 'Yeni banka tanımlaması' yapmak için sekmesini tıklarız ve gerekli yerleri dolduruyoruz. Banka kodu ve banka adı girildikten sonra kaydet dediğimizde yeni kayıt eklenmiş oluyor.",
  },
  {
    category: "Banka İşlemleri",
    title: "Kredi Kartı Tahsilatı",
    content: "Carilerin hesap ödemelerini kredi kartı ile yaptıkları durumlarda bu bölümü kullanıyoruz. 'Yeni kayıt eklemek için' sekmesi tıklanır ve yeni kayıt penceresi açılır. Gelen pencereden hesap no bölümünde hesap no seçilir. Cari bölümünde ise üzerinde işlem yapılacak cari seçilir. Tutar ve diğer gerekli bilgiler girildikten sonra kaydet diyerek işlemi tamamlıyoruz.",
  },
  {
    category: "Banka İşlemleri",
    title: "Hesap Virman İşlemleri",
    content: "Bankalar ve hesaplar arası para transferi yapmak için bu sekmeyi kullanıyoruz. 'Yeni kayıt eklemek için' sekmesi tıklanır. Gelen pencerede gerekli yerler doldurulur. İşlem türünde hangisiyle işlem yapmak istiyorsak seçilir. Aktaran ve aktarılan banka bölümünde ise bankalar seçilir. Kaydet ile işlem tamamlanır.",
  },
  {
    category: "Banka İşlemleri",
    title: "Hesaba Yatırılan ve Çekilen",
    content: "Hesaba yatan ve ya çekilen parasal işlemler için bu sekmeyi kullanıyoruz. Sol üst köşedeki açılır pencereden bölümünden hangisiyle işlem yapmak istiyorsak onu seçiyoruz. Yeni kayıt sekmesini tıklayarak yeni kayıt penceresini açıyoruz. Hesap no seçilir. Kasa bölümünden (merkez kasa, satış kasa) hangisine para yatırılacak veya çekilecek ise seçilir. Tutar kısmına miktar girilir. Gerekli yerlerde doldurulduktan sonra işlem tamamlanır.",
  },
  {
    category: "Tanımlamalar",
    title: "Genel Tanımlamalar",
    content: "Arka yüzdeki (Birim, Cari Katı Özel Kodu, Fiyat Birim, Girişme, Hesap Tipi, İstihdam Durumu, Kargo, Kargo Ödeme Şekli) gibi genel tanımların tanımlandığı bölümdür.",
  },
  {
    category: "Tanımlamalar",
    title: "Birim Tanımlama",
    content: "Arka yüzdeki stok ve ürün tanımlarında ürünlerin birimini bu bölümden tanımlıyoruz. Birimi yazdıktan sonra ekle diyoruz ve birim listesine ekleniyor.",
  },
  {
    category: "Tanımlamalar",
    title: "Fiyat Birim Tanımlama",
    content: "Arka yüzdeki fiyat birimlerinin tanımlandığı yerdir.",
  },
  {
    category: "Tanımlamalar",
    title: "Depo Tanımlama",
    content: "Depo ile ilgili tanımlamaların yapıldığı bölümdür. Yeni depo kayıt işlemi bu bölümden olur. Üst depo bölümünden depo seçersek seçmiş olduğumuz deponun alt depoları olarak yeni depolar ekleyebiliyoruz. Depo kodu, depo adı, boy, en, yükseklik gibi birimlerde doldurularak EKLE sekmesini tıkladığımızda depo ekleme işlemini sağlarız.",
  },
  {
    category: "Tanımlamalar",
    title: "Firma Tanımlama",
    content: "Firma ile ilgili genel tanımlamaların yapıldığı bölümdür. Şirket unvanı, adres, şehir, vergi dairesi, vergi numarası, alan kodu, telefon, fax ve logo ile ilgili bilgiler doldurularak firma tanımlama işlemi yapılır. Firma logosu eklemek için butona tıklarız ve resmin bulunduğu yeri seçerek logo ekleme işlemini gerçekleştiriyoruz.",
  },
  {
    category: "Tanımlamalar",
    title: "Personel Tanımlama",
    content: "Firmada çalışan personellerin genel bilgilerinin tutulduğu bölümdür. Adı, Soyadı, Tc kimlik numarası, Sicil numarası gibi genel bilgiler bu bölümde yer alır. 'YENİ' sekmesini tıklarız ve gerekli bilgiler doldurulduktan sonra KAYDET dediğimizde yeni kayıt gerçekleşmiş olur.",
  },
  {
    category: "Tanımlamalar",
    title: "Arka Yüz Kullanıcı İzinleri",
    content: "Arka yüz kullanıcı izinlerinin belirlendiği kısımdır. Arka yüzü kullanacak kişi kullanıcı adını ve şifresini aynı zamanda kullanım alanlarını buradan belirlemektedir. 'YENİ' sekmesini tıklarız. Personel adı bölümündeki butona tıklayarak açılan pencereden tanımlanmış olan personeli seçiyoruz. Kullanıcı adı, şifre ve yetkilerini belirliyoruz.",
  },
  {
    category: "Tanımlamalar",
    title: "Ön Yüz Kullanıcı İzni",
    content: "Ön yüzde yapılacak kullanıcı izinlerinin belirlendiği ekrandır. (Garson kodu, kasiyer kodu, süpervizor) gibi yetkilendirme kodları bu bölümden belirlenmektedir. İlk açılışta karşımıza bu ekran çıkacaktır. 'YENİ' sekmesini tıklarız. Personel türü açılır pencereden seçilmektedir.",
  },
  {
    category: "Tanımlamalar",
    title: "İndirim Saati Tanımlama",
    content: "Bu bölümden indirim yapmak istediğimiz gün ve saat aralığını belirliyoruz. Başlama tarihi, saati ve Bitiş tarihi ve saatini belirledikten sonra ekle diyoruz ve indirim saatini belirliyoruz.",
  },
  {
    category: "Tanımlamalar",
    title: "Ekstra Özellik Tanımlama",
    content: "Tanımlamış olduğumuz menülere ekstra özellik eklemek için bu bölümü kullanıyoruz. (acılı, acısız, soğanlı, soğansız). Ekstra özelliği yazdıktan sonra Kaydet butonunu tıklarız ve yeni kayıt eklenmiş oluyor.",
  },
  {
    category: "Tanımlamalar",
    title: "Ekstra Malzeme Eşleştirme",
    content: "Tanımlamış olduğumuz menülerin ekstra parasal değeri olan özelliklerini buradan belirliyoruz. Bu belirlediğimiz ürünleri sipariş verirken menü eklediğimizde özellik kısmını tıklarsak bu bölümden eklemiş olduğumuz özellikleri görebilirsiniz. Ürün kısmından seçmek istediğimiz menüyü seçiyoruz. Ekstra malzeme kısmından ise menüye eklenecek olan özelliği yazıyoruz. Miktar ve ek fiyatı belirliyoruz.",
  },
  {
    category: "Tanımlamalar",
    title: "Sıra Sıfırla",
    content: "Hızlı satışta adisyon no bölümünün alt kısmında bulunan sıra numarasını sıfırlamak için kullanıyoruz. Sıfırla butonuna bastığımızda işlem yapılmış oluyor.",
  },
  {
    category: "Raporlar",
    title: "Cari Raporları",
    content: "Cari üzerinde yapılan tüm kayıtları ve işlemleri buradan kontrol ederiz. Buradan cari bakiye ekstresi, cari bakiye son durum raporu, cari telefon raporu gibi raporların hepsini bu sekme altından görebiliyoruz.",
  },
  {
    category: "Raporlar",
    title: "Cari Bakiye Ekstresi",
    content: "Bu sekmeden carinin borcunu, alacağını ve yapmış olduğu işlemleri raporlayabiliriz. Özel olarak tek bir cariye bakmak istiyorsak tek cariyi seçiyoruz, tüm carileri görüntülemek istiyorsak tüm carileri seçiyoruz. Hangi tarihler arasındaki raporları görüntülemek istiyorsak başlangıç ve bitiş tarihi bölümünden bunları belirliyoruz.",
  },
  {
    category: "Raporlar",
    title: "Stok Raporları",
    content: "Yapılan stok hareketlerini girdileri çıktıları elimizde ne kadar kaldığını bu bölümden raporlayarak görebiliriz.",
  },
  {
    category: "Raporlar",
    title: "Depo Stok Durum Raporu",
    content: "Gruplama yöntemi bölümünden depo ya da stok sekmelerinden birini seçiyoruz hangisini raporlamak istiyorsak. Depo seçiyoruz. Butona tıklayarak açılan pencereden stoklarımız hangi depoda ise onu seçiyoruz. Stok depoyu seçtikten sonra aktar diyoruz ve depoyu seçilmiş oluyor. 'Raporla' sekmesini tıklarız.",
  },
  {
    category: "Raporlar",
    title: "Menü Raporları",
    content: "Menü Raporu: Menüyle ilgili sipariş raporlarını görebileceğimiz kısımdır. Hangi menüden satıldığı, menü içinde yapılan değişiklikler ve hangi garson tarafından satıldığını görebiliyoruz. İşlem tipi bölümünden hangisini kontrol etmek istiyorsak seçiyoruz.",
  },
  {
    category: "Raporlar",
    title: "Kasa Raporları",
    content: "Kasada yapılan hareketlerin girişlerin, çıkışların kontrol edip raporlayabileceğimiz bir raporlama sekmesidir. Hareket türünden hangisiyle ilgili raporlama almak istiyorsak seçiyoruz. Cari bölümden cariyi seçiyoruz. Kasa bölümünden kullanmakta olduğumuz kasayı seçiyoruz.",
  },
  {
    category: "Raporlar",
    title: "Banka Raporları",
    content: "Hesap Hareket Raporu: Banka üzerinden yapılan hesap hareketlerini kontrol edebileceğimiz ve raporlayabileceğimiz bir sekmedir.",
  },
];