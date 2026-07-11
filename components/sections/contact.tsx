import { MapPin, Phone, Mail, Globe, Clock, MapPinned, ArrowUpRight, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { company, socialLinks } from "@/data/company";

export function Contact() {
  const googleHref = company.googleBusinessUrl || company.googleMapsDirectionsUrl;

  return (
    <section id="iletisim" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="iletisim-title">
      <div className="container">
        <SectionHeading
          eyebrow="İletişim"
          title={<span id="iletisim-title">Projenizi Birlikte Konuşalım</span>}
          description="Yeni bir marka mı oluşturuyorsunuz, mevcut markanızı büyütmek mi istiyorsunuz? Ekibimiz sizin için doğru stratejiyi oluşturmaya hazır."
        />

        {/* Ofis bilgileri + Form */}
        <div className="mt-16 grid items-start gap-6 lg:grid-cols-[1fr_1.15fr]">
          <aside className="rounded-2xl border border-border bg-card p-7 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight">İletişim Bilgileri</h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <IconBox><MapPin className="h-5 w-5" aria-hidden="true" /></IconBox>
                <span>
                  <Label>Adres</Label>
                  <span className="block font-medium">{company.address}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconBox><Phone className="h-5 w-5" aria-hidden="true" /></IconBox>
                <span>
                  <Label>Telefon</Label>
                  <a href={`tel:${company.phoneHref}`} className="block font-medium hover:text-primary">
                    {company.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconBox><Mail className="h-5 w-5" aria-hidden="true" /></IconBox>
                <span>
                  <Label>E-posta</Label>
                  <a href={`mailto:${company.email}`} className="block font-medium hover:text-primary">
                    {company.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconBox><Globe className="h-5 w-5" aria-hidden="true" /></IconBox>
                <span>
                  <Label>Web Sitesi</Label>
                  <a href={company.website} className="block font-medium hover:text-primary">
                    {company.website.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconBox><Clock className="h-5 w-5" aria-hidden="true" /></IconBox>
                <span>
                  <Label>Çalışma Saatleri</Label>
                  {company.workingHours.map((h) => (
                    <span key={h.label} className="block font-medium">
                      {h.label}: <span className="text-muted-foreground">{h.value}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            {socialLinks.length > 0 && (
              <div className="mt-7 border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Hızlı Bağlantılar
                </h4>
                <SocialLinks links={socialLinks} className="mt-3" />
              </div>
            )}
          </aside>

          <ContactForm />
        </div>

        {/* Bizi Google'da İnceleyin */}
        <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-primary/30 bg-[#0b0b0d]/70 p-7 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
              <MapPinned className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Bizi Google’da İnceleyin</h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                Google Business Profile sayfamız üzerinden konumumuzu görüntüleyebilir, yol tarifi
                alabilir ve işletme bilgilerimize ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a
              href={googleHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business Profile'i yeni sekmede aç"
            >
              Google Business Profile’i Aç
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Harita + Yol Tarifi */}
        <div className="mt-6">
          <GoogleMap
            src={company.googleMapsEmbedUrl}
            title={`${company.companyName} ofis konumu — Google Haritalar`}
          />
          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              {company.city} · Uzaktan ve yerinde çalışıyoruz.
            </p>
            <Button asChild variant="outline">
              <a
                href={company.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Haritalar'da yol tarifi al (yeni sekmede açılır)"
              >
                <Navigation className="h-4 w-4" />
                Yol Tarifi Al
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
      {children}
    </span>
  );
}
