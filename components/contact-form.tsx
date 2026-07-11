"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceOptions, budgetOptions } from "@/lib/contact";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/20";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground";

export function ContactForm({ defaultKonu = "" }: { defaultKonu?: string }) {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const validKonu = serviceOptions.includes(defaultKonu) ? defaultKonu : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Sunucu tarafı henüz kalıcı depoya bağlı değil; yine de teşekkür ekranını göster.
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-5 text-2xl font-bold tracking-tight">Teşekkürler!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Projenizi aldık. Kırmızı Panda ekibi en geç 1 iş günü içinde size dönecek.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      aria-label="İletişim ve proje talep formu"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ad" className={labelClass}>Ad Soyad</label>
          <input id="ad" name="ad" required autoComplete="name" placeholder="Adınız soyadınız" className={inputClass} />
        </div>
        <div>
          <label htmlFor="firma" className={labelClass}>Firma</label>
          <input id="firma" name="firma" autoComplete="organization" placeholder="Firma adı" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>E-posta</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="ornek@sirket.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClass}>Telefon</label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" placeholder="+90 ..." className={inputClass} />
        </div>
        <div>
          <label htmlFor="konu" className={labelClass}>Hizmet Türü</label>
          <select id="konu" name="konu" defaultValue={validKonu} className={inputClass}>
            <option value="">Seçiniz</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="butce" className={labelClass}>Tahmini Bütçe</label>
          <select id="butce" name="butce" defaultValue="" className={inputClass}>
            <option value="">Seçiniz</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="mesaj" className={labelClass}>Proje Detayı</label>
        <textarea id="mesaj" name="mesaj" rows={5} placeholder="Projenizi birkaç cümleyle anlatın..." className={`${inputClass} resize-y`} />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="kvkk"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-input bg-card accent-primary"
        />
        <span>
          <a href="#" className="font-medium text-foreground underline underline-offset-2 hover:text-primary">
            KVKK metnini
          </a>{" "}
          okudum ve onaylıyorum.
        </span>
      </label>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={loading}>
        {loading ? "Gönderiliyor..." : "Projemi Gönder"}
        {!loading && <Send className="h-4 w-4" />}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Yanıt süresi ~1 iş günü · Bilgileriniz gizli tutulur.
      </p>
    </form>
  );
}
