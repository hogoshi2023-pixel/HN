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
  | "contact";

type NavState = {
  page: PageId;
  // optional sub-target (e.g. product code, case code, faq index)
  target?: string;
  navigate: (page: PageId, target?: string) => void;
};

export const useNav = create<NavState>((set) => ({
  page: "home",
  target: undefined,
  navigate: (page, target) => {
    set({ page, target });
    // scroll to top on navigation
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  },
}));
