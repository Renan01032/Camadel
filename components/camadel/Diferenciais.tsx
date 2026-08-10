"use client";

import { motion } from "framer-motion";
import { DIFERENCIAIS } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function Diferenciais() {
  return (
    <section className="bg-camadel-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red">
            Por que Camadel
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl">
            Feita para quem não pode parar a obra
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="h-full rounded-sm border border-camadel-steel bg-camadel-charcoal p-6 transition-colors hover:border-camadel-red hover:shadow-lg"
              >
                <Icon size={26} className="text-camadel-red" strokeWidth={1.75} />
                <h3 className="mb-2 mt-4 font-display text-base font-medium tracking-wide text-camadel-silverHi">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-camadel-muted">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
