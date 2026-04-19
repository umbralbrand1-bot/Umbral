"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper, SectionLabel, SectionHeading } from "@/components/common/section-wrapper";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const t = TESTIMONIALS[current];

  return (
    <SectionWrapper id="testimonios" aria-labelledby="testimonials-heading">
      <div className="text-center mb-12">
        <SectionLabel>Resultados reales</SectionLabel>
        <SectionHeading id="testimonials-heading">
          Lo que dicen quienes ya automatizaron.
        </SectionHeading>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-surface-700 bg-surface-900 p-8 sm:p-12">
          <Quote className="mb-6 h-8 w-8 text-[#00E5FF]/40" aria-hidden="true" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="mb-8"
            >
              <p className="text-lg text-[#FAFAFA] leading-relaxed font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4">
                {/* PLACEHOLDER: reemplazar con <Image> real */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00E5FF]/20 text-sm font-bold text-[#00E5FF]/70"
                  aria-hidden="true"
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#FAFAFA]">{t.author}</p>
                  <p className="text-sm text-[#A1A1AA]">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="ml-auto rounded-full border border-success/20 bg-success/8 px-3 py-1">
                  <span className="text-xs font-medium text-success">{t.metrics}</span>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#00E5FF]" : "w-1.5 bg-surface-600"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Testimonio anterior"
                className="h-8 w-8 border-surface-700 bg-surface-800 hover:bg-surface-700"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Siguiente testimonio"
                className="h-8 w-8 border-surface-700 bg-surface-800 hover:bg-surface-700"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
