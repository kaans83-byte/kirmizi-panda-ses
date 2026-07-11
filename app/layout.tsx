import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company, sameAsLinks } from "@/data/company";
import { services } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kirmizipanda.com";
const TITLE = "Yapay Zekâ, Reklam Prodüksiyonu ve Dijital Büyüme";
const DESCRIPTION =
  "Kırmızı Panda AI Reklam Ajansı: strateji, yapay zekâ, reklam prodüksiyonu, reklam müziği, sinema FX, web, SEO ve dijital büyüme çözümlerini tek çatı altında sunan yaratıcı teknoloji ajansı.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} | Kırmızı Panda`,
    template: "%s | Kırmızı Panda AI Reklam Ajansı",
  },
  description: DESCRIPTION,
  keywords: [
    "AI reklam ajansı", "yapay zeka reklam", "reklam prodüksiyonu", "reklam filmi",
    "sinema FX", "reklam müziği", "sonic branding", "ses prodüksiyonu",
    "AI seslendirme", "web tasarım", "SEO", "GEO", "AEO",
    "performans pazarlaması", "dijital büyüme", "reklam ajansı",
  ],
  applicationName: "Kırmızı Panda AI Reklam Ajansı",
  authors: [{ name: "Kırmızı Panda AI Reklam Ajansı" }],
  creator: "Kırmızı Panda",
  publisher: "Kırmızı Panda",
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Kırmızı Panda AI Reklam Ajansı",
    title: `${TITLE} | Kırmızı Panda`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Kırmızı Panda`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kırmızı Panda AI Reklam Ajansı",
      inLanguage: "tr-TR",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#org`,
      name: company.companyName,
      legalName: company.legalName,
      url: SITE_URL,
      description: DESCRIPTION,
      email: company.email,
      telephone: company.phone,
      areaServed: "TR",
      slogan: "Yaratıcılık, Yapay Zekâ ve Teknolojiyi Aynı Masada Buluşturuyoruz.",
      logo: `${SITE_URL}${company.logo}`,
      image: `${SITE_URL}${company.image}`,
      priceRange: "₺₺",
      openingHours: company.schemaOpeningHours,
      ...(sameAsLinks.length > 0 ? { sameAs: sameAsLinks } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: company.email,
        telephone: company.phone,
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
      founder: [
        { "@type": "Person", name: "Ayşe Bengi Dinç", jobTitle: "Kurucu Ortak & Kreatif Direktör" },
        {
          "@type": "Person",
          name: "Kaan Sinan Dinç",
          jobTitle: "Kurucu Ortak & Teknoloji Direktörü (CTO)",
        },
      ],
      knowsAbout: [
        "Reklam Müziği", "Jingle", "Sonic Branding", "Ses Mühendisliği",
        "AI Seslendirme", "Müzik Prodüksiyonu", "Post Prodüksiyon", "Lisanslama",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: company.city,
        addressRegion: company.region,
        addressCountry: company.countryCode,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "AI Reklam ve Prodüksiyon Hizmetleri",
      serviceType: "AI Reklam Ajansı Hizmetleri",
      provider: { "@id": `${SITE_URL}/#org` },
      areaServed: "TR",
      description: DESCRIPTION,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ajans Hizmetleri",
        // Tek kaynak: lib/data.ts services başlıklarından üretilir.
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a href="#ana-icerik" className="skip-link">
          Ana içeriğe atla
        </a>
        {children}
      </body>
    </html>
  );
}
