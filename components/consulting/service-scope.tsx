"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function ServiceScope({ services }: { services: string[] }) {
  return (
    <section className="scroll-mt-24 py-20 sm:py-24" aria-labelledby="kapsam-title">
      <div className="container">
        <SectionHeading
          align="left"
          eyebrow="Kapsam"
          title={<span id="kapsam-title">Bu danışmanlıkta neleri birlikte ele alıyoruz?</span>}
          description="Analiz, strateji, uygulama planı, ekip yönlendirmesi ve sonuç takibini kapsayan uçtan uca bir hizmet."
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.li
              key={s}
              variants={item}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground/90">{s}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
