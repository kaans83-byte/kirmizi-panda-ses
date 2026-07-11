"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "kp-cookie-consent";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(choice: Choice) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage erişilemezse bandı yine de göster.
    }
    if (saved === "granted" || saved === "denied") {
      applyConsent(saved);
    } else {
      setVisible(true);
    }
  }, []);

  function decide(choice: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // sessizce geç
    }
    applyConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihi"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 glass p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Deneyiminizi iyileştirmek ve site trafiğini ölçmek için çerez kullanıyoruz.
            Analitik çerezler yalnızca onayınızla çalışır.{" "}
            <Link
              href="/gizlilik"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              Gizlilik politikası
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button variant="ghost" size="sm" onClick={() => decide("denied")}>
            Reddet
          </Button>
          <Button size="sm" onClick={() => decide("granted")}>
            Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
}
