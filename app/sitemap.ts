import type { MetadataRoute } from "next";
import { disciplineSlugs } from "@/lib/consulting";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kirmizipanda.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const consulting: MetadataRoute.Sitemap = disciplineSlugs.map((slug) => ({
    url: `${SITE_URL}/hizmetler/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Not: /teklif işlevsel bir form sayfasıdır ve noindex'tir; sitemap'e dahil edilmez.
  return [...home, ...consulting];
}
