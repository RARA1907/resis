import Link from "next/link";

export default function Indir() {
  return (
    <main className="flex-1">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">RESIS'i İndirin</h1>
          <p className="text-xl text-gray-600 mb-12">
            Restoran ve cafe işletmeniz için kapsamlı yönetim yazılımını hemen indirin.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="text-6xl mb-4">💾</div>
            <h2 className="text-2xl font-bold mb-2">RESIS 2010</h2>
            <p className="text-gray-600 mb-6">En güncel sürüm</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                Şimdi İndir
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Boyut: ~50 MB | Windows XP ve üzeri
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">Sistem Gereksinimleri</h3>
            <ul className="text-gray-600 space-y-2 mb-12">
              <li>• İşletim Sistemi: Windows XP SP2 ve üzeri</li>
              <li>• RAM: En az 1 GB (2 GB önerilir)</li>
              <li>• Disk Alanı: 500 MB boş alan</li>
              <li>• .NET Framework 2.0 veya üzeri</li>
              <li>• Ekran Çözünürlüğü: 1024x768 ve üzeri</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Demo Hesap</h3>
            <ul className="text-gray-600 space-y-2 mb-12">
              <li>• Kullanıcı Adı: demo</li>
              <li>• Şifre: demo</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Destek</h3>
            <p className="text-gray-600 mb-4">
              Yardımcı olmamızı ister misiniz?{" "}
              <Link href="/iletisim" className="text-primary hover:underline">
                İletişim
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}