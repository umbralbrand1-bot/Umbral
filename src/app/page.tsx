import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { CookieBanner } from "@/components/common/cookie-banner";
import { Hero } from "@/components/sections/home/hero";
import { LogoCloud } from "@/components/sections/home/logo-cloud";
import { ProblemSolution } from "@/components/sections/home/problem-solution";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { HowWeWork } from "@/components/sections/home/how-we-work";
import { Metrics } from "@/components/sections/home/metrics";
import { Testimonials } from "@/components/sections/home/testimonials";
import { TechStack } from "@/components/sections/home/tech-stack";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCta } from "@/components/sections/home/final-cta";

export const metadata: Metadata = {
  title: "Umbral — Ingeniería de IA para negocios que quieren escalar",
  description:
    "Diseñamos e implementamos agentes de IA y automatizaciones que eliminan el trabajo repetitivo en ventas, operaciones y atención al cliente. Diagnóstico gratuito.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <LogoCloud />
        <ProblemSolution />
        <ServicesPreview />
        <HowWeWork />
        <Metrics />
        <Testimonials />
        <TechStack />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
