"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#why-us", label: "Why us" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1f5f5a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
          <Logo className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+17868700260"
            className="flex items-center gap-2 text-sm font-semibold text-white/90"
          >
            <Icon name="phone" className="size-4 text-brass-300" />
            (786) 870-0260
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#fdf6ee] px-5 py-2.5 text-sm font-semibold text-[#1f5f5a] transition hover:bg-white"
          >
            Get a quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          <Icon name={open ? "x" : "menu"} className="size-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#fdf6ee] px-4 py-2.5 text-center text-sm font-semibold text-[#1f5f5a]"
            >
              Get a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
