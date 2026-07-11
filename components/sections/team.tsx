"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { team } from "@/lib/team";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Team() {
  const reduce = useReducedMotion();

  return (
    <section
      id="ekip"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
      aria-labelledby="ekip-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Kurucu Ekip"
          title={<span id="ekip-title">Kırmızı Panda’nın arkasındaki ekip</span>}
          description="Yaratıcı vizyon ve teknoloji derinliğini tek çatı altında birleştiren kurucular."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {team.map((m) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.name}
                variants={item}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:border-primary/40 hover:shadow-glow sm:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  {/* Baş harf avatarı (gerçek fotoğraf yok) */}
                  <span
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[hsl(0_80%_38%)] text-xl font-bold text-white shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.7)]"
                    aria-hidden="true"
                  >
                    {m.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight">{m.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {m.role}
                    </p>
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
