"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgencyHeroVisual } from "@/components/home/AgencyHeroVisual";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Arka plan efektleri */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid radial-fade opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[440px] w-[440px] rounded-full bg-primary/20 blur-[90px]" aria-hidden="true" />

      <div className="container grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Yaratıcı AI Reklam Ajansı
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">Yaratıcılık ve </span>
            <span className="text-gradient-red">Yapay Zekâ</span>
            <span className="text-gradient"> ile Markanızı Büyütüyoruz</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            <span className="font-medium text-foreground">Fikirden algoritmaya, ekrandan sonuca.</span>{" "}
            Strateji, reklam prodüksiyonu, yapay zekâ, ses, görüntü, web ve dijital büyüme
            çözümlerini tek çatı altında sunan yaratıcı teknoloji ajansı.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/#iletisim">
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#hizmetler">
                <Play className="h-4 w-4" />
                Portfolyomuzu İncele
              </Link>
            </Button>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> AI Prodüksiyon & Reklam Filmi
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Reklam Müziği & Ses
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Web · SEO · Performans
            </span>
          </motion.div>
        </div>

        {/* Çok disiplinli ajans görseli (kendi giriş/parallax animasyonlarını yönetir) */}
        <div className="w-full">
          <AgencyHeroVisual />
        </div>
      </div>
    </section>
  );
}
