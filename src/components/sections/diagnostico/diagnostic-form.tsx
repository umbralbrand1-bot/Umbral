"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAM_SIZES = ["1–5", "6–15", "16–50", "51–200", "200+"];

const SECTORS = [
  "E-commerce / Retail",
  "Clínica / Salud",
  "Agencia de marketing",
  "Inmobiliaria",
  "SaaS / Tech",
  "Restaurante / Gastronomía",
  "Educación",
  "Servicios profesionales",
  "Otro",
];

const BOTTLENECKS = [
  "Atención al cliente / soporte",
  "Generación y calificación de leads",
  "Facturación y cobros",
  "Reportes y análisis de datos",
  "Onboarding de clientes",
  "Gestión de inventario",
  "Comunicación interna",
  "Seguimiento post-venta",
];

const BUDGETS = [
  "Menos de $1,000 USD",
  "$1,000 – $3,000 USD",
  "$3,000 – $7,000 USD",
  "Más de $7,000 USD",
  "Aún no lo sé",
];

const URGENCY = [
  { value: "this-month", label: "Este mes — tengo urgencia" },
  { value: "next-3", label: "Próximos 3 meses" },
  { value: "exploring", label: "Solo explorando por ahora" },
];

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  teamSize: string;
  sector: string;
  bottlenecks: string[];
  budget: string;
  urgency: string;
  extraContext: string;
}

export function DiagnosticForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    role: "",
    email: "",
    teamSize: "",
    sector: "",
    bottlenecks: [],
    budget: "",
    urgency: "",
    extraContext: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function toggleBottleneck(val: string) {
    setForm((f) => ({
      ...f,
      bottlenecks: f.bottlenecks.includes(val)
        ? f.bottlenecks.filter((b) => b !== val)
        : [...f.bottlenecks, val],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // PLACEHOLDER: reemplazar con llamada real a API/email (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center gap-5 rounded-2xl border border-success/20 bg-success/5 p-12 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-success" aria-hidden="true" />
        <div>
          <h2 className="text-xl font-bold text-[#FAFAFA]">
            ¡Recibimos tu solicitud!
          </h2>
          <p className="mt-2 text-[#A1A1AA]">
            Te escribimos en menos de 24 horas hábiles para coordinar el diagnóstico.
            Revisá tu bandeja de entrada (y spam, por las dudas).
          </p>
        </div>
        <p className="text-sm text-[#A1A1AA]">
          Mientras tanto podés{" "}
          <a href="/casos" className="text-[#00E5FF] hover:text-[#00E5FF]/70 underline underline-offset-2">
            leer nuestros casos de estudio
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
      noValidate
      aria-label="Formulario de diagnóstico gratuito"
    >
      {/* Personal info */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold uppercase tracking-widest text-[#A1A1AA] mb-4">
          Datos de contacto
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="María González"
              required
              aria-required="true"
              autoComplete="name"
              className="bg-surface-900 border-surface-700 focus:border-[#00E5FF]"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="maria@empresa.com"
              required
              aria-required="true"
              autoComplete="email"
              className="bg-surface-900 border-surface-700 focus:border-[#00E5FF]"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company">Empresa *</Label>
            <Input
              id="company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Nombre de tu empresa"
              required
              aria-required="true"
              autoComplete="organization"
              className="bg-surface-900 border-surface-700 focus:border-[#00E5FF]"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="role">Tu rol</Label>
            <Input
              id="role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="CEO, COO, Fundador..."
              autoComplete="organization-title"
              className="bg-surface-900 border-surface-700 focus:border-[#00E5FF]"
            />
          </div>
        </div>
      </fieldset>

      {/* Team size */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-[#FAFAFA]">
          Tamaño del equipo *
        </legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tamaño del equipo">
          {TEAM_SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setForm({ ...form, teamSize: s })}
              aria-pressed={form.teamSize === s}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                form.teamSize === s
                  ? "border-[#00E5FF]/40 bg-[#00E5FF]/15 text-[#00E5FF]/70"
                  : "border-surface-700 bg-surface-900 text-[#A1A1AA] hover:border-surface-600 hover:text-[#FAFAFA]"
              )}
            >
              {s} personas
            </button>
          ))}
        </div>
      </fieldset>

      {/* Sector */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-[#FAFAFA]">
          Sector de tu empresa *
        </legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Sector">
          {SECTORS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setForm({ ...form, sector: s })}
              aria-pressed={form.sector === s}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                form.sector === s
                  ? "border-[#00E5FF]/40 bg-[#00E5FF]/15 text-[#00E5FF]/70"
                  : "border-surface-700 bg-surface-900 text-[#A1A1AA] hover:border-surface-600 hover:text-[#FAFAFA]"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Bottlenecks */}
      <fieldset>
        <legend className="mb-1 text-sm font-semibold text-[#FAFAFA]">
          Mayor cuello de botella actual
        </legend>
        <p className="mb-3 text-xs text-[#A1A1AA]">Podés seleccionar más de uno</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Cuellos de botella">
          {BOTTLENECKS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => toggleBottleneck(b)}
              aria-pressed={form.bottlenecks.includes(b)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                form.bottlenecks.includes(b)
                  ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                  : "border-surface-700 bg-surface-900 text-[#A1A1AA] hover:border-surface-600 hover:text-[#FAFAFA]"
              )}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Budget */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-[#FAFAFA]">
          Presupuesto estimado para este proyecto
        </legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Presupuesto">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setForm({ ...form, budget: b })}
              aria-pressed={form.budget === b}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                form.budget === b
                  ? "border-[#00E5FF]/40 bg-[#00E5FF]/15 text-[#00E5FF]/70"
                  : "border-surface-700 bg-surface-900 text-[#A1A1AA] hover:border-surface-600 hover:text-[#FAFAFA]"
              )}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Urgency */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-[#FAFAFA]">
          ¿Cuándo querés empezar?
        </legend>
        <div className="space-y-2" role="group" aria-label="Urgencia">
          {URGENCY.map((u) => (
            <label
              key={u.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all",
                form.urgency === u.value
                  ? "border-[#00E5FF]/40 bg-[#00E5FF]/8"
                  : "border-surface-700 bg-surface-900/60 hover:border-surface-600"
              )}
            >
              <input
                type="radio"
                name="urgency"
                value={u.value}
                checked={form.urgency === u.value}
                onChange={() => setForm({ ...form, urgency: u.value })}
                className="sr-only"
              />
              <span
                className={cn(
                  "h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center",
                  form.urgency === u.value
                    ? "border-[#00E5FF] bg-[#00E5FF]"
                    : "border-surface-600"
                )}
                aria-hidden="true"
              >
                {form.urgency === u.value && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <span className={cn(
                "text-sm",
                form.urgency === u.value ? "text-[#FAFAFA]" : "text-[#A1A1AA]"
              )}>
                {u.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Context */}
      <div className="space-y-1.5">
        <Label htmlFor="context">
          ¿Algo más que quieras contarnos? (opcional)
        </Label>
        <Textarea
          id="context"
          value={form.extraContext}
          onChange={(e) => setForm({ ...form, extraContext: e.target.value })}
          placeholder="Describí brevemente tu operación o el proceso específico que querés automatizar..."
          rows={4}
          className="bg-surface-900 border-surface-700 focus:border-[#00E5FF] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading || !form.name || !form.email || !form.company}
        className="w-full cta-primary py-6 text-base font-semibold"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            Solicitar diagnóstico gratuito
          </>
        )}
      </Button>

      <p className="text-center text-xs text-[#A1A1AA]">
        Respondemos en menos de 24 horas hábiles. Sin spam. Sin compromiso de compra.
      </p>
    </form>
  );
}
