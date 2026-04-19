"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";
import { SectionWrapper } from "@/components/common/section-wrapper";

export function FinalCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper aria-labelledby="cta-heading" className="py-20 lg:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="relative overflow-hidden rounded-2xl border border-[#00E5FF]/20 bg-surface-900 p-8 text-center sm:p-14"
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(139,92,246,0.18),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">
            Diagnóstico gratuito
          </p>
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            ¿Listo para recuperar 40+ horas al mes?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#A1A1AA] leading-relaxed">
            En 30 minutos identificamos los 3 procesos de mayor ROI en tu negocio y te entregamos un diagnóstico en PDF con el plan de automatización. Sin costo. Sin compromiso.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="cta-primary px-8 text-[15px] font-semibold">
              <Link href="/diagnostico">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                Agendar diagnóstico gratuito
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-surface-800"
            >
              <Link href="/casos">
                <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                Ver casos de estudio
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A1A1AA]">
            {[
              "30 minutos, sin costo",
              "Entregable en PDF",
              "Respuesta en 24h hábiles",
              "Sin compromiso de compra",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#00E5FF]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
