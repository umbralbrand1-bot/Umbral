"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { GridBackground } from "@/components/GridBackground";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const up = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 text-center sm:px-6"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      {/* Cyan grid lines with radial fade */}
      <GridBackground size={60} opacity={0.05} color="#00E5FF" />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "rgba(0,229,255,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: "rgba(255,107,53,0.05)" }}
        aria-hidden="true"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center gap-7 max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div variants={up}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/6 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_6px_#00E5FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">
              AI Automation Studio
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          variants={up}
          className="text-4xl font-bold leading-[1.08] tracking-tight text-[#FAFAFA] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Automatiza tu negocio con IA.{" "}
          <span className="text-gradient-violet-cyan">
            Recupera 40+ horas al mes.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={up}
          className="max-w-2xl text-base text-[#A1A1AA] sm:text-lg leading-relaxed"
        >
          En Umbral diseñamos e implementamos agentes de IA y automatizaciones
          que eliminan el trabajo repetitivo en ventas, operaciones y atención al
          cliente. Sin equipo técnico interno. Sin meses de implementación.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={up}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="cta-primary px-7 text-[15px] font-semibold"
          >
            <Link href="/diagnostico">
              Agendar diagnóstico gratuito
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-surface-800 text-[15px]"
          >
            <Link href="/casos">
              Ver casos de estudio
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>

        {/* Social proof micro-text */}
        <motion.p variants={up} className="text-xs text-[#A1A1AA]">
          Diagnóstico de 30 min sin costo · Sin compromiso · Con entregable en PDF
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-surface-600 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
