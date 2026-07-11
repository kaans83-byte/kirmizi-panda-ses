import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kırmızı Panda AI Reklam Ajansı",
    short_name: "Kırmızı Panda",
    description:
      "Reklam müziği ve yapay zekâ destekli ses prodüksiyonu. Markanızın sesini oluşturuyoruz.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "tr-TR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
