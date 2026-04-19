"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola, quiero agendar un diagnóstico gratuito con Umbral."
  );
  const href = `https://wa.me/${SITE.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
    </motion.a>
  );
}
