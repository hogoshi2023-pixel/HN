"use client";

import { create } from "zustand";

export type PageId =
  | "home"
  | "products"
  | "solutions"
  | "cases"
  | "about"
  | "news"
  | "faq"
  | "contact"
  | "admin"; // hidden — accessible via ?admin=1 or footer link

type NavState = {
  page: PageId;
  target?: string;
  navigate: (page: PageId, target?: string) => void;
};

export const useNav = create<NavState>((set) => ({
  page: "home",
  target: undefined,
  navigate: (page, target) => {
    set({ page, target });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  },
}));
