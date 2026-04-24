"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { headerNavLinks } from "@/lib/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-md px-3 py-2 text-sm font-semibold tracking-wide text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)]"
          >
            NextJS Demo
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden flex-wrap items-center justify-end gap-1.5 md:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-transparent px-3 py-1.5 text-sm font-medium text-[var(--nav-text)] transition-all hover:border-[var(--nav-border)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--nav-border)] text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)] md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav id="mobile-nav" className="mt-3 flex flex-col gap-1 md:hidden">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md border border-transparent px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-all hover:border-[var(--nav-border)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
