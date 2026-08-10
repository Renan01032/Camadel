"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";

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
      {/* Textura sutil de "fibra de carbono" */}
      <div className="absolute inset-0 bg-carbon-weave opacity-[0.35]" />

      {/* Marca d'água estrutural: os dois paralelogramos da logo, ampliados */}
      <div className="pointer-events-none absolute -right-24 bottom-0 top-0 hidden items-center opacity-[0.08] md:flex">
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

      {/*
        TODO(imagem): inserir aqui uma foto real de alta qualidade (ferramentas
        Camadel em uso) via next/image como background, com um overlay escuro
        (ex.: bg-black/60) por cima para manter a legibilidade do texto.
      */}

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-camadel-red sm:text-sm"
        >
          Linha Premium de Ferramentas para Construção
        </motion.span>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="text-metal mb-6 max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl sm:leading-[1.02]"
        >
          PRECISÃO QUE CONSTRÓI. FORÇA QUE VOCÊ CARREGA NO OMBRO.
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          custom={0.2}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 max-w-xl font-body text-base text-camadel-muted sm:text-lg"
        >
          Da obra ao acabamento fino: ferramentas manuais e elétricas
          projetadas para aguentar turno duplo, canteiro pesado e prazo
          apertado — sem abrir mão da precisão.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          custom={0.3}
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#categorias"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-camadel-black transition-all hover:bg-camadel-redDark hover:text-camadel-silverHi hover:shadow-red-glow"
          >
            Compre Agora <ArrowRight size={16} />
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-camadel-silverHi transition-colors hover:bg-camadel-red/10"
          >
            Ver Catálogo
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          custom={0.42}
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 grid max-w-md grid-cols-3 gap-6"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-semibold text-camadel-silverHi sm:text-3xl">
                {stat.number}
              </div>
              <div className="mt-1 text-[11px] tracking-wide text-camadel-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
