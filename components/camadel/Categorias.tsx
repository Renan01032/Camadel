"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CATEGORIAS } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "./RulerDivider";

export function Categorias() {
  return (
    <section id="categorias" className="bg-camadel-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Categorias" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 mt-10 max-w-xl font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl"
        >
          Ferramentas certas para cada etapa da obra
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIAS.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon];
            return (
              <motion.a
                key={cat.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hover"
                className="group block overflow-hidden rounded-sm border border-camadel-steel transition-colors hover:border-camadel-red"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-camadel-charcoal2 to-camadel-black">
                  {/*
                    TODO(produto): quando a foto real do produto estiver disponível
                    (cat.image), trocar este bloco por:
                    <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                  */}
                  <div className="absolute inset-0 bg-carbon-weave opacity-40" />
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon size={54} className="text-camadel-red" strokeWidth={1.25} />
                  </motion.div>
                </div>
                <div className="bg-camadel-charcoal p-5">
                  <h3 className="mb-1 font-display text-base font-medium text-camadel-silverHi">
                    {cat.title}
                  </h3>
                  <p className="mb-3 text-sm text-camadel-muted">{cat.text}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-camadel-red">
                    Ver produtos
                    <motion.span
                      variants={{ hover: { x: 3 } }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex"
                    >
                      <ChevronRight size={14} />
                    </motion.span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
