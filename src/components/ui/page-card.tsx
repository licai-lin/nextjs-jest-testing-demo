import type { ReactNode } from "react";

type PageCardProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function PageCard({
  title,
  eyebrow,
  description,
  children,
  className,
}: PageCardProps) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-[var(--nav-border)] bg-[var(--surface)] p-8 shadow-sm sm:p-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--nav-muted)]">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h1
          className={
            eyebrow
              ? "mt-3 text-3xl font-semibold tracking-tight text-[var(--nav-strong)]"
              : "text-3xl font-semibold tracking-tight text-[var(--nav-strong)]"
          }
        >
          {title}
        </h1>
      ) : null}
      {description ? (
        <p className="mt-3 text-sm leading-6 text-[var(--nav-text)]">
          {description}
        </p>
      ) : null}
      {children ? (
        <div className={className ? className : "mt-6"}>
          {children}
        </div>
      ) : null}
    </section>
  );
}
