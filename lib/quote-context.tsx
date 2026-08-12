"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type QuoteContextValue = {
  items: string[];
  count: number;
  toggleItem: (item: string) => void;
  removeItem: (item: string) => void;
  addMany: (items: string[]) => void;
  removeMany: (items: string[]) => void;
  isSelected: (item: string) => boolean;
  clear: () => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggleOpen: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

const STORAGE_KEY = "camadel:orcamento";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Carrega seleção salva (se houver) ao montar no navegador.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // localStorage indisponível — segue sem persistência.
    }
    setHydrated(true);
  }, []);

  // Persiste a cada mudança.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignora falhas de storage
    }
  }, [items, hydrated]);

  const toggleItem = useCallback((item: string) => {
    setItems((current) =>
      current.includes(item) ? current.filter((i) => i !== item) : [...current, item]
    );
  }, []);

  const removeItem = useCallback((item: string) => {
    setItems((current) => current.filter((i) => i !== item));
  }, []);

  const addMany = useCallback((newItems: string[]) => {
    setItems((current) => {
      const merged = [...current];
      for (const item of newItems) {
        if (!merged.includes(item)) merged.push(item);
      }
      return merged;
    });
  }, []);

  const removeMany = useCallback((removed: string[]) => {
    setItems((current) => current.filter((i) => !removed.includes(i)));
  }, []);

  const isSelected = useCallback((item: string) => items.includes(item), [items]);

  const clear = useCallback(() => setItems([]), []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggleOpen = useCallback(() => setIsOpen((v) => !v), []);

  const value = useMemo<QuoteContextValue>(
    () => ({
      items,
      count: items.length,
      toggleItem,
      removeItem,
      addMany,
      removeMany,
      isSelected,
      clear,
      isOpen,
      open,
      close,
      toggleOpen,
    }),
    [items, toggleItem, removeItem, addMany, removeMany, isSelected, clear, isOpen, open, close, toggleOpen]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote precisa ser usado dentro de <QuoteProvider>");
  }
  return ctx;
}
