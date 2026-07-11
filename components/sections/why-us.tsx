"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="neden-biz"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
      aria-labelledby="neden-biz-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Neden Kırmızı Panda?"
          title={<span id="neden-biz-title">Fark yaratan premium ses üretimi</span>}
          description="20 yılı aşkın deneyim, stüdyo kalitesi ve en yeni yapay zekâ teknolojilerini tek çatı altında birleştiriyoruz."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((r) => (
            <motion.article
              key={r.title}
              variants={item}
              whileHover={reduce ? undefined : { scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div
                className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/40 text-3xl"
                role="img"
                aria-label={r.title}
              >
                {r.emoji}
              </div>
              <h3 className="relative mt-6 text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
