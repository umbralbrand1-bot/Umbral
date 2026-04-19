import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { FinalCta } from "@/components/sections/home/final-cta";
import { CaseGrid } from "@/components/sections/casos/case-grid";

export const metadata: Metadata = {
  title: "Casos de estudio — Automatizaciones reales con IA",
  description:
    "Cómo automatizamos procesos en e-commerce, clínicas y agencias. Resultados reales con números: antes vs. después.",
};

export default function CasosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <SectionWrapper
          className="pt-32 pb-10 text-center"
          aria-labelledby="casos-heading"
        >
          <SectionLabel>Casos de estudio</SectionLabel>
          <SectionHeading id="casos-heading">
            Resultados reales. Con números.
          </SectionHeading>
          <SectionSubheading>
            Cada caso es un sistema que sigue corriendo hoy. No mockups, no proyecciones — resultados verificables.
          </SectionSubheading>
        </SectionWrapper>

        <CaseGrid />

        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
