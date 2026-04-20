import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SITE } from "@/lib/utils";

const sections = [
  {
    title: "Modüller",
    links: [
      { href: "/modul/epos", label: "Yeni Nesil EPOS" },
      { href: "/modul/stok-maliyet", label: "Stok & Maliyet" },
      { href: "/modul/crm-sadakat", label: "CRM & Sadakat" },
      { href: "/modul/analiz-raporlama", label: "Analiz & Raporlama" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { href: "/ekranlar", label: "Ekran galerisi" },
      { href: "/kullanim", label: "Kullanım kılavuzu" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Firma",
    links: [
      { href: "/hakkinda", label: "Hakkımızda" },
      { href: "/referanslar", label: "Referanslar" },
      { href: "/teklif-iste", label: "Teklif iste" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">Resis</div>
            <p className="text-sm text-muted max-w-xs">
              {SITE.tagline}. Restoran, kafe ve fast-food için yeni nesil
              otomasyon.
            </p>
            <div className="text-xs text-muted">
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <div className="section-label mb-4">{section.title}</div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Resis. Tüm hakları saklıdır.
          </div>
          <div className="text-xs text-muted">
            Tasarım ve geliştirme:{" "}
            <a
              href="https://www.raraprojects.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              raraprojects
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
