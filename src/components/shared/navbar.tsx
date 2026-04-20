"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/modul/epos", label: "Modüller" },
  { href: "/ekranlar", label: "Ekranlar" },
  { href: "/sss", label: "SSS" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkinda", label: "Hakkında" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/resis-light.png"
            alt="Resis"
            width={96}
            height={28}
            className="h-7 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logo/resis-dark.png"
            alt="Resis"
            width={96}
            height={28}
            className="hidden h-7 w-auto dark:block"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/teklif-iste">Teklif iste</Link>
          </Button>
        </div>

        <button
          aria-label="Menü"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href="/teklif-iste">Teklif iste</Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
