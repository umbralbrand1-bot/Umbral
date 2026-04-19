import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { FinalCta } from "@/components/sections/home/final-cta";
import { Principles } from "@/components/sections/lab/principles";
import { FounderBio } from "@/components/sections/lab/founder-bio";
import { LabTechStack } from "@/components/sections/lab/lab-tech-stack";

export const metadata: Metadata = {
  title: "Lab — Quiénes somos y cómo pensamos",
  description:
    "Umbral nació de una obsesión: el momento en que una empresa cruza del caos operativo a la automatización inteligente. Conocé el equipo y los principios.",
};

export default function LabPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Mission header */}
        <SectionWrapper className="pt-32 pb-12 text-center" aria-labelledby="lab-heading">
          <SectionLabel>El lab</SectionLabel>
          <SectionHeading id="lab-heading" className="max-w-3xl mx-auto">
            Donde el caos operativo se convierte en sistemas inteligentes.
          </SectionHeading>
          <SectionSubheading>
            Umbral nació de una obsesión: el momento exacto en que una empresa cruza del trabajo manual y repetitivo a la automatización que escala sola.
          </SectionSubheading>
        </SectionWrapper>

        {/* Origin story */}
        <SectionWrapper className="pt-0 pb-16" aria-labelledby="story-heading">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[#00E5FF]/10 bg-surface-900/70 p-8 sm:p-12">
              <h2 id="story-heading" className="mb-6 text-xl font-bold text-[#FAFAFA]">
                Por qué existe Umbral
              </h2>
              <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                <p>
                  La mayoría de las pymes de habla hispana saben que necesitan IA. Lo leen en todas partes. Pero entre entenderlo conceptualmente y tener algo funcionando en producción hay un abismo de tiempo, expertise y dinero que pocos pueden cruzar solos.
                </p>
                <p>
                  Umbral existe para ser el puente. No vendemos herramientas, vendemos resultados medibles. No prometemos &ldquo;transformación digital&rdquo; — prometemos que en 4 semanas tenés un sistema que funciona, genera datos y puede mejorar con el tiempo.
                </p>
                <p>
                  El nombre no es accidental. Un <em className="text-[#FAFAFA]">umbral</em> es el punto exacto de transición. Ese es exactamente nuestro trabajo: llevar a tu empresa al otro lado.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Principles */}
        <Principles />

        {/* Founder */}
        <FounderBio />

        {/* Tech stack */}
        <LabTechStack />

        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
