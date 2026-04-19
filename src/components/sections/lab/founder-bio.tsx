import { SectionWrapper, SectionLabel } from "@/components/common/section-wrapper";
import { ExternalLink } from "lucide-react";

export function FounderBio() {
  return (
    <SectionWrapper id="fundador" aria-labelledby="founder-heading">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>El equipo</SectionLabel>

        <div className="mt-6 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
          {/* Avatar placeholder */}
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-surface-700 bg-gradient-to-br from-[#00E5FF]/20 to-cyan-500/10 text-3xl font-bold text-[#00E5FF]/70"
            aria-label="Foto de Victor, fundador de Umbral"
          >
            V
            {/* PLACEHOLDER: reemplazar con <Image src="/founder.jpg" ... /> */}
          </div>

          <div>
            <h2 id="founder-heading" className="text-xl font-bold text-[#FAFAFA]">
              Victor {/* PLACEHOLDER: apellido */}
            </h2>
            <p className="mt-0.5 text-sm text-[#00E5FF] font-medium">
              Founder & AI Engineer · Umbral
            </p>

            <div className="mt-4 space-y-3 text-[#A1A1AA] leading-relaxed text-sm">
              <p>
                Llevo más de {/* PLACEHOLDER: años */} años construyendo sistemas de software para empresas de distintos sectores. La obsesión con la automatización llegó cuando vi de cerca cuánto tiempo y dinero se desperdicia en procesos que pueden y deben ser automáticos.
              </p>
              <p>
                Fundé Umbral para democratizar el acceso a la IA aplicada en pymes de habla hispana. Las grandes corporaciones ya tienen equipos enteros de data science — los negocios medianos merecen el mismo nivel de sophisticación, a escala y costo accesibles.
              </p>
              <p>
                Trabajo principalmente con n8n, Make, el ecosistema de APIs de OpenAI y Anthropic, y arquitecturas serverless. Cada sistema que construimos está pensado para ser mantenido y mejorado, no abandonado.
              </p>
            </div>

            {/* Social links — PLACEHOLDER */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/victor" // PLACEHOLDER
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Victor"
                className="flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/victor" // PLACEHOLDER
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter de Victor"
                className="flex items-center gap-1.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Twitter / X
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
