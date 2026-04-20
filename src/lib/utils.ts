import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Resis",
  tagline: "İşinize değer katan yeni nesil modüler çözümler",
  description:
    "Restoran, kafe ve fast-food için yeni nesil EPOS + stok + CRM + raporlama yazılımı. 7/24 AI destek.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://resis-sage.vercel.app",
  email: "rara@raraprojects.com",
  phone: "+90 532 000 00 00",
  whatsapp: "905320000000",
} as const;
