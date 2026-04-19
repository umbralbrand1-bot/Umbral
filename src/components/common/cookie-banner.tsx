"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("umbral-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("umbral-cookies-accepted", "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-label="Aviso de cookies"
          aria-live="polite"
          className="fixed bottom-6 left-4 right-4 z-50 mx-auto max-w-md rounded-xl border border-surface-700 bg-surface-900/95 p-4 shadow-xl backdrop-blur-md sm:left-6 sm:right-auto"
        >
          <p className="text-sm text-[#A1A1AA]">
            Usamos cookies para mejorar tu experiencia.{" "}
            <Link href="/privacidad" className="text-[#00E5FF] hover:text-[#00E5FF]/70 underline underline-offset-2">
              Política de privacidad
            </Link>
          </p>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={accept} className="cta-primary text-xs">
              Aceptar
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setVisible(false)}
              className="text-xs text-[#A1A1AA] hover:text-[#FAFAFA]"
            >
              Rechazar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
