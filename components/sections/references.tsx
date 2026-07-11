"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { referenceSectors } from "@/lib/references";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function References() {
  const reduce = useReducedMotion();

  return (
    <section id="referanslar" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="referanslar-title">
      <div className="container">
        <SectionHeading
          eyebrow="Referanslar"
          title={<span id="referanslar-title">Güvenle Tercih Edilen Çözüm Ortağı</span>}
          description="Farklı sektörlerde faaliyet gösteren markalar için yaratıcı stratejiler, yapay zekâ çözümleri ve dijital büyüme projeleri geliştiriyoruz."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {referenceSectors.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={item}
                whileHover={reduce ? undefined : { y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-card px-4 py-8 text-center transition-shadow duration-300 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="relative text-sm font-semibold tracking-tight">{s.title}</span>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Referans markalarımız yakında bu alanda paylaşılacaktır.
        </p>
      </div>
    </section>
  );
}
