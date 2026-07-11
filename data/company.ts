// ---------------------------------------------------------------------------
// Şirket / iletişim tek kaynağı.
// Tüm bileşenler ve yapısal veri (schema) bu dosyadan beslenir.
// Bağlantılar bileşenlerin içine sabit yazılmaz — buradan yönetilir.
//
// ⚠️ Yayın öncesi gerçek değerlerle güncelleyin:
//   - googleBusinessUrl: Google Business Profile PAYLAŞIM bağlantısı
//     (ör. https://g.page/r/XXXX veya https://maps.app.goo.gl/XXXX).
//     Google ARAMA sonucu URL'si KULLANMAYIN.
//   - googleMapsEmbedUrl: Haritalar > Paylaş > Yer Yerleştir (embed) bağlantısı.
//   - Sosyal medya bağlantıları (boş bırakılanlar arayüzde otomatik gizlenir).
// ---------------------------------------------------------------------------

export type WorkingHour = { label: string; value: string };

export const company = {
  companyName: "Kırmızı Panda AI Reklam Ajansı",
  legalName: "Kırmızı Panda AI Reklam Ajansı",
  description:
    "Strateji, yapay zekâ, reklam prodüksiyonu, ses, görüntü, yazılım ve dijital büyüme çözümlerini tek çatı altında sunan yaratıcı teknoloji ajansı.",

  // Adres
  address: "İstanbul, Türkiye",
  city: "İstanbul",
  region: "İstanbul",
  postalCode: "",
  country: "Türkiye",
  countryCode: "TR",

  // İletişim
  phone: "+90 532 662 24 18",
  phoneHref: "+905326622418",
  email: "kirmizipandaajans@gmail.com",
  website: process.env.NEXT_PUBLIC_SITE_URL || "https://kirmizipanda.com",

  // Google
  googleBusinessUrl: "https://share.google/PXhmWSQMlHdFOMepL", // Google paylaşım bağlantısı
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=İstanbul,+Türkiye&z=11&output=embed", // TODO: Haritalar > Paylaş > Yer Yerleştir (embed) bağlantısı ile değiştirin (share.google linki iframe'e gömülemez)
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=İstanbul%2C+T%C3%BCrkiye", // TODO: gerçek konum

  // Sosyal medya (boş = gizli)
  instagramUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
  whatsappUrl: "https://wa.me/905326622418",

  // Görseller (schema için)
  logo: "/icon.svg",
  image: "/opengraph-image",

  // Çalışma saatleri — arayüzde gösterilir
  workingHours: [
    { label: "Pazartesi – Cuma", value: "09:00 – 18:00" },
    { label: "Cumartesi – Pazar", value: "Kapalı" },
  ] as WorkingHour[],

  // Çalışma saatleri — schema.org openingHours biçimi
  schemaOpeningHours: ["Mo-Fr 09:00-18:00"],
};

export type SocialKey = "google" | "linkedin" | "instagram" | "youtube" | "whatsapp";

export type SocialLink = { key: SocialKey; label: string; url: string };

// Arayüz için: yalnızca bağlantısı OLAN platformlar.
export const socialLinks: SocialLink[] = (
  [
    { key: "google", label: "Google Business", url: company.googleBusinessUrl },
    { key: "linkedin", label: "LinkedIn", url: company.linkedinUrl },
    { key: "instagram", label: "Instagram", url: company.instagramUrl },
    { key: "youtube", label: "YouTube", url: company.youtubeUrl },
    { key: "whatsapp", label: "WhatsApp", url: company.whatsappUrl },
  ] as SocialLink[]
).filter((s) => s.url.length > 0);

// Schema sameAs için: profil bağlantıları (WhatsApp hariç).
export const sameAsLinks: string[] = [
  company.googleBusinessUrl,
  company.linkedinUrl,
  company.instagramUrl,
  company.youtubeUrl,
].filter((u) => u.length > 0);
