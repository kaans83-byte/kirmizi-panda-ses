import {
  Clapperboard,
  BrainCircuit,
  ShoppingCart,
  Store,
  HeartPulse,
  Plane,
  Cpu,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type ReferenceSector = {
  title: string;
  icon: LucideIcon;
};

// Tek kaynak: sektör placeholder kartları.
// Gerçek referanslar geldiğinde yalnızca bu dosya güncellenir.
export const referenceSectors: ReferenceSector[] = [
  { title: "Reklam Prodüksiyonu", icon: Clapperboard },
  { title: "Yapay Zekâ Çözümleri", icon: BrainCircuit },
  { title: "E-Ticaret", icon: ShoppingCart },
  { title: "Perakende", icon: Store },
  { title: "Sağlık", icon: HeartPulse },
  { title: "Turizm", icon: Plane },
  { title: "Teknoloji", icon: Cpu },
  { title: "Kurumsal Markalar", icon: Building2 },
];
