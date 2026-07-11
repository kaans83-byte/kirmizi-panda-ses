import {
  Compass,
  BrainCircuit,
  Megaphone,
  TrendingUp,
  Clapperboard,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type Discipline = {
  slug: string;
  navLabel: string;
  title: string;
  heading: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  services: string[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
};

export const disciplines: Discipline[] = [
  {
    slug: "strateji-danismanligi",
    navLabel: "Strateji ve Danışmanlık",
    title: "Strateji ve Danışmanlık",
    heading: "Üretimden önce: analiz, strateji ve uygulanabilir yol haritası",
    description:
      "Markaların reklam, yapay zekâ, dijital dönüşüm, prodüksiyon ve büyüme süreçleri için uygulanabilir stratejiler geliştiriyoruz. Danışmanlığımız yalnızca fikir değil; analiz, strateji, uygulama planı, ekip yönlendirmesi ve sonuç takibini kapsayan profesyonel bir hizmettir.",
    icon: Compass,
    badge: "Stratejik Çözüm Ortağı",
    featured: true,
    services: [
      "Marka Stratejisi Danışmanlığı",
      "Reklam ve İletişim Stratejisi",
      "Kreatif Strateji Danışmanlığı",
      "Dijital Pazarlama Danışmanlığı",
      "Yapay Zekâ Danışmanlığı",
      "AI Dönüşüm Yol Haritası",
      "İçerik Stratejisi",
      "Sosyal Medya Stratejisi",
      "SEO Danışmanlığı",
      "GEO ve AEO Danışmanlığı",
      "E-Ticaret Danışmanlığı",
      "Performans Pazarlaması Danışmanlığı",
      "Medya Planlama Danışmanlığı",
      "Marka Konumlandırma",
      "Rakip Analizi",
      "Hedef Kitle Analizi",
      "Müşteri Yolculuğu Analizi",
      "Dijital Deneyim Danışmanlığı",
      "Web ve Teknoloji Danışmanlığı",
      "Prodüksiyon Danışmanlığı",
      "Reklam Müziği ve Sonic Branding Danışmanlığı",
    ],
    seoTitle: "Strateji ve Yapay Zekâ Danışmanlığı | Kırmızı Panda",
    seoDescription:
      "Kırmızı Panda; marka stratejisi, yapay zekâ dönüşümü, reklam, prodüksiyon, SEO, dijital büyüme ve sonic branding alanlarında profesyonel danışmanlık hizmetleri sunar.",
  },
  {
    slug: "yapay-zeka-danismanligi",
    navLabel: "Yapay Zekâ Danışmanlığı",
    title: "Yapay Zekâ Danışmanlığı",
    heading: "Yapay Zekâyı İşinize Nasıl Entegre Edeceğinizi Birlikte Planlıyoruz",
    description:
      "Şirketinizin mevcut süreçlerini analiz ediyor, yapay zekânın zaman, maliyet ve verimlilik sağlayabileceği alanları belirliyor ve uygulanabilir bir dönüşüm yol haritası hazırlıyoruz.",
    icon: BrainCircuit,
    badge: "AI Dönüşüm",
    services: [
      "AI Hazırlık Analizi",
      "Süreç ve İhtiyaç Analizi",
      "Kullanım Senaryosu Geliştirme",
      "AI Araç Seçimi",
      "Kurumsal AI Stratejisi",
      "AI Agent Planlaması",
      "Otomasyon Fırsat Analizi",
      "Veri ve Bilgi Tabanı Planlaması",
      "Güvenlik ve Yetkilendirme Planı",
      "Pilot Proje Tasarımı",
      "Ekip Eğitimi",
      "Uygulama ve Adaptasyon Desteği",
      "Performans ve Verimlilik Takibi",
    ],
    seoTitle: "Yapay Zekâ Danışmanlığı ve AI Dönüşüm Yol Haritası | Kırmızı Panda",
    seoDescription:
      "Süreç analizi, AI araç seçimi, otomasyon fırsatları ve kurumsal AI stratejisiyle şirketiniz için uygulanabilir bir yapay zekâ dönüşüm yol haritası hazırlıyoruz.",
  },
  {
    slug: "marka-reklam-danismanligi",
    navLabel: "Marka ve Reklam Danışmanlığı",
    title: "Marka ve Reklam Danışmanlığı",
    heading: "Markanız İçin Doğru Mesajı, Doğru Kanalı ve Doğru Kreatifi Belirliyoruz",
    description:
      "Marka konumlandırmadan kampanya performansına kadar; doğru mesajı, doğru kanalda ve doğru kreatifle buluşturan bütünsel bir iletişim stratejisi kuruyoruz.",
    icon: Megaphone,
    badge: "Marka & İletişim",
    services: [
      "Marka Konumlandırma",
      "Marka Mesajı Geliştirme",
      "İletişim Dili Oluşturma",
      "Kampanya Stratejisi",
      "Yıllık İletişim Planı",
      "Reklam Konsepti Geliştirme",
      "Kreatif Denetim",
      "Rakip Reklam Analizi",
      "Hedef Kitle Segmentasyonu",
      "Kanal Stratejisi",
      "Medya Bütçesi Planlama",
      "Kampanya Performans Analizi",
    ],
    seoTitle: "Marka ve Reklam Danışmanlığı | Kırmızı Panda",
    seoDescription:
      "Marka konumlandırma, mesaj geliştirme, kampanya ve kanal stratejisiyle markanız için doğru mesajı doğru kanalda doğru kreatifle buluşturuyoruz.",
  },
  {
    slug: "dijital-buyume-danismanligi",
    navLabel: "Dijital Büyüme Danışmanlığı",
    title: "Dijital Büyüme Danışmanlığı",
    heading: "Dijital Kanallarınızı Bir Bütün Olarak Analiz Ediyoruz",
    description:
      "Web, SEO, reklam ve sosyal medya kanallarınızı bütünsel olarak analiz ederek ölçülebilir, kısa-orta-uzun vadeli bir büyüme planı çıkarıyoruz.",
    icon: TrendingUp,
    badge: "Ölçülebilir Büyüme",
    services: [
      "Dijital Durum Analizi",
      "Web Sitesi Denetimi",
      "SEO Analizi",
      "Reklam Hesabı Analizi",
      "Sosyal Medya Analizi",
      "Dönüşüm Hunisi Analizi",
      "Kullanıcı Deneyimi Analizi",
      "E-Ticaret Büyüme Planı",
      "Müşteri Edinme Stratejisi",
      "Müşteri Tutundurma Stratejisi",
      "KPI Belirleme",
      "Raporlama Altyapısı",
      "3 Aylık, 6 Aylık ve 12 Aylık Büyüme Planı",
    ],
    seoTitle: "Dijital Büyüme Danışmanlığı | Kırmızı Panda",
    seoDescription:
      "Web, SEO, reklam ve sosyal medya kanallarınızı bütünsel analiz ederek KPI odaklı, ölçülebilir bir dijital büyüme planı hazırlıyoruz.",
  },
  {
    slug: "produksiyon-danismanligi",
    navLabel: "Prodüksiyon Danışmanlığı",
    title: "Prodüksiyon Danışmanlığı",
    heading: "Prodüksiyon Sürecini Bütçe, Kalite ve Hedefe Göre Planlıyoruz",
    description:
      "Reklam filmi ve içerik prodüksiyonunu bütçe, kalite ve hedeflerinize göre; geleneksel ve yapay zekâ yaklaşımlarını karşılaştırarak planlıyoruz.",
    icon: Clapperboard,
    badge: "Prodüksiyon Planlama",
    services: [
      "Reklam Filmi Prodüksiyon Planlaması",
      "AI Prodüksiyon Uygunluk Analizi",
      "Geleneksel ve AI Prodüksiyon Karşılaştırması",
      "Senaryo ve Storyboard Danışmanlığı",
      "Prodüksiyon Bütçesi Planlama",
      "Teknik Ekip ve Araç Seçimi",
      "Sinema FX Planlaması",
      "Post Prodüksiyon Yol Haritası",
      "Ses ve Müzik Stratejisi",
      "Yayın Formatı Planlama",
      "Çoklu Platform Adaptasyonu",
      "İçerik Versiyonlama Planı",
    ],
    seoTitle: "Prodüksiyon Danışmanlığı | Kırmızı Panda",
    seoDescription:
      "Reklam filmi ve içerik prodüksiyonunu bütçe, kalite ve hedefe göre; geleneksel ve AI prodüksiyon karşılaştırmasıyla planlıyoruz.",
  },
  {
    slug: "sonic-branding-danismanligi",
    navLabel: "Sonic Branding Danışmanlığı",
    title: "Sonic Branding Danışmanlığı",
    heading: "Markanızın Nasıl Göründüğü Kadar Nasıl Duyulduğunu da Planlıyoruz",
    description:
      "Markanızın işitsel kimliğini; sonic logo, reklam müziği, ses tonu ve seslendirme karakteriyle stratejik olarak tasarlıyoruz.",
    icon: Waves,
    badge: "İşitsel Kimlik",
    services: [
      "Marka Ses Kimliği Analizi",
      "Sonic Logo Stratejisi",
      "Reklam Müziği Stratejisi",
      "Jingle Danışmanlığı",
      "Ses Tonu ve Duygu Haritası",
      "Marka İçin Müzikal Yön Belirleme",
      "Seslendirme Karakteri Seçimi",
      "Podcast Ses Kimliği",
      "Kurumsal Intro ve Outro Planlaması",
      "Farklı Platformlar İçin Ses Kullanımı",
      "Müzik Lisanslama Danışmanlığı",
      "AI Ses Kullanım Politikası",
    ],
    seoTitle: "Sonic Branding Danışmanlığı | Kırmızı Panda",
    seoDescription:
      "Sonic logo, reklam müziği, ses tonu ve seslendirme karakteriyle markanızın işitsel kimliğini stratejik olarak tasarlıyoruz.",
  },
];

export const disciplineSlugs = disciplines.map((d) => d.slug);

export function getDiscipline(slug: string): Discipline | undefined {
  return disciplines.find((d) => d.slug === slug);
}

export type WorkStep = { no: string; title: string; description: string };

export const consultingWorkModel: WorkStep[] = [
  {
    no: "01",
    title: "Analiz",
    description: "Markanın mevcut durumunu, hedeflerini, kaynaklarını ve sorunlarını inceleriz.",
  },
  {
    no: "02",
    title: "Strateji",
    description: "Öncelikleri, fırsatları ve uygulanabilir çözüm yollarını belirleriz.",
  },
  {
    no: "03",
    title: "Yol Haritası",
    description: "Kısa, orta ve uzun vadeli aksiyon planı hazırlarız.",
  },
  {
    no: "04",
    title: "Uygulama Desteği",
    description: "Planın ekipler ve tedarikçiler tarafından doğru uygulanmasını destekleriz.",
  },
  {
    no: "05",
    title: "Ölçüm ve Geliştirme",
    description: "Sonuçları analiz eder, stratejiyi veriler doğrultusunda geliştiririz.",
  },
];

export type ConsultingPackage = {
  name: string;
  tagline: string;
  items: string[];
  highlighted?: boolean;
};

export const consultingPackages: ConsultingPackage[] = [
  {
    name: "Başlangıç Analizi",
    tagline: "Tek seferlik durum tespiti ve öneri raporu.",
    items: [
      "Mevcut durum analizi",
      "Temel sorunların belirlenmesi",
      "Öncelikli aksiyon listesi",
      "Kısa danışmanlık toplantısı",
      "Özet strateji raporu",
    ],
  },
  {
    name: "Stratejik Yol Haritası",
    tagline: "Markaya özel detaylı büyüme ve dönüşüm planı.",
    highlighted: true,
    items: [
      "Rakip analizi",
      "Hedef kitle analizi",
      "Kanal analizi",
      "AI fırsat analizi",
      "Kreatif ve iletişim stratejisi",
      "3–6 aylık aksiyon planı",
      "KPI önerileri",
    ],
  },
  {
    name: "Sürekli Danışmanlık",
    tagline: "Aylık strateji, denetim ve gelişim desteği.",
    items: [
      "Düzenli strateji toplantıları",
      "Kampanya ve içerik denetimi",
      "Reklam performans değerlendirmesi",
      "SEO ve AI görünürlük takibi",
      "Prodüksiyon yönlendirmesi",
      "Aylık rapor",
      "Sürekli iyileştirme önerileri",
    ],
  },
];
