import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { DiagnosticForm } from "@/components/sections/diagnostico/diagnostic-form";
import { DiagnosticBenefits } from "@/components/sections/diagnostico/diagnostic-benefits";

export const metadata: Metadata = {
  title: "Diagnóstico gratuito — Identificamos tus 3 procesos de mayor ROI",
  description:
    "30 minutos para identificar los 3 procesos de mayor ROI para automatizar en tu negocio. Sin costo, sin compromiso, con entregable en PDF.",
};

const diagSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnóstico de Automatización con IA",
  provider: { "@type": "Organization", name: "Umbral" },
  description:
    "Sesión gratuita de 30 minutos para identificar los 3 procesos de mayor ROI para automatizar con IA en tu negocio.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function DiagnosticoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagSchema) }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <SectionWrapper className="pt-32 pb-10 text-center" aria-labelledby="diag-heading">
          <SectionLabel>Diagnóstico gratuito</SectionLabel>
          <SectionHeading id="diag-heading">
            30 minutos que pueden cambiar tu operación.
          </SectionHeading>
          <SectionSubheading>
            Identificamos los 3 procesos de mayor ROI en tu negocio y te entregamos un plan en PDF. Sin costo. Sin compromiso.
          </SectionSubheading>
        </SectionWrapper>

        <SectionWrapper className="pt-0" aria-labelledby="diag-heading">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-start">
            {/* Form */}
            <DiagnosticForm />

            {/* Benefits sidebar */}
            <DiagnosticBenefits />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
