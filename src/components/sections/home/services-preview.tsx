"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { SERVICES_PREVIEW } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES_PREVIEW)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComp = Icons[service.icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" as const }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <Link href={service.href} className="flex h-full flex-col rounded-xl border border-surface-700 bg-surface-900/70 p-6 backdrop-blur-sm hover:border-[#00E5FF]/30 hover:bg-surface-900 transition-all duration-200">
        <div
          className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] group-hover:bg-[#00E5FF]/15 transition-colors"
          aria-hidden="true"
        >
          {IconComp && <IconComp className="h-5 w-5" />}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-[#FAFAFA]">{service.title}</h3>
        <p className="mb-5 flex-1 text-sm text-[#A1A1AA] leading-relaxed">{service.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-surface-700 bg-surface-800/50 text-[#A1A1AA] text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-1 text-sm text-[#00E5FF] group-hover:gap-2 transition-all">
          <span>Ver detalle</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <SectionWrapper id="servicios" aria-labelledby="services-heading" className="bg-surface-900/30">
      <div className="text-center">
        <SectionLabel>Qué hacemos</SectionLabel>
        <SectionHeading id="services-heading">
          Tres áreas. Un sistema cohesionado.
        </SectionHeading>
        <SectionSubheading>
          No vendemos herramientas aisladas. Construimos el sistema completo que conecta tu operación con la IA.
        </SectionSubheading>
      </div>

      <ul
        role="list"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Servicios de Umbral"
      >
        {SERVICES_PREVIEW.map((service, i) => (
          <li key={service.id}>
            <ServiceCard service={service} index={i} />
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
        >
          Ver todos los servicios en detalle
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
