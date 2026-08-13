"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
      <div className="absolute inset-0 bg-carbon-weave opacity-[0.3]" />

      {/* Marca d'água estrutural: os dois paralelogramos da logo, ampliados */}
      <div className="pointer-events-none absolute -right-24 bottom-0 top-0 hidden items-center opacity-[0.05] xl:flex">
        <div className="mr-10 h-[480px] w-[90px] -skew-x-[18deg] bg-camadel-red" />
        <div className="h-[480px] w-[90px] -skew-x-[18deg] bg-camadel-red" />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 20% 15%, rgba(226,35,26,0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
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
              className="text-metal mb-6 font-display text-[2.4rem] font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.02]"
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-camadel-redDark hover:shadow-red-glow active:translate-y-0"
              >
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={getWhatsAppUrl("Olá, Camadel! Gostaria de solicitar um orçamento para a minha obra.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-camadel-silverHi transition-all duration-200 hover:-translate-y-0.5 hover:bg-camadel-red/10 active:translate-y-0"
              >
                <MessageCircle size={16} />
                {HERO_CONTENT.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-camadel-steel shadow-2xl shadow-black/50 lg:max-w-none"
          >
            <Image
              src="/hero-tools.jpg"
              alt="Furadeira Makita, serra circular e maletas Vonder e MTX em uso em uma obra"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 60vw, 92vw"
              className="object-cover object-[50%_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-camadel-black/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
