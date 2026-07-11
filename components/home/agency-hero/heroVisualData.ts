import {
  Sparkles,
  WandSparkles,
  AudioLines,
  Code2,
  SearchCheck,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";

export type HeroServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** Sahne içindeki merkez konumu (yüzde). */
  pos: { x: number; y: number };
  /** Bağımsız floating animasyon süresi (sn). */
  duration: number;
  /** Dikey salınım genliği (px). */
  floatY: number;
  /** Giriş animasyonu gecikmesi (sn). */
  delay: number;
};

// Tek kaynak: hero görselindeki 6 yörünge kartı.
export const heroServiceCards: HeroServiceCard[] = [
  {
    id: "ai",
    title: "AI Prodüksiyon",
    subtitle: "Generative Video",
    icon: Sparkles,
    pos: { x: 16, y: 24 },
    duration: 6.5,
    floatY: 10,
    delay: 0.45,
  },
  {
    id: "fx",
    title: "Sinema FX",
    subtitle: "VFX & CGI",
    icon: WandSparkles,
    pos: { x: 84, y: 22 },
    duration: 8,
    floatY: 12,
    delay: 0.53,
  },
  {
    id: "music",
    title: "Reklam Müziği",
    subtitle: "Sonic Branding",
    icon: AudioLines,
    pos: { x: 15, y: 52 },
    duration: 7,
    floatY: 9,
    delay: 0.61,
  },
  {
    id: "web",
    title: "Web & Yazılım",
    subtitle: "Digital Experience",
    icon: Code2,
    pos: { x: 85, y: 54 },
    duration: 5,
    floatY: 11,
    delay: 0.69,
  },
  {
    id: "seo",
    title: "SEO & AI Search",
    subtitle: "GEO & AEO",
    icon: SearchCheck,
    pos: { x: 20, y: 80 },
    duration: 7.5,
    floatY: 10,
    delay: 0.77,
  },
  {
    id: "growth",
    title: "Performans",
    subtitle: "Growth Marketing",
    icon: ChartNoAxesCombined,
    pos: { x: 80, y: 82 },
    duration: 5.5,
    floatY: 12,
    delay: 0.85,
  },
];
