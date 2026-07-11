"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SloganRotator } from "@/components/slogan-rotator";
import { company } from "@/data/company";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="cta-title">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          {/* Kırmızı gradyan arka plan */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-[hsl(0_80%_45%)] to-[hsl(0_70%_30%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />

          <SloganRotator className="mx-auto mb-4 h-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/80" />
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Markaların Geleceğini Birlikte Tasarlıyoruz
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-white/85">
            Strateji, yapay zekâ, reklam prodüksiyonu, ses, görüntü, yazılım ve dijital büyüme —
            hepsi tek çatı altında.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary shadow-lg hover:bg-white/90 hover:text-primary"
            >
              <Link href="/#iletisim">
                Projemi Gönder
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/20"
            >
              <Link href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
