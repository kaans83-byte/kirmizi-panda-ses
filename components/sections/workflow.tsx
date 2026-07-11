"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { workflow } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Workflow() {
  const reduce = useReducedMotion();

  return (
    <section id="is-akisi" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="is-akisi-title">
      <div className="container">
        <SectionHeading
          eyebrow="Çalışma Modeli"
          title={<span id="is-akisi-title">Bir Proje Nasıl Hayata Geçiyor?</span>}
          description="Keşiften büyümeye; şeffaf ve öngörülebilir bir süreçle, her aşamada sizi bilgilendiriyoruz."
        />

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4"
        >
          {/* Bağlantı çizgisi (masaüstü) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent md:block" />

          {workflow.map((step) => (
            <motion.li key={step.no} variants={item} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-primary/30 bg-background text-lg font-bold text-primary shadow-[0_0_30px_-8px_hsl(var(--primary)/0.6)]">
                {step.no}
                {!reduce && (
                  <span className="absolute inset-0 -z-10 rounded-2xl bg-primary/10 animate-pulse-ring" />
                )}
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
