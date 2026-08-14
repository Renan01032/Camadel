"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";
import { BlueprintFrame } from "./BlueprintFrame";

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
    <section id="inicio" className="relative overflow-hidden bg-camadel-black pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-carbon-weave opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 18% 15%, rgba(226,35,26,0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div>
          <motion.span
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-camadel-red"
          >
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="text-metal max-w-xl font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl sm:leading-[1.02]"
          >
            {HERO.title}{" "}
            <span className="text-camadel-red" style={{ WebkitTextFillColor: "#E2231A" }}>
              {HERO.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-7 max-w-lg text-base leading-relaxed text-camadel-muted sm:text-lg"
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
              className="inline-flex items-center gap-2 rounded-sm bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark hover:shadow-red-glow"
            >
              Conheça nosso catálogo <ArrowRight size={16} />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
            >
              Fale com a Camadel
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
        >
          <BlueprintFrame label="Camadel / Obra">
            <div className="overflow-hidden rounded-sm border border-camadel-line">
              <Image
                src={HERO.image}
                alt={HERO.imageAlt}
                width={1600}
                height={900}
                priority
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </BlueprintFrame>
        </motion.div>
      </div>
    </section>
  );
}
