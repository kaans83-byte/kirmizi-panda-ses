"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { disciplines } from "@/lib/consulting";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function OtherDisciplines({ currentSlug }: { currentSlug: string }) {
  const others = disciplines.filter((d) => d.slug !== currentSlug);

  return (
    <section className="scroll-mt-24 py-24 sm:py-28" aria-labelledby="diger-alanlar-title">
      <div className="container">
        <SectionHeading
          eyebrow="Diğer Danışmanlık Alanları"
          title={<span id="diger-alanlar-title">İhtiyacınıza en uygun alanı seçin</span>}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {others.map((d) => {
            const Icon = d.icon;
            return (
              <motion.div key={d.slug} variants={item}>
                <Link
                  href={`/hizmetler/${d.slug}`}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 text-base font-semibold tracking-tight">
                      {d.title}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {d.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
