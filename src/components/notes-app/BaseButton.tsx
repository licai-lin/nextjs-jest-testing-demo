import { ButtonHTMLAttributes, ReactNode } from "react";

const defaultBaseClasses =
  "inline-flex w-fit cursor-pointer items-center justify-center rounded-md border border-[var(--nav-border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-strong)]";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function BaseButton({
  className,
  children,
  ...props
}: BaseButtonProps) {
  const mergedClassName = className
    ? `${defaultBaseClasses} ${className}`
    : defaultBaseClasses;

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
}
