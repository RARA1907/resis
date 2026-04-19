import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESIS - Restoran Yönetim Yazılımı",
  description: "Restoran, cafe ve çubek işletmeleri için kapsamlı yönetim yazılımı. Stok, cari, kasa ve daha fazlasını tek platformda yönetin.",
};

function Navbar() {
  return (
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
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
}