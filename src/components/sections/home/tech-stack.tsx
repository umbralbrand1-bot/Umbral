import { SectionWrapper, SectionLabel } from "@/components/common/section-wrapper";
import { TECH_STACK } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  automation: "text-[#00E5FF]",
  ai: "text-cyan-400",
  data: "text-success",
  crm: "text-orange-400",
  productivity: "text-yellow-400",
  communication: "text-blue-400",
  infrastructure: "text-[#FAFAFA]",
};

export function TechStack() {
  return (
    <SectionWrapper className="py-14 lg:py-20 bg-surface-950">
      <div className="text-center mb-10">
        <SectionLabel>Stack tecnológico</SectionLabel>
        <p className="mt-2 text-[#A1A1AA] text-sm max-w-lg mx-auto">
          Trabajamos con las herramientas que tu equipo ya conoce.
          Las conectamos con IA para que funcionen como un sistema cohesionado.
        </p>
      </div>

      <ul
        role="list"
        className="flex flex-wrap items-center justify-center gap-3"
        aria-label="Tecnologías que usamos"
      >
        {TECH_STACK.map((tech) => (
          <li key={tech.name}>
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-surface-700 bg-surface-900/80 px-4 py-2 text-sm font-medium transition-colors hover:border-surface-600 ${
                CATEGORY_COLORS[tech.category] ?? "text-[#A1A1AA]"
              }`}
            >
              {/* PLACEHOLDER: agregar <Image> con logos SVG monocromáticos */}
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
