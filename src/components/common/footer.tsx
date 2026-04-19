import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Mail } from "lucide-react";
import { LeadMagnetForm } from "./lead-magnet-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-surface-700 bg-surface-950"
    >
      {/* Lead magnet banner */}
      <div className="border-b border-surface-700 bg-surface-900/50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#00E5FF] mb-1">Lead magnet gratuito</p>
              <h3 className="text-lg font-semibold text-[#FAFAFA]">
                10 procesos que tu negocio debería automatizar con IA en 2026
              </h3>
              <p className="mt-1 text-sm text-[#A1A1AA]">PDF descargable. Sin spam. Para dueños de pymes serios.</p>
            </div>
            {/* PLACEHOLDER: conectar con email provider (Resend, ConvertKit, etc.) */}
            <LeadMagnetForm />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Umbral inicio">
              <div className="relative flex h-7 w-5 items-center justify-center" aria-hidden="true">
                <span className="absolute left-0 h-full w-0.5 rounded-full bg-gradient-to-b from-[#00E5FF] to-[#0ea5e9]" />
                <span className="absolute right-0 h-full w-0.5 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600" />
                <span className="absolute h-0.5 w-full rounded-full bg-gradient-to-r from-[#00E5FF] to-cyan-400 opacity-80" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-[#FAFAFA]">umbral</span>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
            <div className="mt-5 flex items-center gap-4">
              {/* PLACEHOLDER: reemplazar con links reales */}
              {/* PLACEHOLDER: reemplazar hrefs con links reales */}
              <a
                href="https://twitter.com/umbralstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X de Umbral"
                className="text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors border border-surface-700 rounded px-2 py-1"
              >
                X / Twitter
              </a>
              <a
                href="https://linkedin.com/company/umbral-studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Umbral"
                className="text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors border border-surface-700 rounded px-2 py-1"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Enviar email a Umbral"
                className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Links del sitio">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">Sitio</p>
            <ul className="flex flex-col gap-3" role="list">
              {[...NAV_LINKS, { label: "Diagnóstico gratuito", href: "/diagnostico" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links legales">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">Legal</p>
            <ul className="flex flex-col gap-3" role="list">
              {/* PLACEHOLDER: crear páginas de privacidad y términos */}
              <li>
                <Link href="/privacidad" className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-surface-700 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#A1A1AA]">
            &copy; {year} Umbral. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#A1A1AA]">
            Hecho con precisión en 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
