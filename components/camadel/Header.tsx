"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { CATALOG, NAV_LINKS } from "@/lib/constants";
import { getQuoteWhatsAppUrl } from "@/lib/whatsapp";
import { useQuote } from "@/lib/quote-context";
import { Logo } from "./Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const pathname = usePathname();
  const { items, count } = useQuote();

  const quoteHref = getQuoteWhatsAppUrl(items);
  const [beforeCatalog, afterCatalog] = [NAV_LINKS.slice(0, 1), NAV_LINKS.slice(1)];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-camadel-steel bg-camadel-black/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {beforeCatalog.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 py-2 font-body text-sm tracking-wide text-[#C9C9C7] transition-colors hover:text-camadel-red"
            >
              Catálogo
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-1 rounded-xl border border-camadel-steel bg-camadel-charcoal p-3 opacity-0 shadow-2xl shadow-black/60 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {CATALOG.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/catalogo/${category.slug}`}
                    className="rounded-lg px-3 py-2.5 text-sm text-camadel-silverHi transition-colors hover:bg-camadel-black hover:text-camadel-red"
                  >
                    {category.navLabel}
                  </Link>
                ))}
              </div>
              <Link
                href="/catalogo"
                className="mt-2 block rounded-lg border-t border-camadel-steel px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-camadel-red"
              >
                Ver catálogo completo →
              </Link>
            </div>
          </div>

          {afterCatalog.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-camadel-red px-5 py-2.5 font-body text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-camadel-redDark hover:shadow-red-glow active:translate-y-0 sm:inline-flex"
          >
            <MessageCircle size={16} />
            {count > 0 ? `Enviar Orçamento (${count})` : "Solicitar Orçamento"}
          </a>
          <button
            type="button"
            className="p-2 text-camadel-silverHi lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-t border-camadel-steel px-5 pb-5 lg:hidden">
          {beforeCatalog.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-body text-sm text-[#C9C9C7]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            className="flex items-center justify-between py-3 text-left font-body text-sm text-[#C9C9C7]"
            onClick={() => setMobileCatalogOpen((v) => !v)}
            aria-expanded={mobileCatalogOpen}
          >
            Catálogo
            <ChevronDown
              size={16}
              className={`transition-transform ${mobileCatalogOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileCatalogOpen && (
            <div className="mb-1 ml-3 flex flex-col gap-1 border-l border-camadel-steel pl-4">
              {CATALOG.map((category) => (
                <Link
                  key={category.slug}
                  href={`/catalogo/${category.slug}`}
                  className="py-2 text-sm text-camadel-muted transition-colors hover:text-camadel-red"
                  onClick={() => setMobileOpen(false)}
                >
                  {category.navLabel}
                </Link>
              ))}
            </div>
          )}

          {afterCatalog.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-body text-sm text-[#C9C9C7]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-camadel-red px-4 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-camadel-redDark active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={16} />
            {count > 0 ? `Enviar Orçamento (${count})` : "Solicitar Orçamento"}
          </a>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-body text-sm tracking-wide transition-colors hover:text-camadel-red ${
        active ? "text-camadel-red" : "text-[#C9C9C7]"
      }`}
    >
      {children}
    </Link>
  );
}
