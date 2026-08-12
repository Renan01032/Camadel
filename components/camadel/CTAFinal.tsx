"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CTAFinal({
  title = "Pronto para elevar o nível da sua construção?",
  text = "Fale agora com um especialista Camadel e monte a lista ideal de materiais para o seu projeto.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-camadel-black py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-sm border border-camadel-red bg-gradient-to-br from-camadel-charcoal2 to-camadel-black px-8 py-14 text-center sm:px-16 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(226,35,26,0.14), transparent 65%)",
            }}
          />
          <h2 className="relative mb-4 font-display text-2xl font-semibold text-camadel-silverHi sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mb-9 max-w-lg text-sm text-camadel-muted sm:text-base">
            {text}
          </p>
          <a
            href={getWhatsAppUrl("Olá, Camadel! Gostaria de solicitar um orçamento para a minha obra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-sm bg-camadel-red px-8 py-4 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-camadel-redDark hover:shadow-red-glow"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
