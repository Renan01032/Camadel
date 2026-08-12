import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND, CATALOG } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-camadel-steel bg-camadel-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-6 max-w-xs text-sm text-camadel-muted">
              Ferramentas, EPIs, abrasivos, fixação e materiais para construção
              civil — a robustez que a obra exige e a precisão que o
              profissional confia.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-camadel-steel px-4 py-2.5 text-sm text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
            >
              <MessageCircle size={16} className="text-camadel-red" />
              Falar no WhatsApp
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Catálogo
            </h4>
            <ul className="space-y-2.5">
              {CATALOG.slice(0, 7).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/catalogo/${category.slug}`}
                    className="text-sm text-camadel-muted transition-colors hover:text-camadel-red"
                  >
                    {category.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/quem-somos" className="text-sm text-camadel-muted transition-colors hover:text-camadel-red">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/area-de-atuacao" className="text-sm text-camadel-muted transition-colors hover:text-camadel-red">
                  Área de atuação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-camadel-muted transition-colors hover:text-camadel-red">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-camadel-muted">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="shrink-0 text-camadel-red" /> {BRAND.whatsappDisplay}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-camadel-red" /> {BRAND.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-camadel-red" /> {BRAND.regionShort}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-camadel-steel pt-6 text-xs text-[#6C6C6A] sm:flex-row">
          <span>© {new Date().getFullYear()} Camadel Ferramentas. Todos os direitos reservados.</span>
          <span>Catálogo digital para orçamento — sem venda direta pelo site.</span>
        </div>
      </div>
    </footer>
  );
}
