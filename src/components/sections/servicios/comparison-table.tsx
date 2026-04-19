import { SectionWrapper, SectionLabel, SectionHeading } from "@/components/common/section-wrapper";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const ROWS = [
  { criteria: "Velocidad de implementación", freelancer: "partial", agency: "no", umbral: "yes" },
  { criteria: "Expertise en IA aplicada", freelancer: "partial", agency: "no", umbral: "yes" },
  { criteria: "Mantenimiento y optimización continua", freelancer: "no", agency: "partial", umbral: "yes" },
  { criteria: "Resultados medibles desde día 1", freelancer: "partial", agency: "no", umbral: "yes" },
  { criteria: "Costo razonable para pymes", freelancer: "yes", agency: "no", umbral: "yes" },
  { criteria: "Sin dependencia de plataformas cerradas", freelancer: "partial", agency: "no", umbral: "yes" },
  { criteria: "Documentación y transferencia de conocimiento", freelancer: "no", agency: "partial", umbral: "yes" },
  { criteria: "SLA de respuesta ante fallos", freelancer: "no", agency: "partial", umbral: "yes" },
];

const HEADERS = [
  { label: "Freelancer", key: "freelancer" },
  { label: "Agencia tradicional", key: "agency" },
  { label: "Umbral", key: "umbral", highlight: true },
];

function Icon({ value }: { value: "yes" | "no" | "partial" }) {
  if (value === "yes") return <CheckCircle2 className="h-5 w-5 text-success mx-auto" aria-label="Sí" />;
  if (value === "no") return <XCircle className="h-5 w-5 text-[#A1A1AA]/40 mx-auto" aria-label="No" />;
  return <MinusCircle className="h-5 w-5 text-yellow-500/60 mx-auto" aria-label="Parcialmente" />;
}

export function ComparisonTable() {
  return (
    <SectionWrapper aria-labelledby="comparison-heading" className="bg-surface-900/20">
      <div className="text-center mb-10">
        <SectionLabel>¿Por qué Umbral?</SectionLabel>
        <SectionHeading id="comparison-heading">
          La diferencia está en los detalles.
        </SectionHeading>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full min-w-[640px] border-collapse"
          aria-label="Comparación Freelancer vs Agencia vs Umbral"
        >
          <thead>
            <tr>
              <th className="pb-4 text-left text-sm font-medium text-[#A1A1AA]" scope="col">
                Criterio
              </th>
              {HEADERS.map((h) => (
                <th
                  key={h.key}
                  scope="col"
                  className={`pb-4 text-center text-sm font-semibold ${
                    h.highlight ? "text-[#00E5FF]" : "text-[#A1A1AA]"
                  }`}
                >
                  {h.label}
                  {h.highlight && (
                    <span className="ml-2 rounded-full bg-[#00E5FF]/15 px-2 py-0.5 text-xs">
                      ← nosotros
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.criteria}
                className={`border-t border-surface-700 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-surface-900/30"
                }`}
              >
                <td className="py-4 pr-6 text-sm text-[#FAFAFA]">{row.criteria}</td>
                {HEADERS.map((h) => (
                  <td
                    key={h.key}
                    className={`py-4 text-center ${
                      h.highlight
                        ? "rounded-none bg-[#00E5FF]/5"
                        : ""
                    }`}
                  >
                    <Icon value={row[h.key as keyof typeof row] as "yes" | "no" | "partial"} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-xs text-[#A1A1AA]">
        <span className="inline-flex items-center gap-1.5 mr-4">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Sí
        </span>
        <span className="inline-flex items-center gap-1.5 mr-4">
          <MinusCircle className="h-3.5 w-3.5 text-yellow-500/60" aria-hidden="true" /> Parcialmente
        </span>
        <span className="inline-flex items-center gap-1.5">
          <XCircle className="h-3.5 w-3.5 text-[#A1A1AA]/40" aria-hidden="true" /> No
        </span>
      </p>
    </SectionWrapper>
  );
}
