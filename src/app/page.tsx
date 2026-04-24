import Link from "next/link";
import PageCard from "@/components/ui/page-card";
import { homeRouteLinks } from "@/lib/navigation";

export default function Home() {
  return (
    <PageCard
      eyebrow="Next.js App Router"
      title="Welcome"
      description="Explore the demo routes below. The page uses shared theme tokens, so it stays visually consistent in both modes."
    >
      <div className="mt-6 flex flex-wrap gap-2">
        {homeRouteLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </PageCard>
  );
}
