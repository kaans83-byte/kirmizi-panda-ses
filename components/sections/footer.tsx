import Link from "next/link";
import { AudioLines } from "lucide-react";
import { disciplines } from "@/lib/consulting";
import { SocialLinks } from "@/components/social-links";
import { company, socialLinks } from "@/data/company";

const serviceCol = {
  title: "Hizmetler",
  links: [
    { label: "Reklam Müziği", href: "/#hizmetler" },
    { label: "Ses Mühendisliği", href: "/#hizmetler" },
    { label: "AI Ses Teknolojileri", href: "/#hizmetler" },
    { label: "Seslendirme", href: "/#hizmetler" },
    { label: "Strateji ve Danışmanlık", href: "/hizmetler/strateji-danismanligi" },
  ],
};

const contactCol = {
  title: "İletişim",
  links: [
    { label: "İletişim / Teklif", href: "/#iletisim" },
    { label: "E-posta", href: `mailto:${company.email}` },
    { label: "Telefon", href: `tel:${company.phoneHref}` },
    { label: "Yol Tarifi", href: company.googleMapsDirectionsUrl },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-16" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Site alt bilgisi
      </h2>
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Reklam müziği, ses prodüksiyonu ve strateji danışmanlığıyla markanızın sesini ve
              yol haritasını birlikte tasarlıyoruz.
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  Bizi Takip Edin
                </h4>
                <SocialLinks links={socialLinks} className="mt-3" />
              </div>
            )}
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {serviceCol.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceCol.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Danışmanlık (tek kaynak: lib/consulting.ts) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              Danışmanlık
            </h3>
            <ul className="mt-4 space-y-2.5">
              {disciplines.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/hizmetler/${d.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {d.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {contactCol.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {contactCol.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-muted-foreground">
          Kırmızı Panda AI Reklam Ajansı; strateji, yapay zekâ, reklam prodüksiyonu, ses, görüntü,
          yazılım ve dijital büyüme çözümlerini tek çatı altında sunan yaratıcı teknoloji ajansıdır.
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} Kırmızı Panda AI Reklam Ajansı. Tüm hakları saklıdır.</span>
          <Link href="/gizlilik" className="transition-colors hover:text-primary">
            Gizlilik ve Çerez Politikası (KVKK)
          </Link>
        </div>
      </div>
    </footer>
  );
}
