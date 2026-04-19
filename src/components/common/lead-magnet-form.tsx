"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function LeadMagnetForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // PLACEHOLDER: conectar con ConvertKit/Resend
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex items-center gap-2 text-sm text-success" role="alert" aria-live="polite">
        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>¡Listo! Revisá tu email.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm gap-2"
      aria-label="Suscripción a lead magnet"
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@empresa.com"
        required
        aria-label="Correo electrónico"
        className="bg-surface-800 border-surface-700 text-[#FAFAFA] placeholder:text-[#A1A1AA] focus:border-[#00E5FF]"
      />
      <Button type="submit" className="cta-primary shrink-0">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Descargar PDF</span>
      </Button>
    </form>
  );
}
