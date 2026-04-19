import { SectionWrapper, SectionLabel, SectionHeading } from "@/components/common/section-wrapper";

const STACK_CATEGORIES = [
  {
    label: "Automatización",
    items: ["n8n", "Make (Integromat)", "Zapier", "Windmill"],
    color: "text-[#00E5FF]",
    border: "border-[#00E5FF]/15",
    bg: "bg-[#00E5FF]/5",
  },
  {
    label: "Inteligencia Artificial",
    items: ["OpenAI GPT-4o", "Anthropic Claude", "Groq", "Llama 3"],
    color: "text-cyan-400",
    border: "border-cyan-500/15",
    bg: "bg-cyan-500/5",
  },
  {
    label: "Datos e infraestructura",
    items: ["Supabase", "PostgreSQL", "Airtable", "Redis"],
    color: "text-success",
    border: "border-success/15",
    bg: "bg-success/5",
  },
  {
    label: "CRM y comunicación",
    items: ["HubSpot", "WhatsApp Business API", "Slack API", "Twilio"],
    color: "text-orange-400",
    border: "border-orange-500/15",
    bg: "bg-orange-500/5",
  },
  {
    label: "Frontend y deploy",
    items: ["Next.js", "Vercel", "Cloudflare Workers", "Railway"],
    color: "text-[#FAFAFA]",
    border: "border-surface-600",
    bg: "bg-surface-800/40",
  },
];

export function LabTechStack() {
  return (
    <SectionWrapper
      id="stack"
      aria-labelledby="stack-heading"
      className="bg-surface-900/20"
    >
      <div className="text-center mb-12">
        <SectionLabel>Herramientas</SectionLabel>
        <SectionHeading id="stack-heading">
          Stack técnico que dominamos.
        </SectionHeading>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK_CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className={`rounded-xl border ${cat.border} ${cat.bg} p-5`}
          >
            <dt className={`mb-3 text-sm font-semibold ${cat.color}`}>{cat.label}</dt>
            <dd>
              <ul className="space-y-1.5" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                    <span
                      className={`h-1 w-1 shrink-0 rounded-full ${cat.color} opacity-60`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  );
}
