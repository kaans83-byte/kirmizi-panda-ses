"use client";

import { MapPin, Linkedin, Instagram, Youtube, MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialKey, SocialLink } from "@/data/company";

const iconMap: Record<SocialKey, LucideIcon> = {
  google: MapPin,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export function SocialLinks({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  if (links.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {links.map((s) => {
        const Icon = iconMap[s.key];
        return (
          <li key={s.key} className="group relative">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (yeni sekmede açılır)`}
              title={s.label}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-glow"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Tooltip */}
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {s.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
