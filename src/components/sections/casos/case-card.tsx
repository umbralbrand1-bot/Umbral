"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, TrendingUp, Quote } from "lucide-react";
import type { CASES } from "@/lib/data/cases";

type CaseStudy = (typeof CASES)[number];

export function CaseCard({ caseStudy: c }: { caseStudy: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="flex flex-col rounded-2xl border border-surface-700 bg-surface-900/80 overflow-hidden"
      aria-label={`Caso de estudio: ${c.client}`}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge
            variant="outline"
            className="border-[#00E5FF]/20 bg-[#00E5FF]/8 text-[#00E5FF]/70 text-xs"
          >
            {c.industry}
          </Badge>
          <span className="text-xs text-[#A1A1AA]">{c.size}</span>
        </div>

        <h3 className="text-lg font-semibold text-[#FAFAFA] leading-snug">
          {c.problem.title}
        </h3>
        <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
          {c.problem.description}
        </p>
      </div>

      {/* Problem metrics */}
      <div className="mx-6 mb-4 rounded-lg border border-surface-700 bg-surface-800/60 px-4 py-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
          Situación inicial
        </p>
        <ul className="space-y-1" role="list">
          {c.problem.metrics.map((m) => (
            <li key={m} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-surface-600" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack tags */}
      <div className="mx-6 mb-4 flex flex-wrap gap-1.5">
        {c.solution.stack.map((s) => (
          <Badge
            key={s}
            variant="outline"
            className="border-surface-700 bg-surface-800/50 text-[#A1A1AA] text-xs"
          >
            {s}
          </Badge>
        ))}
      </div>

      {/* Expandable results */}
      <div className="border-t border-surface-700">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`results-${c.id}`}
          className="flex w-full items-center justify-between px-6 py-4 text-sm font-medium text-[#FAFAFA] hover:bg-surface-800/50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-success" aria-hidden="true" />
            Ver resultados
          </span>
          <ChevronDown
            className={`h-4 w-4 text-[#A1A1AA] transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id={`results-${c.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-4">
                {/* Before/after metrics */}
                <div className="space-y-2">
                  {c.results.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between rounded-lg border border-surface-700 bg-surface-800/60 px-4 py-2.5 text-sm"
                    >
                      <span className="text-[#A1A1AA]">{m.label}</span>
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-[#A1A1AA] line-through">{m.before}</span>
                        <span className="text-success font-semibold">{m.after}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="rounded-xl border border-[#00E5FF]/10 bg-[#00E5FF]/5 p-4">
                  <Quote className="mb-2 h-4 w-4 text-[#00E5FF]/40" aria-hidden="true" />
                  <p className="text-sm text-[#FAFAFA] leading-relaxed italic">
                    &ldquo;{c.results.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-[#A1A1AA]">
                    — {c.results.quoteAuthor}
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
