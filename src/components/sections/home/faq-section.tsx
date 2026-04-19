import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { FAQS } from "@/lib/data/faqs";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" aria-labelledby="faq-heading" className="bg-surface-900/20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <SectionHeading id="faq-heading">
            Resolvemos las dudas antes de que aparezcan.
          </SectionHeading>
          <SectionSubheading>
            Si tu pregunta no está acá, respondemos en menos de 24h.
          </SectionSubheading>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 space-y-3"
          aria-label="Preguntas frecuentes"
        >
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-surface-700 bg-surface-900 px-6 data-[state=open]:border-[#00E5FF]/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-[#FAFAFA] hover:text-[#FAFAFA] hover:no-underline py-5 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A1A1AA] leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
