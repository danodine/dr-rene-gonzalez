'use client';

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    href: "/",
    label: "Start",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed right-5 top-5 z-50 sm:right-8 sm:top-8">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black/30 shadow-[0_18px_55px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-14px_28px_rgba(255,255,255,0.08)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 hover:border-[#d4af37]/45 hover:bg-black/40 hover:shadow-[0_18px_58px_rgba(0,0,0,0.24),0_0_34px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]"
      >
        <span className="pointer-events-none absolute inset-x-2 top-1 h-4 rounded-full bg-white/18 blur-sm" />
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-px w-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-transform duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-transform duration-300 ${
              isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute right-0 mt-4 w-56 overflow-hidden rounded-[1.75rem] border border-white/25 bg-black/28 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.36),inset_0_-22px_50px_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-[1.25rem] bg-transparent p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="block rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-[#d4af37]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
