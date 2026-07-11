import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Workflow } from "@/components/sections/workflow";
import { References } from "@/components/sections/references";
import { Technologies } from "@/components/sections/technologies";
import { Stats } from "@/components/sections/stats";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="ana-icerik">
        <Hero />
        <Services />
        <WhyUs />
        <Workflow />
        <References />
        <Technologies />
        <Stats />
        <Team />
        <Faq />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
