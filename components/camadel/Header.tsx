"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-camadel-steel bg-camadel-black/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* Ícone da logo com pulsação sutil no destaque vermelho */}
          <Image
            src="/camadel-logo.jpg"
            alt="Camadel — Ferramentas para Construção"
            width={40}
            height={40}
            priority
            className="animate-pulse-glow rounded-sm object-cover"
          />
          <span className="text-metal hidden font-display text-lg font-semibold tracking-wide sm:block">
            CAMADEL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-[#C9C9C7] transition-colors hover:text-camadel-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden items-center gap-1.5 rounded-sm bg-camadel-red px-4 py-2 font-body text-sm font-semibold tracking-wide text-camadel-black transition-all hover:bg-camadel-redDark hover:text-camadel-silverHi hover:shadow-red-glow sm:inline-flex"
          >
            Orçamento Expresso
          </a>
          <button
            type="button"
            className="p-2 text-camadel-silverHi lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-camadel-steel px-5 pb-5 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="pt-4 font-body text-sm text-[#C9C9C7]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-2 inline-flex justify-center rounded-sm bg-camadel-red px-4 py-2.5 font-body text-sm font-semibold text-camadel-black"
            onClick={() => setOpen(false)}
          >
            Orçamento Expresso
          </a>
        </div>
      )}
    </header>
  );
}
