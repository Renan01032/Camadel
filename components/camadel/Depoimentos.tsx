"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { DEPOIMENTOS } from "@/lib/constants";

export function Depoimentos() {
  return (
    <section className="bg-camadel-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red"
        >
          Quem usa, aprova
        </motion.span>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((dep, i) => (
            <motion.div
              key={dep.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-sm border border-camadel-steel bg-camadel-black p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-camadel-red text-camadel-red" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-[#D4D4D2]">
                &ldquo;{dep.text}&rdquo;
              </p>
              <div>
                <div className="font-body text-sm font-medium text-camadel-silverHi">
                  {dep.name}
                </div>
                <div className="mt-0.5 text-xs text-camadel-muted">{dep.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
