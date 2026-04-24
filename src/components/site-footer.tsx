import Link from "next/link";
import { footerLegalLinks, footerQuickLinks } from "@/lib/navigation";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--nav-border)] bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <section>
          <p className="text-sm font-semibold tracking-wide text-[var(--nav-strong)]">
            NextJS Demo
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--nav-text)]">
            A modern demo app built with Next.js App Router, focused on clear
            structure, reliable routing, and a polished user experience.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-[var(--nav-strong)]">
            Quick Links
          </h2>
          <ul className="mt-3 space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--nav-text)] transition-colors hover:text-[var(--nav-strong)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-[var(--nav-strong)]">
            Legal & Support
          </h2>
          <ul className="mt-3 space-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--nav-text)] transition-colors hover:text-[var(--nav-strong)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:licai.868@gmail.com"
            className="mt-4 inline-block text-sm text-[var(--nav-text)] transition-colors hover:text-[var(--nav-strong)]"
          >
            licai.868@gmail.com
          </a>
        </section>
      </div>

      <div className="border-t border-[var(--nav-border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-[var(--nav-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {currentYear} NextJS Demo. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
