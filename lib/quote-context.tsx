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

export type QuoteItem = {
  /** slug estável: `${categorySlug}::${nome}` */
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  qty: number;
};

type NewQuoteItem = Pick<QuoteItem, "name" | "category" | "categorySlug">;

type QuoteContextValue = {
  items: QuoteItem[];
  count: number;
  totalQty: number;
  hydrated: boolean;
  isSelected: (id: string) => boolean;
  addItem: (item: NewQuoteItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: NewQuoteItem) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  makeId: (item: NewQuoteItem) => string;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

const STORAGE_KEY = "camadel:quote-cart:v1";

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeIdFor(item: NewQuoteItem) {
  return `${item.categorySlug}::${slugify(item.name)}`;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Carrega do localStorage assim que o componente monta no navegador.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // localStorage indisponível (modo privado, SSR, etc.) — segue com lista vazia.
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persiste a cada mudança, depois da hidratação inicial.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignora falha de escrita (quota excedida, modo privado, etc.)
    }
  }, [items, hydrated]);

  const isSelected = useCallback(
    (id: string) => items.some((it) => it.id === id),
    [items]
  );

  const addItem = useCallback((item: NewQuoteItem) => {
    const id = makeIdFor(item);
    setItems((current) => {
      if (current.some((it) => it.id === id)) return current;
      return [...current, { id, qty: 1, ...item }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((it) => it.id !== id));
  }, []);

  const toggleItem = useCallback((item: NewQuoteItem) => {
    const id = makeIdFor(item);
    setItems((current) => {
      if (current.some((it) => it.id === id)) {
        return current.filter((it) => it.id !== id);
      }
      return [...current, { id, qty: 1, ...item }];
    });
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((current) =>
      current.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, Math.min(999, qty)) } : it
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((v) => !v), []);

  const value = useMemo<QuoteContextValue>(
    () => ({
      items,
      count: items.length,
      totalQty: items.reduce((sum, it) => sum + it.qty, 0),
      hydrated,
      isSelected,
      addItem,
      removeItem,
      toggleItem,
      updateQty,
      clear,
      makeId: makeIdFor,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
    }),
    [
      items,
      hydrated,
      isSelected,
      addItem,
      removeItem,
      toggleItem,
      updateQty,
      clear,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
    ]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote precisa estar dentro de <QuoteProvider>");
  }
  return ctx;
}
