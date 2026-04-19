export default function Iletisim() {
  return (
    <main className="flex-1">
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">İletişim</h1>
          <p className="text-xl text-gray-600 mb-12">
            RESIS hakkında sorularınız mı var? Bizimle iletişime geçin.
          </p>

          <form className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Ad Soyad</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Adınızı girin"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="E-posta adresinizi girin"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Mesajınız</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Mesajınızı yazın"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              Gönder
            </button>
          </form>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">E-posta</h3>
              <p className="text-gray-600">info@resis.com.tr</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600">+90 (XXX) XXX XXXX</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}