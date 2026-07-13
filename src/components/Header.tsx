"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/domains", label: "Domains" },
  { href: "/register", label: "Register" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-8xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-black/70 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] bg-black text-white hover:bg-bridge-charcoal transition-colors"
        >
          Contact Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px bg-black transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px bg-black transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.15em] text-black/70 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-black text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
