"use client";

import { motion, type Variants } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { stats } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Stats() {
  return (
    <section
      id="istatistik"
      className="scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="istatistik-title"
    >
      <h2 id="istatistik-title" className="sr-only">
        Rakamlarla Kırmızı Panda
      </h2>
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-16 sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />

          <motion.dl
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <dd className="text-4xl font-bold tracking-tight text-gradient-red sm:text-5xl lg:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
                  {s.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
