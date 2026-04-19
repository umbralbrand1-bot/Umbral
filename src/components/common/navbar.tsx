import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-surface-700/60 bg-[#0A0A0B]/80 backdrop-blur-xl"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Umbral — Ir al inicio">
          <Logo size={34} glow />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex">
          <ul className="flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#A1A1AA] transition-colors hover:text-[#FAFAFA]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex cta-primary text-sm font-medium"
          >
            <Link href="/diagnostico">Agendar diagnóstico</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
