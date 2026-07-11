"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { consultingWorkModel } from "@/lib/consulting";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function ConsultingWorkModel() {
  return (
    <section
      id="calisma-modeli"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-28"
      aria-labelledby="calisma-modeli-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Danışmanlık Çalışma Modeli"
          title={<span id="calisma-modeli-title">Analizden ölçüme, 5 adımlı süreç</span>}
          description="Danışmanlığı bir toplantı değil; başı ve sonu belli, sonuç odaklı bir çalışma olarak yürütüyoruz."
        />

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 max-w-3xl space-y-4"
        >
          {consultingWorkModel.map((step) => (
            <motion.li
              key={step.no}
              variants={item}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-base font-bold text-primary">
                {step.no}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
