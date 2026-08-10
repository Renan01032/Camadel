"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section id="contato" className="bg-camadel-black py-20 sm:py-24">
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
            Pronto para elevar o nível da sua construção?
          </h2>
          <p className="relative mx-auto mb-9 max-w-lg text-sm text-camadel-muted sm:text-base">
            Fale agora com um especialista Camadel e monte o kit ideal para o
            seu projeto.
          </p>
          {/*
            Nota (ADR-009): fechamento de negociação B2B ocorre pelo número
            único do WhatsApp Business da Camadel — não há chat dentro da
            plataforma. Este CTA deve sempre apontar para WHATSAPP_LINK.
          */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-sm bg-camadel-red px-8 py-4 font-body text-sm font-semibold tracking-wide text-camadel-black transition-all hover:bg-camadel-redDark hover:text-camadel-silverHi hover:shadow-red-glow"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
