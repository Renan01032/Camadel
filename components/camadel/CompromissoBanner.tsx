"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { QUEM_SOMOS } from "@/lib/constants";

export function CompromissoBanner({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-start gap-4 rounded-sm border border-camadel-red bg-camadel-charcoal2 p-6 sm:items-center sm:p-7 ${className}`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-camadel-red text-camadel-red">
        <Target size={20} strokeWidth={1.75} />
      </span>
      <p className="font-display text-base font-medium leading-snug text-camadel-silverHi sm:text-lg">
        {QUEM_SOMOS.commitment}
      </p>
    </motion.div>
  );
}
