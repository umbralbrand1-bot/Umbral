import { SectionWrapper } from "@/components/common/section-wrapper";

const LOGOS = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
  "Cliente 6",
]; // PLACEHOLDER: reemplazar con logos reales de clientes

export function LogoCloud() {
  return (
    <SectionWrapper className="py-12 lg:py-16">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
          Equipos que automatizan con Umbral
        </p>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          aria-label="Clientes de Umbral"
        >
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex h-8 items-center justify-center opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-200"
            >
              {/* PLACEHOLDER: reemplazar con <Image> del logo del cliente */}
              <span className="rounded border border-surface-700 bg-surface-800 px-4 py-1.5 text-xs font-medium text-[#A1A1AA]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
