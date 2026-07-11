"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { consultingPackages } from "@/lib/consulting";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function ConsultingPackages() {
  const reduce = useReducedMotion();

  return (
    <section id="paketler" className="scroll-mt-24 py-24 sm:py-28" aria-labelledby="paketler-title">
      <div className="container">
        <SectionHeading
          eyebrow="Danışmanlık Paketleri"
          title={<span id="paketler-title">İhtiyacınıza göre üç çalışma biçimi</span>}
          description="Her marka farklıdır; kapsamı birlikte netleştirir, size özel bir teklif hazırlarız."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {consultingPackages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={item}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-7 transition-shadow duration-300",
                pkg.highlighted
                  ? "border-primary/50 shadow-glow"
                  : "border-border hover:border-primary/40 hover:shadow-glow"
              )}
            >
              {pkg.highlighted && (
                <Badge className="absolute -top-3 left-7">En Çok Tercih Edilen</Badge>
              )}
              <h3 className="text-xl font-semibold tracking-tight">{pkg.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.tagline}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 w-full"
                variant={pkg.highlighted ? "default" : "outline"}
              >
                <Link href={`/teklif?konu=${encodeURIComponent(pkg.name)}`}>
                  Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Fiyat ve süre; kapsamınıza göre teklif aşamasında birlikte belirlenir.
        </p>
      </div>
    </section>
  );
}
