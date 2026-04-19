"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CaseCard } from "./case-card";
import { CASES, INDUSTRIES } from "@/lib/data/cases";

export function CaseGrid() {
  const [activeIndustry, setActiveIndustry] = useState("Todos");

  const filtered =
    activeIndustry === "Todos"
      ? CASES
      : CASES.filter((c) => c.industry === activeIndustry);

  return (
    <SectionWrapper>
      {/* Industry filter */}
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar por industria"
      >
        {INDUSTRIES.map((ind) => (
          <button
            key={ind}
            onClick={() => setActiveIndustry(ind)}
            aria-pressed={activeIndustry === ind}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeIndustry === ind
                ? "border-[#00E5FF]/40 bg-[#00E5FF]/15 text-[#00E5FF]/70"
                : "border-surface-700 bg-surface-900 text-[#A1A1AA] hover:border-surface-600 hover:text-[#FAFAFA]"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Cards */}
      <ul
        role="list"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Casos de estudio"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((c, i) => (
            <motion.li
              key={c.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" as const }}
            >
              <CaseCard caseStudy={c} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-[#A1A1AA]">
          No hay casos para esta industria aún. Próximamente.
        </p>
      )}
    </SectionWrapper>
  );
}
