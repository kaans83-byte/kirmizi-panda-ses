"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { disciplines } from "@/lib/consulting";

// Öne çıkan geniş danışmanlık kartı — ana hizmet grid'i içinde tam satır kaplar.
// Ana sayfada yalnızca ÖZET gösterir; uzun listeler /hizmetler/[slug] sayfalarında.
export function ConsultingFeatured() {
  const reduce = useReducedMotion();
  const strategy = disciplines[0]; // Strateji ve Danışmanlık
  const Icon = strategy.icon;
  const areas = disciplines.slice(1); // 5 alt danışmanlık alanı

  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 transition-shadow duration-300 hover:shadow-glow-lg sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,hsl(var(--primary)/0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.15]" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            {strategy.badge && <Badge variant="red">{strategy.badge}</Badge>}
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{strategy.title}</h3>
          <p className="mt-3 max-w-xl text-balance leading-relaxed text-muted-foreground">
            Üretime başlamadan önce <span className="font-medium text-foreground">analiz ve strateji</span>{" "}
            sunuyoruz. Reklam, yapay zekâ, dijital dönüşüm, prodüksiyon ve büyüme süreçleriniz için
            uygulanabilir bir yol haritası çıkarıyoruz.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/hizmetler/strateji-danismanligi">
                Danışmanlığı Keşfet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/teklif?konu=strateji-danismanligi">Danışmanlık Talebi</Link>
            </Button>
          </div>
        </div>

        {/* Alt danışmanlık alanları — özet linkler (detay ayrı sayfalarda) */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {areas.map((d) => {
            const AreaIcon = d.icon;
            return (
              <Link
                key={d.slug}
                href={`/hizmetler/${d.slug}`}
                className="group/area flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3.5 py-3 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <AreaIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 truncate">{d.navLabel}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover/area:text-primary" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
