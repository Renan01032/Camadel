import {
  Hammer,
  Wrench,
  Ruler,
  ShieldCheck,
  Compass,
  Hand,
  Headphones,
  Zap,
  Scissors,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa de nome (string, vindo de lib/constants.ts) -> componente Lucide.
 * Mantém o conteúdo (constants.ts) desacoplado da biblioteca de ícones.
 */
export const ICON_MAP: Record<string, LucideIcon> = {
  Hammer,
  Wrench,
  Ruler,
  ShieldCheck,
  Compass,
  Hand,
  Headphones,
  Zap,
  Scissors,
};
