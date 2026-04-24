
import Link from "next/link";
import PageCard from "@/components/ui/page-card";

export default function NotFound() {
  return (
    <div className="py-12 sm:py-16">
      <PageCard
        eyebrow="Error 404"
        title="Page not found"
        description="The page you are looking for doesn't exist or may have been moved."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/"
            className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
          >
            Go to Home
          </Link>
        </div>
      </PageCard>
    </div>
  );
}
