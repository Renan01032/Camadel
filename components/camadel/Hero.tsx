"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[560px] items-end overflow-hidden bg-camadel-black pt-24 sm:min-h-[640px] lg:min-h-[760px] lg:pt-28"
    >
      <Image
        src={HERO.image}
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-[50%_38%]"
      />
      {/* Gradiente da esquerda (legibilidade do texto) */}
      <div className="absolute inset-0 bg-gradient-to-r from-camadel-black via-camadel-black/80 to-camadel-black/10" />
      {/* Gradiente inferior (transição suave para a próxima seção) */}
      <div className="absolute inset-0 bg-gradient-to-t from-camadel-black via-camadel-black/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl">
          <motion.span
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-5 inline-block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-camadel-red sm:text-sm"
          >
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="max-w-xl font-display text-[2.5rem] font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl"
          >
            {HERO.title}{" "}
            <span className="text-camadel-red">{HERO.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-camadel-silverHi/90 sm:text-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-camadel-red px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark hover:shadow-red-glow"
            >
              Conheça nosso catálogo <ArrowRight size={16} />
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-camadel-red hover:text-camadel-red"
            >
              Fale com a Camadel
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
