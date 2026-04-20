# Resis Web

Resis Restoran Otomasyon Yazılımı — Tanıtım & Satış Sitesi.

**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion · Supabase (pgvector) · Gemini Flash 1.5

**Canlı:** https://resis-sage.vercel.app (geçici) → https://resis.com.tr (planlı)

---

## Geliştirme

```bash
npm install
cp .env.example .env.local   # env değerlerini doldur
npm run dev                   # localhost:3000
```

## Script'ler

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm start` | Production sunucusu |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript tip kontrolü |

## Klasör Yapısı

Proje-seviyesi klasör yapısı: [`../Docs/project_structure.md`](../Docs/project_structure.md).

- `src/app/` — App Router sayfa + layout
- `src/components/ui/` — Atom komponentler
- `src/components/shared/` — Navbar, Footer, vb.
- `src/components/features/` — Hero, Chatbot, Gallery, vb.
- `src/lib/` — Supabase, Gemini, RAG, utilities
- `public/` — Static assets (logo, screens, OG images)

## Deploy

Vercel'e bağlı. `main` branch'e push → otomatik deploy.

## Doküman

Proje kök klasöründeki `Docs/` altında:
- `PRD.md` — Ürün gereksinimleri
- `Implementation.md` — Faz-bazlı plan
- `UI_UX_doc.md` — Tasarım sistemi
- `Decision_log.md` — Mimari kararlar
- `SESSION_LOG.md` — Oturum kaydı (Mayk ↔ Claude sync)
