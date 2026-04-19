"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { SectionWrapper, SectionLabel } from "@/components/common/section-wrapper";
import { METRICS } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix,
  decimals = 0,
  className,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      className="bg-surface-900/40"
      aria-labelledby="metrics-heading"
    >
      <div ref={ref} className="text-center mb-12">
        <SectionLabel>Resultados medibles</SectionLabel>
        <h2
          id="metrics-heading"
          className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Números que definen nuestro trabajo.
        </h2>
      </div>

      <dl
        className="grid gap-6 sm:grid-cols-3"
        aria-label="Métricas de Umbral Labs"
      >
        {METRICS.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" as const }}
            className="flex flex-col items-center rounded-2xl border border-surface-700 bg-surface-900 p-8 text-center"
          >
            <dd
              className={`mb-2 font-mono text-5xl font-bold tabular-nums ${metric.color}`}
              aria-live="off"
            >
              {inView ? (
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              ) : (
                <span>0{metric.suffix}</span>
              )}
              {metric.unit && (
                <span className="ml-1 text-2xl font-normal text-[#A1A1AA]">
                  {metric.unit}
                </span>
              )}
            </dd>
            <dt className="text-sm text-[#A1A1AA] leading-snug max-w-[14ch]">{metric.label}</dt>
          </motion.div>
        ))}
      </dl>

      <p className="mt-8 text-center text-xs text-[#A1A1AA]">
        Promedios basados en los primeros 90 días post-implementación de nuestros clientes activos.
      </p>
    </SectionWrapper>
  );
}
