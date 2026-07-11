import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Gizlilik ve Çerez Politikası (KVKK)",
  description:
    "Kırmızı Panda AI Reklam Ajansı KVKK aydınlatma metni ve çerez politikası: hangi veriler işlenir, hangi amaçla, haklarınız ve başvuru yolları.",
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main id="ana-icerik">
        <section className="scroll-mt-24 pt-32 pb-24 sm:pt-40">
          <div className="container max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Yasal
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Gizlilik ve Çerez Politikası
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Son güncelleme: Temmuz 2026</p>

            <div className="prose-legal mt-12 space-y-10">
              <Section title="1. Veri Sorumlusu">
                <p>
                  Bu web sitesi ({company.website.replace(/^https?:\/\//, "")}) 6698 sayılı Kişisel
                  Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla{" "}
                  <strong>{company.companyName}</strong> tarafından işletilmektedir. Kişisel
                  verilerinizin işlenmesine ilişkin sorularınız için:{" "}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </Section>

              <Section title="2. İşlenen Kişisel Veriler">
                <p>Sitemiz aracılığıyla aşağıdaki kişisel veriler işlenebilir:</p>
                <ul>
                  <li>
                    <strong>İletişim / teklif formu:</strong> ad soyad, firma, e-posta, telefon,
                    ilgilendiğiniz hizmet, tahmini bütçe ve mesaj içeriği.
                  </li>
                  <li>
                    <strong>Analitik veriler (onayınıza bağlı):</strong> ziyaret edilen sayfalar,
                    cihaz/tarayıcı bilgisi, yaklaşık konum ve site kullanım istatistikleri (Google
                    Analytics 4 aracılığıyla, yalnızca çerez onayı verdiğinizde).
                  </li>
                  <li>
                    <strong>Teknik kayıtlar:</strong> sunucu tarafından tutulabilen IP adresi ve
                    erişim günlükleri (güvenlik ve işletim amacıyla).
                  </li>
                </ul>
              </Section>

              <Section title="3. İşleme Amaçları">
                <ul>
                  <li>Talep, teklif ve iletişim başvurularınızı yanıtlamak,</li>
                  <li>Sunduğumuz hizmetleri planlamak ve yürütmek,</li>
                  <li>Site performansını ve kullanıcı deneyimini ölçüp iyileştirmek,</li>
                  <li>Yasal yükümlülükleri yerine getirmek ve site güvenliğini sağlamak.</li>
                </ul>
              </Section>

              <Section title="4. Hukuki Sebepler">
                <p>Kişisel verileriniz KVKK md. 5 uyarınca şu sebeplere dayanılarak işlenir:</p>
                <ul>
                  <li>
                    <strong>Açık rıza:</strong> analitik çerezlerin kullanımı ve iletişim formunu
                    göndermeniz.
                  </li>
                  <li>
                    <strong>Sözleşmenin kurulması/ifası:</strong> talebinize yanıt vermek ve hizmet
                    sürecini yürütmek.
                  </li>
                  <li>
                    <strong>Meşru menfaat:</strong> site güvenliği ve temel işletim kayıtları.
                  </li>
                </ul>
              </Section>

              <Section title="5. Çerezler">
                <p>
                  Sitemiz, deneyiminizi iyileştirmek ve trafiği ölçmek için çerezler kullanır.
                  Çerezler yalnızca <strong>açık onayınızla</strong> çalışır (Google Consent Mode):
                </p>
                <ul>
                  <li>
                    <strong>Zorunlu / işlevsel:</strong> çerez tercihinizi hatırlamak için
                    tarayıcınızda küçük bir kayıt tutulur (localStorage). Onay gerektirmez.
                  </li>
                  <li>
                    <strong>Analitik çerezler:</strong> Google Analytics 4. Yalnızca çerez bandında
                    “Kabul Et” dediğinizde etkinleşir; “Reddet” derseniz analitik çerez yazılmaz.
                  </li>
                </ul>
                <p>
                  Tercihinizi istediğiniz zaman tarayıcınızın site verilerini (çerezler /
                  localStorage) temizleyerek sıfırlayabilir ve bandı yeniden görüntüleyebilirsiniz.
                </p>
              </Section>

              <Section title="6. Yurt İçi/Yurt Dışı Aktarım">
                <p>
                  Site; barındırma (Google Firebase / Cloud), analitik (Google Analytics) ve harita
                  (Google Maps) hizmetleri için Google altyapısını kullanır. Bu kapsamda verileriniz,
                  ilgili hizmetlerin sunucularında (yurt dışında da olabilir) işlenebilir. Bu aktarım,
                  hizmetin sağlanması ve verdiğiniz açık rıza çerçevesinde gerçekleşir.
                </p>
              </Section>

              <Section title="7. Saklama Süresi">
                <p>
                  Kişisel verileriniz, işlenme amacının gerektirdiği ve ilgili mevzuatın öngördüğü
                  süre boyunca saklanır; amaç ortadan kalktığında silinir, yok edilir veya anonim hâle
                  getirilir.
                </p>
              </Section>

              <Section title="8. KVKK Kapsamındaki Haklarınız">
                <p>KVKK md. 11 uyarınca; kişisel verilerinize ilişkin olarak:</p>
                <ul>
                  <li>İşlenip işlenmediğini öğrenme ve buna ilişkin bilgi talep etme,</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
                  <li>Silinmesini veya yok edilmesini isteme,</li>
                  <li>Düzeltme/silme işlemlerinin aktarıldığı kişilere bildirilmesini isteme,</li>
                  <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç çıkmasına itiraz etme,</li>
                  <li>Kanuna aykırı işleme nedeniyle zarara uğrarsanız giderilmesini talep etme</li>
                </ul>
                <p>haklarına sahipsiniz.</p>
              </Section>

              <Section title="9. Başvuru">
                <p>
                  Haklarınızı kullanmak için taleplerinizi{" "}
                  <a href={`mailto:${company.email}`}>{company.email}</a> adresine iletebilirsiniz.
                  Başvurularınız en kısa sürede ve en geç 30 gün içinde sonuçlandırılır.
                </p>
              </Section>

              <Section title="10. Güncellemeler">
                <p>
                  Bu politika zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır.
                </p>
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a:hover]:underline [&_li]:relative [&_li]:pl-5 [&_strong]:text-foreground [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-primary [&_ul>li]:before:content-['—']">
        {children}
      </div>
    </section>
  );
}
