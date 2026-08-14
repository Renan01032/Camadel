"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ClipboardList, Menu, X } from "lucide-react";
import { CATEGORIES, NAV_LINKS } from "@/lib/constants";
import { useQuote } from "@/lib/quote-context";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const pathname = usePathname();
  const catalogRef = useRef<HTMLDivElement>(null);
  const { count, openDrawer, hydrated } = useQuote();

  useEffect(() => {
    setMobileOpen(false);
    setCatalogOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) {
        setCatalogOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-camadel-line bg-camadel-black/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/camadel-logo.png"
            alt="Camadel — Ferramentas para Construção"
            width={785}
            height={172}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.href === "/catalogo") {
              return (
                <div key={link.href} ref={catalogRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setCatalogOpen((v) => !v)}
                    className="flex items-center gap-1 rounded-full px-3.5 py-2 font-body text-sm text-camadel-silverHi transition-colors hover:bg-camadel-charcoal hover:text-camadel-red"
                    aria-expanded={catalogOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${catalogOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {catalogOpen && (
                    <div className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-xl border border-camadel-line bg-camadel-charcoal p-2 shadow-2xl animate-slide-up">
                      <div className="grid grid-cols-1 gap-0.5">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/catalogo/${cat.slug}`}
                            className="rounded-lg px-3 py-2 font-body text-sm text-camadel-silverHi transition-colors hover:bg-camadel-black hover:text-camadel-red"
                          >
                            {cat.navLabel}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-1 border-t border-camadel-line pt-1">
                        <Link
                          href="/catalogo"
                          className="block rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wide text-camadel-red hover:bg-camadel-black"
                        >
                          Ver catálogo completo
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 font-body text-sm text-camadel-silverHi transition-colors hover:bg-camadel-charcoal hover:text-camadel-red"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openDrawer}
            aria-label="Abrir lista de cotação"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-camadel-line text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
          >
            <ClipboardList size={19} />
            {hydrated && count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-camadel-red px-1 font-mono text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <Link
            href="/#contato"
            className="hidden items-center rounded-full bg-camadel-red px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark sm:inline-flex"
          >
            Solicitar Orçamento
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="text-camadel-silverHi lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-camadel-line bg-camadel-black px-5 py-4 text-sm lg:hidden">
          {NAV_LINKS.map((link) => {
            if (link.href === "/catalogo") {
              return (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMobileCatalogOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 text-camadel-silverHi"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileCatalogOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileCatalogOpen && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-camadel-line pl-3">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/catalogo/${cat.slug}`}
                          className="py-2 text-sm text-camadel-muted hover:text-camadel-red"
                        >
                          {cat.navLabel}
                        </Link>
                      ))}
                      <Link href="/catalogo" className="py-2 text-sm text-camadel-red">
                        Ver catálogo completo
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-camadel-silverHi"
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-camadel-red px-5 py-3 font-display text-xs font-bold uppercase tracking-wide text-white"
          >
            Solicitar Orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
