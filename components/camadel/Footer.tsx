import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  CATEGORIES,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAV_LINKS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const SOCIAL = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-camadel-line bg-camadel-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/images/camadel-logo.png"
              alt="Camadel"
              width={785}
              height={172}
              className="mb-4 h-9 w-auto"
            />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-camadel-muted">
              Ferramentas e equipamentos para construção civil, com a
              robustez que a obra exige e o atendimento que o profissional
              confia. Catálogo digital para orçamento — sem venda direta pelo
              site.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-camadel-line text-camadel-muted transition-colors hover:border-camadel-red hover:text-camadel-red"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-camadel-muted transition-colors hover:text-camadel-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Catálogo
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/catalogo/${cat.slug}`}
                    className="text-sm text-camadel-muted transition-colors hover:text-camadel-red"
                  >
                    {cat.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalogo" className="text-sm text-camadel-red">
                  Ver tudo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-camadel-muted">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-camadel-red"
                >
                  <MessageCircle size={14} className="shrink-0 text-camadel-red" /> {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 transition-colors hover:text-camadel-red"
                >
                  <Mail size={14} className="shrink-0 text-camadel-red" /> {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-camadel-red" />
                {CONTACT_ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-camadel-line pt-6 font-mono text-xs text-[#6C6C6A] sm:flex-row">
          <span>© {new Date().getFullYear()} Camadel Ferramentas. Todos os direitos reservados.</span>
          <span>Catálogo digital para orçamento — sem venda direta</span>
        </div>
      </div>
    </footer>
  );
}
