import {
  Bot,
  Megaphone,
  SearchCheck,
  Sparkles,
  MessagesSquare,
  Code2,
  Clapperboard,
  AudioLines,
  Compass,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type BlogCategory = {
  name: string;
  icon: LucideIcon;
};

// Tek kaynak: blog kategori kartları.
export const blogCategories: BlogCategory[] = [
  { name: "Yapay Zekâ", icon: Bot },
  { name: "Reklam ve Kreatif", icon: Megaphone },
  { name: "SEO", icon: SearchCheck },
  { name: "GEO", icon: Sparkles },
  { name: "AEO", icon: MessagesSquare },
  { name: "Web Teknolojileri", icon: Code2 },
  { name: "Video Prodüksiyon", icon: Clapperboard },
  { name: "Ses Mühendisliği", icon: AudioLines },
  { name: "Marka Stratejisi", icon: Compass },
  { name: "Dijital Pazarlama", icon: TrendingUp },
];
