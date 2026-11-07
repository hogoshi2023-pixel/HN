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
  | "admin"; // hidden — accessible via #/admin, #admin, ?admin=1 or footer link

const PAGE_IDS: PageId[] = [
  "home",
  "products",
  "solutions",
  "cases",
  "about",
  "news",
  "faq",
  "contact",
  "admin",
];

type NavState = {
  page: PageId;
  target?: string;
  navigate: (page: PageId, target?: string) => void;
  syncFromLocation: () => void;
};

/** Read the current view from the URL hash ("#/products" → products). */
function parseLocation(): { page: PageId; target?: string } {
  if (typeof window === "undefined") return { page: "home" };
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (raw === "admin") return { page: "admin" }; // legacy #admin link
  const [seg, ...rest] = raw.split("/");
  const page = (PAGE_IDS as string[]).includes(seg) ? (seg as PageId) : "home";
  return { page, target: rest.join("/") || undefined };
}

/** Reflect the current view in the URL. Assigning location.hash pushes a
    history entry, so the browser Back/Forward buttons work across views. */
function writeLocation(page: PageId, target?: string) {
  if (typeof window === "undefined") return;
  const desired = page === "home" && !target ? "#/" : `#/${page}${target ? `/${target}` : ""}`;
  if (window.location.hash !== desired) {
    window.location.hash = desired;
  }
}

export const useNav = create<NavState>((set) => ({
  page: "home",
  target: undefined,
  navigate: (page, target) => {
    set({ page, target });
    writeLocation(page, target);
    if (typeof window !== "undefined") {
      if (target) {
        window.setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollTo({ top: 0, behavior: "auto" });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  },
  /** Re-read the hash (initial load + browser Back/Forward). */
  syncFromLocation: () => {
    const { page, target } = parseLocation();
    set((s) => (s.page === page && s.target === target ? s : { page, target }));
  },
}));
