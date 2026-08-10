import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { FOOTER_COLUMNS, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants";

const SOCIAL_ICONS = [Instagram, Facebook, Youtube];

export function Footer() {
  return (
    <footer className="border-t border-camadel-steel bg-camadel-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/camadel-logo.jpg"
                alt="Camadel"
                width={36}
                height={36}
                className="rounded-sm object-cover"
              />
              <span className="text-metal font-display font-semibold">CAMADEL</span>
            </div>
            <p className="mb-6 max-w-xs text-sm text-camadel-muted">
              Ferramentas para construção com a robustez que a obra exige e a
              precisão que o profissional confia.
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-camadel-steel text-camadel-muted transition-colors hover:border-camadel-red hover:text-camadel-red"
                  aria-label="Rede social Camadel"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-camadel-muted transition-colors hover:text-camadel-red"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-camadel-silverHi">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-camadel-muted">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-camadel-red" /> {CONTACT_PHONE}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-camadel-red" /> {CONTACT_EMAIL}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-camadel-red" /> Mauá, São
                Paulo — SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-camadel-steel pt-6 text-xs text-[#6C6C6A] sm:flex-row">
          <span>© {new Date().getFullYear()} Camadel Ferramentas. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
