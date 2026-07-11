# Kırmızı Panda — Reklam Müziği & AI Ses Prodüksiyonu

Kırmızı Panda AI Reklam Ajansı'nın **Reklam Müziği ve Ses Prodüksiyonu** landing page'i.
Premium, koyu tema (siyah-kırmızı-beyaz), Apple/Stripe/Linear seviyesinde temiz tasarım.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** (dark theme, CSS değişkenleri)
- **Framer Motion** (yumuşak scroll/hover animasyonları, sayaç, reduced-motion desteği)
- **Lucide React** (ikonlar)
- **Shadcn UI** deseni (Button, Card, Badge — `components/ui`)

## Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Yapı

```
app/
  layout.tsx            # SEO metadata, JSON-LD (@graph), Inter font, dark
  page.tsx              # bölümleri birleştirir
  globals.css           # Tailwind + tema tokenları + yardımcı sınıflar
  sitemap.ts robots.ts manifest.ts icon.svg
  opengraph-image.tsx twitter-image.tsx og-render.tsx  # 1200×630 dinamik OG (edge)
components/
  ui/                   # shadcn: button, card, badge
  motion/reveal.tsx     # Reveal / Stagger animasyon sarmalayıcıları
  animated-counter.tsx  # görünürlükte sayan istatistik
  section-heading.tsx   # ortak başlık
  sections/             # navbar, hero, studio-illustration, service-card,
                        # services, why-us, workflow, stats, cta, footer
lib/
  data.ts               # tüm içerik (hizmetler, neden-biz, iş akışı, istatistik)
  utils.ts              # cn()
```

## Bölümler

Hero → Hizmetler (öne çıkan geniş **Danışmanlık** kartı + 7 kart, hover glow) → Neden Biz (4 kart)
→ İş Akışı (5 adım timeline) → İstatistik (sayaç animasyonu) → CTA (kırmızı gradient) → Footer.

## Danışmanlık (Strateji) alanı

Danışmanlık, ajansın stratejik gücünü gösteren ana hizmet olarak konumlandırılmıştır.

- **Ana sayfa:** hizmetler grid'inin üstünde geniş, öne çıkan "Strateji ve Danışmanlık" kartı
  (`components/sections/consulting-featured.tsx`) — üretimden önce analiz & strateji mesajı.
- **6 SEO sayfası** — `app/hizmetler/[slug]/page.tsx` (SSG, `generateStaticParams` + `generateMetadata` + Service/BreadcrumbList JSON-LD):
  - `/hizmetler/strateji-danismanligi`
  - `/hizmetler/yapay-zeka-danismanligi`
  - `/hizmetler/marka-reklam-danismanligi`
  - `/hizmetler/dijital-buyume-danismanligi`
  - `/hizmetler/produksiyon-danismanligi`
  - `/hizmetler/sonic-branding-danismanligi`
- Her sayfa: alan hero'su → hizmet kapsamı → **5 adımlı çalışma modeli** → **3 paket (fiyatsız, teklife yönlendirir)** → diğer alanlar → danışmanlık CTA.
- **Veri:** `lib/consulting.ts` (alanlar, çalışma modeli, paketler). Prodüksiyon hizmetleri `lib/data.ts`'te — aynı hizmet iki dosyada tekrar tanımlanmaz.
- **Ana sayfa:** danışmanlık kartı, hizmetler grid'i **içinde** tam satır kaplayan ilk karttır (özet + 5 alan hızlı linki). Uzun listeler yalnızca `/hizmetler/[slug]` sayfalarında.
- **Navbar:** "Danışmanlık" dropdown (masaüstü) + accordion (mobil). **Footer:** Hizmetler'de "Strateji ve Danışmanlık" + ayrı "Danışmanlık" sütunu. Sitemap tüm URL'leri içerir.

## Teklif / İletişim formu

- **`/teklif`** — SSR form sayfası (`app/teklif/page.tsx` + `components/teklif-form.tsx`).
  `?konu=<slug>` ile ilgili hizmet ön-seçilir (ör. `/teklif?konu=yapay-zeka-danismanligi`).
- Tüm danışmanlık ve "Teklif Al" CTA'ları buraya bağlıdır (hero, paketler, danışmanlık CTA, navbar, home).
- **`/api/teklif`** — POST; şu an yalnızca loglar (üretimde DB/e-posta servisine bağlanmalı).

## Özelleştirme

- **İçerik:** `lib/data.ts`
- **Renk/tema:** `app/globals.css` → `:root` (özellikle `--primary`)
- **Metinler/SEO:** `app/layout.tsx`

## Notlar

- Yayın öncesi `NEXT_PUBLIC_SITE_URL`'i gerçek alan adıyla ayarlayın (canonical/sitemap/OG bunu kullanır).
- WhatsApp/e-posta bağlantılarındaki numara ve adresi güncelleyin (`cta.tsx`, `footer.tsx`).
- OG görseli için `app/noto-sans.ttf` gömülü fonttur; edge runtime'da 1200×630 PNG üretir.
```
