"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { HOW_WE_WORK } from "@/lib/constants";

export function HowWeWork() {
  return (
    <SectionWrapper id="como-trabajamos" aria-labelledby="how-heading">
      <div className="text-center">
        <SectionLabel>Proceso</SectionLabel>
        <SectionHeading id="how-heading">
          De diagnóstico a resultados en semanas, no meses.
        </SectionHeading>
        <SectionSubheading>
          Un proceso transparente con entregables claros en cada etapa.
        </SectionSubheading>
      </div>

      <div className="mt-14 grid gap-0 md:grid-cols-4">
        {HOW_WE_WORK.map((step, index) => (
          <StepCard key={step.step} step={step} index={index} isLast={index === HOW_WE_WORK.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof HOW_WE_WORK)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComp = Icons[step.icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" as const }}
      className="relative flex flex-col px-4 py-6 md:px-5"
    >
      {/* Connector line */}
      {!isLast && (
        <div
          className="absolute right-0 top-[3.25rem] hidden h-px w-1/2 bg-gradient-to-r from-surface-600 to-transparent md:block"
          aria-hidden="true"
        />
      )}
      {!isLast && (
        <div
          className="absolute left-1/2 top-[3.25rem] hidden h-px w-1/2 bg-gradient-to-r from-transparent to-surface-600 md:block"
          aria-hidden="true"
        />
      )}

      {/* Step number + icon */}
      <div className="relative mb-5 flex items-center gap-3 md:flex-col md:items-start md:gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
          {IconComp && <IconComp className="h-5 w-5" aria-hidden="true" />}
        </div>
        <span className="font-mono text-2xl font-bold text-surface-600 md:hidden">{step.step}</span>
      </div>

      {/* Content */}
      <div>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="hidden font-mono text-xs font-bold text-surface-600 md:block">{step.step}</span>
          <h3 className="font-semibold text-[#FAFAFA]">{step.title}</h3>
        </div>
        <p className="mb-3 text-xs font-medium text-[#00E5FF]">{step.duration}</p>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}
