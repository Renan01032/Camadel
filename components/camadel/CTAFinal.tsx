"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section className="bg-camadel-black py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-sm border border-camadel-red bg-gradient-to-br from-camadel-charcoal2 to-camadel-black px-8 py-14 text-center sm:px-16 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(226,35,26,0.14), transparent 65%)",
            }}
          />
          <h2 className="relative mb-4 font-display text-2xl font-semibold text-camadel-silverHi sm:text-4xl">
            Pronto para elevar o nível da sua construção?
          </h2>
          <p className="relative mx-auto mb-9 max-w-lg text-sm text-camadel-muted sm:text-base">
            Fale agora com um especialista Camadel e monte a lista ideal
            para o seu projeto — sem compromisso.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-sm bg-camadel-red px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-camadel-redDark hover:shadow-red-glow"
            >
              Solicitar orçamento <ArrowRight size={17} />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
