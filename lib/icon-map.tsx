import {
  Hammer,
  ShieldCheck,
  Headphones,
  Zap,
  CircleDot,
  Building2,
  Sparkles,
  Bolt,
  Award,
  PackageCheck,
  Truck,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa de nome (string, vindo de lib/constants.ts) -> componente Lucide.
 * Mantém o conteúdo (constants.ts) desacoplado da biblioteca de ícones.
 * Só entram aqui ícones referenciados dinamicamente via `icon: "Nome"`
 * em constants.ts — ícones usados diretamente em JSX (ex: MessageCircle,
 * Mail, Phone) são importados direto de lucide-react em cada componente.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Hammer,
  ShieldCheck,
  Headphones,
  Zap,
  CircleDot,
  Building2,
  Sparkles,
  Bolt,
  Award,
  PackageCheck,
  Truck,
  MapPin,
};
