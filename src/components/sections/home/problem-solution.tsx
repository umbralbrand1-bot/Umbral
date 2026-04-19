"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { SectionWrapper, SectionLabel, SectionHeading } from "@/components/common/section-wrapper";
import { PROBLEMS, SOLUTIONS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function Card({
  icon,
  title,
  description,
  variant,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  variant: "problem" | "solution";
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const IconComp = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
      className={`rounded-xl border p-6 ${
        variant === "problem"
          ? "border-surface-700 bg-surface-900/60"
          : "glass-card glass-card-hover"
      }`}
    >
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${
          variant === "problem"
            ? "bg-[#A1A1AA]/8 text-[#A1A1AA]"
            : "bg-[#00E5FF]/10 text-[#00E5FF]"
        }`}
        aria-hidden="true"
      >
        {IconComp && <IconComp className="h-5 w-5" />}
      </div>
      <h3 className={`mb-2 font-semibold ${variant === "problem" ? "text-[#A1A1AA]" : "text-[#FAFAFA]"}`}>
        {title}
      </h3>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function ProblemSolution() {
  return (
    <SectionWrapper id="problema-solucion" aria-labelledby="ps-heading" className="bg-surface-950">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Problems */}
        <div>
          <SectionLabel>El problema</SectionLabel>
          <SectionHeading id="ps-heading" className="text-[#A1A1AA]">
            Tiempo y dinero que se pierden en silencio.
          </SectionHeading>
          <ul className="mt-8 flex flex-col gap-4" role="list" aria-label="Problemas comunes">
            {PROBLEMS.map((p, i) => (
              <li key={p.icon}>
                <Card {...p} variant="problem" index={i} />
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <SectionLabel>La solución</SectionLabel>
          <SectionHeading className="text-[#FAFAFA]">
            Sistemas de IA que trabajan mientras tú escalas.
          </SectionHeading>
          <ul className="mt-8 flex flex-col gap-4" role="list" aria-label="Soluciones de Umbral">
            {SOLUTIONS.map((s, i) => (
              <li key={s.icon}>
                <Card {...s} variant="solution" index={i} />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 text-sm text-[#00E5FF]">
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>El diagnóstico identifica exactamente qué aplica a tu negocio.</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
