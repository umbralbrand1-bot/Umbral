"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Eye, Zap } from "lucide-react";
import { SectionWrapper, SectionLabel, SectionHeading } from "@/components/common/section-wrapper";

const PRINCIPLES = [
  {
    number: "01",
    icon: BarChart3,
    title: "Resultados medibles o no cobramos",
    description:
      "Cada proyecto arranca con métricas de éxito definidas. Si no podemos demostrar ROI con datos reales, no consideramos que el proyecto fue exitoso. Sin métricas, no hay proyecto.",
    accent: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/8",
  },
  {
    number: "02",
    icon: Eye,
    title: "Transparencia radical en procesos y precios",
    description:
      "Te mostramos la arquitectura completa antes de cobrar. Sabés exactamente qué construimos, cómo funciona, qué cuesta y por qué. Sin letra chica, sin sorpresas en la factura.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/8",
  },
  {
    number: "03",
    icon: Zap,
    title: "Velocidad de startup, rigor de ingeniería",
    description:
      "Prototipo funcional en 48 horas de kick-off. Producción en semanas, no trimestres. Pero rápido no significa descuidado: código documentado, tests, manejo de errores y monitoreo desde el día uno.",
    accent: "text-success",
    bg: "bg-success/8",
  },
];

export function Principles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="principios"
      aria-labelledby="principles-heading"
      className="bg-surface-900/30"
    >
      <div className="text-center mb-12">
        <SectionLabel>Cómo pensamos</SectionLabel>
        <SectionHeading id="principles-heading">
          Tres principios no negociables.
        </SectionHeading>
      </div>

      <dl
        ref={ref}
        className="grid gap-6 md:grid-cols-3"
        aria-label="Principios de Umbral"
      >
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.13, ease: "easeOut" as const }}
            className="rounded-2xl border border-surface-700 bg-surface-900 p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.bg} ${p.accent}`}
                aria-hidden="true"
              >
                <p.icon className="h-5 w-5" />
              </div>
              <span className={`font-mono text-sm font-bold ${p.accent}`}>{p.number}</span>
            </div>
            <dt className="mb-3 font-semibold text-[#FAFAFA]">{p.title}</dt>
            <dd className="text-sm text-[#A1A1AA] leading-relaxed">{p.description}</dd>
          </motion.div>
        ))}
      </dl>
    </SectionWrapper>
  );
}
