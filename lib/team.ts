import { Palette, Cpu, type LucideIcon } from "lucide-react";

export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  icon: LucideIcon;
};

// Tek kaynak: kurucu ekip.
export const team: Member[] = [
  {
    name: "Ayşe Bengi Dinç",
    role: "Kurucu Ortak & Kreatif Direktör",
    initials: "AB",
    icon: Palette,
    bio: "Marka stratejisi, yaratıcı iletişim, reklam kampanyaları ve prodüksiyon süreçlerini yönetir. Fikir geliştirmeden yaratıcı yönetime kadar markaların etkili ve özgün hikâyeler oluşturmasına liderlik eder.",
  },
  {
    name: "Kaan Sinan Dinç",
    role: "Kurucu Ortak & Teknoloji Direktörü (CTO)",
    initials: "KS",
    icon: Cpu,
    bio: "Yapay zekâ çözümleri, web teknolojileri, SEO, AI optimizasyonu ve otomasyon sistemleri alanlarında ajansın teknoloji vizyonunu yönetir. Kreatif üretimi modern yazılım ve yapay zekâ altyapılarıyla birleştirerek markalar için ölçeklenebilir dijital çözümler geliştirir.",
  },
];
