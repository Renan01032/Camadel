"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { RulerDivider } from "./RulerDivider";
import { CategoryCard } from "./CategoryCard";

export function CategoriasGrid() {
  return (
    <section id="categorias" className="bg-camadel-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Catálogo" />

        <div className="mb-12 mt-8 flex flex-wrap items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl"
          >
            Ferramentas certas para cada etapa da obra
          </motion.h2>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-camadel-red hover:text-camadel-silverHi"
          >
            Ver catálogo completo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} delay={(i % 4) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
