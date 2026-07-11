"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDiscipline } from "@/lib/consulting";
import { company } from "@/data/company";

const EASE = [0.22, 1, 0.36, 1] as const;

export function DisciplineHero({ slug }: { slug: string }) {
  const reduce = useReducedMotion();
  const discipline = getDiscipline(slug);
  if (!discipline) return null;
  const Icon = discipline.icon;
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid radial-fade opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="container max-w-4xl">
        {/* Breadcrumb */}
        <motion.nav
          {...fade(0)}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/#hizmetler" className="transition-colors hover:text-foreground">
            Hizmetler
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{discipline.title}</span>
        </motion.nav>

        <motion.div {...fade(0.08)} className="mt-8 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          {discipline.badge && <Badge variant="red">{discipline.badge}</Badge>}
        </motion.div>

        <motion.h1
          {...fade(0.14)}
          className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
        >
          {discipline.heading}
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
        >
          {discipline.description}
        </motion.p>

        <motion.div {...fade(0.26)} className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href={`/teklif?konu=${discipline.slug}`}>
              Danışmanlık Talebi Oluştur
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Ücretsiz Ön Görüşme
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
