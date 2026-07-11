export type TechCategory = {
  category: string;
  items: string[];
};

// Tek kaynak: kullanılan teknolojiler (monochrome; hover'da kırmızı).
export const techCategories: TechCategory[] = [
  {
    category: "Yapay Zekâ",
    items: ["ChatGPT", "Claude", "Gemini", "Midjourney", "Runway", "Veo", "ElevenLabs"],
  },
  {
    category: "Otomasyon",
    items: ["n8n", "Make", "MCP", "API Integrations"],
  },
  {
    category: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    category: "Veri",
    items: ["Google Analytics 4", "Google Tag Manager", "Search Console", "Looker Studio"],
  },
  {
    category: "Altyapı",
    items: ["PostgreSQL", "Supabase", "Cloudflare"],
  },
];
