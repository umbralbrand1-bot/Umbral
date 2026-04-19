"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="text-[#A1A1AA] hover:text-[#FAFAFA]"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            aria-label="Menú móvil"
            className="absolute inset-x-0 top-16 border-b border-surface-700 bg-[#0A0A0B]/95 backdrop-blur-xl px-4 py-6"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center py-2.5 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-4 w-full cta-primary"
            >
              <Link href="/diagnostico" onClick={() => setOpen(false)}>
                Agendar diagnóstico gratuito
              </Link>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
