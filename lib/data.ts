// Tek veri kaynağı ilkesi:
//  - Ana hizmetler (film/AI prodüksiyon, ses, web, SEO, performans): bu dosya (`services`).
//  - Strateji ve Danışmanlık hizmetleri: `lib/consulting.ts` (tekrar tanımlanmaz).
// Ana sayfadaki danışmanlık kartı ve /hizmetler/[slug] sayfaları consulting.ts'ten beslenir.
import {
  Music4,
  AudioLines,
  Bot,
  Mic2,
  Disc3,
  SlidersHorizontal,
  ShieldCheck,
  Clapperboard,
  WandSparkles,
  Code2,
  SearchCheck,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  badge?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "AI Prodüksiyon & Reklam Filmi",
    description: "Yapay zekâ destekli reklam filmi, sosyal içerik ve görsel prodüksiyon.",
    icon: Clapperboard,
    items: [
      "Reklam Filmi",
      "Generative Video",
      "AI Görsel Üretimi",
      "Sosyal Medya İçeriği",
      "Storyboard & Senaryo",
      "Ürün Tanıtım Videosu",
      "Kurumsal Film",
      "Reels & TikTok",
    ],
  },
  {
    title: "Sinema FX",
    description: "Görsel efekt, kompozisyon ve sinematik post prodüksiyon.",
    icon: WandSparkles,
    items: [
      "VFX & CGI",
      "Green Screen / Kompozisyon",
      "Motion Graphics",
      "Sinematik Efektler",
      "Renk Düzenleme (Grading)",
      "3D & Animasyon",
      "Title & Jenerik",
    ],
  },
  {
    title: "Reklam Müziği",
    description: "Markanıza özel, akılda kalan besteler ve sonic branding.",
    icon: Music4,
    items: [
      "TV Reklam Müziği",
      "Dijital Reklam Müziği",
      "YouTube Reklam Müziği",
      "Spotify Reklam Müziği",
      "Kurumsal Jingle",
      "Sonic Branding",
      "Marka Ses Kimliği",
      "Kampanya Müzikleri",
    ],
  },
  {
    title: "Ses Mühendisliği",
    description: "Stüdyo kalitesinde kayıt, mix ve mastering süreçleri.",
    icon: AudioLines,
    items: [
      "Profesyonel Ses Kayıt",
      "Mixing",
      "Mastering",
      "Podcast Düzenleme",
      "Broadcast Mix",
      "Dolby Atmos Hazırlığı",
      "Diyalog Temizleme",
      "Gürültü Giderme",
      "Ses Restorasyonu",
    ],
  },
  {
    title: "AI Ses Teknolojileri",
    description: "Yapay zekâ ile çok dilli, hızlı ve ölçeklenebilir ses üretimi.",
    icon: Bot,
    badge: "Yeni Nesil Teknoloji",
    featured: true,
    items: [
      "AI Voice Over",
      "AI Seslendirme",
      "AI Dublaj",
      "AI Ses Klonlama",
      "AI Çok Dilli Seslendirme",
      "AI Lip Sync",
      "AI Podcast Düzenleme",
      "AI Noise Removal",
      "AI Sound Enhancement",
      "AI Voice Enhancement",
    ],
  },
  {
    title: "Profesyonel Seslendirme",
    description: "Reklamdan e-learning'e her formata uygun profesyonel sesler.",
    icon: Mic2,
    items: [
      "Reklam Seslendirmesi",
      "Kurumsal Tanıtım",
      "Belgesel",
      "Eğitim Videoları",
      "Podcast",
      "YouTube",
      "IVR",
      "Santral Sesleri",
      "E-Learning",
    ],
  },
  {
    title: "Müzik Prodüksiyonu",
    description: "Beste, film ve oyun müziğinden kurumsal jingle'lara.",
    icon: Disc3,
    items: [
      "Beste",
      "Film Müziği",
      "Oyun Müziği",
      "Podcast Intro",
      "Outro",
      "Kurumsal Intro",
      "Event Müzikleri",
      "Background Music",
    ],
  },
  {
    title: "Post Prodüksiyon",
    description: "Sound design, foley ve yayına hazır final master.",
    icon: SlidersHorizontal,
    items: [
      "Sound Design",
      "Foley",
      "Ambiyans Tasarımı",
      "Sinematik Efektler",
      "Reklam Ses Mix",
      "Loudness Standard",
      "Final Master",
    ],
  },
  {
    title: "Lisanslama",
    description: "Telif güvenli, ticari kullanıma uygun lisanslama çözümleri.",
    icon: ShieldCheck,
    items: [
      "Royalty Free",
      "Ticari Lisans",
      "YouTube Güvenli",
      "Spotify Uyumlu",
      "Telif Danışmanlığı",
      "Marka Kullanım Hakları",
    ],
  },
  {
    title: "Web & Yazılım",
    description: "Hızlı, mobil uyumlu ve dönüşüm odaklı web siteleri ve dijital ürünler.",
    icon: Code2,
    items: [
      "Kurumsal Web Sitesi",
      "Landing Page",
      "E-Ticaret",
      "Web Uygulaması",
      "UI/UX Tasarım",
      "Next.js & React Geliştirme",
      "Otomasyon & Entegrasyon",
      "Bakım & Destek",
    ],
  },
  {
    title: "SEO & AI Search",
    description: "Klasik SEO’nun ötesinde; ChatGPT, Gemini ve AI aramalarında görünürlük.",
    icon: SearchCheck,
    badge: "GEO / AEO",
    items: [
      "Teknik SEO",
      "İçerik & Anahtar Kelime",
      "GEO (Generative Engine Optimization)",
      "AEO (Answer Engine Optimization)",
      "Yerel SEO",
      "Core Web Vitals & Hız",
      "Schema & Yapısal Veri",
      "Raporlama",
    ],
  },
  {
    title: "Performans Pazarlaması",
    description: "Google ve Meta reklamlarında bütçenizi ölçülebilir getiriye çeviririz.",
    icon: ChartNoAxesCombined,
    items: [
      "Google Ads",
      "Meta Ads",
      "YouTube Reklamları",
      "Dönüşüm Optimizasyonu",
      "Yeniden Pazarlama",
      "A/B Test",
      "Analitik & Raporlama",
      "Kampanya Yönetimi",
    ],
  },
];

// Hizmet kartlarını gruplamak için kategoriler (tek kaynak).
export type ServiceCategory = "Görsel & Film" | "Ses & Müzik" | "Dijital & Büyüme";

export const serviceCategoryOrder: ServiceCategory[] = [
  "Görsel & Film",
  "Ses & Müzik",
  "Dijital & Büyüme",
];

export const serviceCategoryDesc: Record<ServiceCategory, string> = {
  "Görsel & Film": "Reklam filmi, AI prodüksiyon ve görsel efekt.",
  "Ses & Müzik": "Reklam müziği, ses mühendisliği, seslendirme ve prodüksiyon.",
  "Dijital & Büyüme": "Web & yazılım, SEO/AI görünürlük ve performans pazarlaması.",
};

// Başlık → kategori eşlemesi.
export const serviceCategoryByTitle: Record<string, ServiceCategory> = {
  "AI Prodüksiyon & Reklam Filmi": "Görsel & Film",
  "Sinema FX": "Görsel & Film",
  "Reklam Müziği": "Ses & Müzik",
  "Ses Mühendisliği": "Ses & Müzik",
  "AI Ses Teknolojileri": "Ses & Müzik",
  "Profesyonel Seslendirme": "Ses & Müzik",
  "Müzik Prodüksiyonu": "Ses & Müzik",
  "Post Prodüksiyon": "Ses & Müzik",
  "Lisanslama": "Ses & Müzik",
  "Web & Yazılım": "Dijital & Büyüme",
  "SEO & AI Search": "Dijital & Büyüme",
  "Performans Pazarlaması": "Dijital & Büyüme",
};

export type Reason = {
  emoji: string;
  title: string;
  description: string;
};

export const reasons: Reason[] = [
  {
    emoji: "🎵",
    title: "Özgün Reklam Müzikleri",
    description: "Tamamen markanıza özel besteler.",
  },
  {
    emoji: "🎙️",
    title: "Profesyonel Ses Mühendisliği",
    description: "Stüdyo kalitesinde kayıt ve mastering.",
  },
  {
    emoji: "🤖",
    title: "Yapay Zekâ Destekli Ses",
    description: "En yeni AI teknolojileri ile çok dilli ses üretimi.",
  },
  {
    emoji: "🌍",
    title: "Global Yayın Standartları",
    description: "TV, Radyo, YouTube, Spotify ve dijital platformlara uygun teslim.",
  },
];

export type Step = {
  no: string;
  title: string;
  description: string;
};

export const workflow: Step[] = [
  { no: "01", title: "Keşif", description: "Markanızı, hedef kitlenizi ve ihtiyaçlarınızı analiz ediyoruz." },
  { no: "02", title: "Strateji", description: "Doğru kreatif, teknoloji ve iletişim planını oluşturuyoruz." },
  { no: "03", title: "Üretim", description: "Video, ses, tasarım, yazılım ve yapay zekâ çözümlerini üretiyoruz." },
  { no: "04", title: "Optimizasyon", description: "SEO, AI görünürlüğü ve reklam performansına göre tüm içerikleri optimize ediyoruz." },
  { no: "05", title: "Büyüme", description: "Sonuçları analiz ediyor, raporluyor ve sürekli geliştiriyoruz." },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 1000, suffix: "+", label: "Tamamlanan Proje" },
  { value: 50, suffix: "+", label: "Marka" },
  { value: 20, suffix: "+", label: "Yıllık Deneyim" },
  { value: 99, suffix: "%", label: "Müşteri Memnuniyeti" },
];
