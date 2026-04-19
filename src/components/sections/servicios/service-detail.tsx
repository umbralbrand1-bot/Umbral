"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, DollarSign, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionWrapper } from "@/components/common/section-wrapper";

interface UseCase {
  industry: string;
  cases: string[];
}

interface ServiceDetailData {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  useCases: UseCase[];
  deliverables: string[];
  timeline: string;
  priceAnchor: string;
}

export function ServiceDetail({
  service,
  reversed,
}: {
  service: ServiceDetailData;
  reversed: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = Icons[service.iconName as keyof typeof Icons] as React.ElementType;

  return (
    <SectionWrapper
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className={reversed ? "bg-surface-900/30" : ""}
    >
      <div
        ref={ref}
        className={`grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Left: main content */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 24 : -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2
            id={`${service.id}-heading`}
            className="text-2xl font-bold text-[#FAFAFA] sm:text-3xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {service.title}
          </h2>
          <p className="mt-2 text-[#00E5FF] font-medium">{service.tagline}</p>
          <p className="mt-4 text-[#A1A1AA] leading-relaxed">{service.description}</p>

          {/* Deliverables */}
          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-[#FAFAFA]">Entregables</p>
            <ul className="space-y-2.5" role="list">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline + Price */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-surface-700 bg-surface-900 px-4 py-2.5">
              <Clock className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              <span className="text-sm text-[#FAFAFA]">{service.timeline}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-surface-700 bg-surface-900 px-4 py-2.5">
              <DollarSign className="h-4 w-4 text-success" aria-hidden="true" />
              <span className="text-sm text-[#FAFAFA]">{service.priceAnchor}</span>
            </div>
          </div>

          <Button asChild className="mt-6 cta-primary">
            <Link href="/diagnostico">
              Agendar diagnóstico para este servicio
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>

        {/* Right: use cases */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -24 : 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-widest">
            Casos de uso por industria
          </p>
          {service.useCases.map((uc) => (
            <div
              key={uc.industry}
              className="rounded-xl border border-surface-700 bg-surface-900/70 p-5"
            >
              <Badge
                variant="outline"
                className="mb-3 border-[#00E5FF]/20 bg-[#00E5FF]/8 text-[#00E5FF]/70 text-xs"
              >
                {uc.industry}
              </Badge>
              <ul className="space-y-2" role="list">
                {uc.cases.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-surface-600" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
