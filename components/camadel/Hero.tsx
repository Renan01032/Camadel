"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { GenerativeSparks } from "./GenerativeSparks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-camadel-black">
      <div className="absolute inset-0 bg-carbon-weave opacity-[0.35]" />

      {/* Marca d'água estrutural: os dois paralelogramos da logo, ampliados */}
      <div className="pointer-events-none absolute -right-24 bottom-0 top-0 hidden items-center opacity-[0.07] md:flex">
        <div className="mr-10 h-[480px] w-[90px] -skew-x-[18deg] bg-camadel-red" />
        <div className="h-[480px] w-[90px] -skew-x-[18deg] bg-camadel-red" />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(226,35,26,0.10), transparent 60%)",
        }}
      />

      {/* Faíscas generativas — assinatura visual em vez de foto de fundo */}
      <GenerativeSparks className="pointer-events-none absolute inset-0 size-full opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-camadel-red sm:text-sm"
        >
          {HERO_CONTENT.eyebrow}
        </motion.span>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="text-metal mb-6 max-w-3xl font-display text-[2.5rem] font-semibold uppercase leading-[1.05] tracking-tight sm:text-6xl sm:leading-[1.02]"
        >
          {HERO_CONTENT.title}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          custom={0.2}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 max-w-xl font-body text-base text-camadel-muted sm:text-lg"
        >
          {HERO_CONTENT.paragraph}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          custom={0.3}
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-camadel-redDark hover:shadow-red-glow"
          >
            {HERO_CONTENT.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <a
            href={getWhatsAppUrl("Olá, Camadel! Gostaria de solicitar um orçamento para a minha obra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-camadel-silverHi transition-colors hover:bg-camadel-red/10"
          >
            <MessageCircle size={16} />
            {HERO_CONTENT.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
