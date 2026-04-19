import { CheckCircle2, Clock, FileText, Shield, Calendar } from "lucide-react";

const BENEFITS = [
  {
    icon: Clock,
    title: "30 minutos, sin más",
    description: "Una videollamada enfocada. Sin pitch de ventas, sin presentaciones largas.",
  },
  {
    icon: FileText,
    title: "Entregable en PDF",
    description: "Al final de la sesión, un diagnóstico escrito con los 3 procesos de mayor ROI para tu negocio.",
  },
  {
    icon: CheckCircle2,
    title: "Sin compromiso de compra",
    description: "El diagnóstico es útil independientemente de si decidís trabajar con nosotros o no.",
  },
  {
    icon: Shield,
    title: "NDA disponible",
    description: "Si manejás información sensible, firmamos un NDA antes de empezar sin costo adicional.",
  },
];

export function DiagnosticBenefits() {
  return (
    <aside aria-label="Beneficios del diagnóstico" className="space-y-6">
      {/* What you get */}
      <div className="rounded-2xl border border-[#00E5FF]/15 bg-surface-900/70 p-6">
        <h3 className="mb-5 font-semibold text-[#FAFAFA]">Qué recibís</h3>
        <ul className="space-y-4" role="list">
          {BENEFITS.map((b) => (
            <li key={b.title} className="flex items-start gap-3">
              <div
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]"
                aria-hidden="true"
              >
                <b.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#FAFAFA]">{b.title}</p>
                <p className="text-xs text-[#A1A1AA] mt-0.5">{b.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Cal.com embed placeholder */}
      <div className="rounded-2xl border border-surface-700 bg-surface-900/40 p-6 text-center">
        <Calendar className="mx-auto mb-3 h-8 w-8 text-[#A1A1AA]" aria-hidden="true" />
        <p className="text-sm font-medium text-[#FAFAFA] mb-1">
          Preferís agendar directo
        </p>
        <p className="text-xs text-[#A1A1AA] mb-4">
          Elegí el horario que te funcione en nuestro calendario
        </p>
        {/* PLACEHOLDER: reemplazar con embed de Cal.com */}
        <a
          href="https://cal.com/umbral/diagnostico"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-surface-700 bg-surface-800 px-4 py-2.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-surface-600 transition-colors"
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          Abrir calendario → Cal.com
        </a>
        <p className="mt-3 text-xs text-[#A1A1AA]">
          {/* PLACEHOLDER: enlace real de Cal.com */}
          Disponibilidad actualizada en tiempo real
        </p>
      </div>

      {/* Turnaround promise */}
      <div className="rounded-xl border border-success/15 bg-success/5 px-5 py-4">
        <p className="text-sm font-medium text-success mb-0.5">
          Respondemos en &lt; 24 horas hábiles
        </p>
        <p className="text-xs text-[#A1A1AA]">
          Lunes a viernes, zona horaria Argentina (GMT-3).
        </p>
      </div>
    </aside>
  );
}
