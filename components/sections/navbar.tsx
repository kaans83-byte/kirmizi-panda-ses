"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, AudioLines, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { disciplines } from "@/lib/consulting";

const links = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#referanslar", label: "Referanslar" },
  { href: "/#sss", label: "SSS" },
  { href: "/#ekip", label: "Ekip" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [deskConsult, setDeskConsult] = React.useState(false);
  const [mobConsult, setMobConsult] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openConsult = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDeskConsult(true);
  };
  const closeConsult = () => {
    closeTimer.current = setTimeout(() => setDeskConsult(false), 120);
  };

  const closeAll = () => {
    setOpen(false);
    setMobConsult(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 glass" : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Ana menü">
        <Link href="/" className="flex items-center gap-2.5" onClick={closeAll}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <AudioLines className="h-5 w-5" />
          </span>
          <span className="text-[15px] font-bold leading-none">
            Kırmızı Panda
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              AI Reklam Ajansı
            </span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/#hizmetler"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Hizmetler
          </Link>

          {/* Danışmanlık dropdown */}
          <div className="relative" onMouseEnter={openConsult} onMouseLeave={closeConsult}>
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={deskConsult}
              aria-haspopup="true"
              onClick={() => setDeskConsult((v) => !v)}
            >
              Danışmanlık
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", deskConsult && "rotate-180")}
              />
            </button>
            {deskConsult && (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 glass p-2 shadow-xl">
                  {disciplines.map((d) => {
                    const Icon = d.icon;
                    return (
                      <Link
                        key={d.slug}
                        href={`/hizmetler/${d.slug}`}
                        onClick={() => setDeskConsult(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        {d.navLabel}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/hizmetler/strateji-danismanligi">Danışmanlık</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/#iletisim">İletişim</Link>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobil menü */}
      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 glass md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            <Link
              href="/#hizmetler"
              onClick={closeAll}
              className="rounded-lg px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              Hizmetler
            </Link>

            {/* Danışmanlık accordion */}
            <button
              onClick={() => setMobConsult((v) => !v)}
              aria-expanded={mobConsult}
              className="flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              Danışmanlık
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobConsult && "rotate-180")} />
            </button>
            {mobConsult && (
              <div className="mb-1 ml-2 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                {disciplines.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/hizmetler/${d.slug}`}
                    onClick={closeAll}
                    className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
                  >
                    {d.navLabel}
                  </Link>
                ))}
              </div>
            )}

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
                className="rounded-lg px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}

            <Button asChild className="mt-2 w-full" onClick={closeAll}>
              <Link href="/#iletisim">İletişim</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
