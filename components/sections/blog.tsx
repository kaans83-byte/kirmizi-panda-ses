"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { blogCategories } from "@/lib/blog";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Blog() {
  const reduce = useReducedMotion();

  return (
    <section
      id="blog"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
      aria-labelledby="blog-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title={<span id="blog-title">Bilgi Paylaştıkça Değer Katar</span>}
          description="Yapay zekâ, reklam, prodüksiyon ve dijital büyüme dünyasındaki güncel gelişmeleri paylaşıyoruz."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {blogCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.name}
                variants={item}
                whileHover={reduce ? undefined : { y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-shadow duration-300 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="relative text-sm font-semibold leading-tight tracking-tight">
                  {cat.name}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Blog içeriklerimiz çok yakında bu kategorilerde yayında olacak.
        </p>
      </div>
    </section>
  );
}
