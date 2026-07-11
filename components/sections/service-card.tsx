"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      variants={item}
      whileHover={reduce ? undefined : { scale: 1.025, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 transition-shadow duration-300",
        "hover:shadow-glow",
        service.featured ? "border-primary/40" : "border-border hover:border-primary/40"
      )}
    >
      {/* Hover glow katmanı */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {service.badge && (
          <Badge variant="red" className="whitespace-nowrap">
            {service.badge}
          </Badge>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="relative mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        {service.items.map((it) => (
          <li key={it} className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
