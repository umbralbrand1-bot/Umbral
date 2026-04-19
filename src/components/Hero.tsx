import { Logo } from "./Logo";
import { GridBackground } from "./GridBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-umbral-bg-deep">
      {/* Glows radiales cyan + azul */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 500px at 50% 45%, rgba(0, 229, 255, 0.08), transparent 70%),
            radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.06), transparent 60%)
          `,
        }}
      />

      {/* Grid de líneas cyan de fondo */}
      <GridBackground />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-14 font-mono text-xs uppercase tracking-[0.3em] text-umbral-cyan">
          AI Automation Studio
        </span>

        <Logo size={120} variant="full" glow className="mb-12" />

        <h1 className="mb-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-50 md:text-6xl">
          Cruza el umbral hacia la automatización con IA
        </h1>

        <p className="mb-10 max-w-xl text-lg text-slate-300">
          Diseñamos agentes de IA que eliminan el trabajo repetitivo en ventas,
          operaciones y atención al cliente. Recupera 40+ horas al mes.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="rounded-lg bg-umbral-cyan px-6 py-3 text-sm font-semibold text-umbral-bg-deep shadow-glow-cyan transition hover:brightness-110">
            Agendar diagnóstico gratuito →
          </button>
          <button className="rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg-slate-900/80">
            Ver casos de estudio
          </button>
        </div>

        {/* Meta info esquinas */}
        <div className="absolute bottom-8 left-8 hidden items-center gap-2 font-mono text-xs text-umbral-text-dim md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]"></span>
          umbral.system.online
        </div>
        <div className="absolute bottom-8 right-8 hidden font-mono text-xs text-umbral-text-dim md:block">
          v1.0.0 · ES/LATAM
        </div>
      </div>
    </section>
  );
}
