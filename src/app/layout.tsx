import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESIS - Restoran Yönetim Yazılımı",
  description: "Restoran, cafe ve çubek işletmeleri için kapsamlı yönetim yazılımı. Stok, cari, kasa ve daha fazlasını tek platformda yönetin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}