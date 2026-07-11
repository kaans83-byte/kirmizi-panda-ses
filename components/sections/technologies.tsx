"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { techCategories } from "@/lib/technologies";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Technologies() {
  return (
    <section
      id="teknolojiler"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
      aria-labelledby="teknolojiler-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Teknolojilerimiz"
          title={<span id="teknolojiler-title">Gücümüzü Aldığımız Teknolojiler</span>}
          description="Dünyanın önde gelen yapay zekâ ve yazılım teknolojilerini yaratıcı süreçlerimizle birleştiriyoruz."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 space-y-8"
        >
          {techCategories.map((cat) => (
            <motion.div key={cat.category} variants={item} className="grid gap-4 sm:grid-cols-[160px_1fr] sm:items-start">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {cat.category}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {cat.items.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex cursor-default items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted-foreground grayscale transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:grayscale-0">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
