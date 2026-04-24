"use client";

import React, { useState } from "react";

type Props = {
  initial: number;
};

function Counter({ initial }: Props) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-[var(--nav-border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--nav-muted)]">
        Counter
      </p>
      <h1 className="mt-3 flex items-end justify-between gap-4 text-xl font-semibold text-[var(--nav-strong)]">
        <span>Count</span>
        <span className="rounded-xl bg-[var(--background)] px-4 py-2 font-mono text-4xl font-bold leading-none text-[var(--foreground)]">
          {count}
        </span>
      </h1>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-4 py-2.5 text-sm font-semibold text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          onClick={increase}
        >
          Increase
        </button>
        <button
          className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-4 py-2.5 text-sm font-semibold text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          onClick={decrease}
        >
          Decrease
        </button>
        <button
          className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-4 py-2.5 text-sm font-semibold text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-4 py-2.5 text-sm font-semibold text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          onClick={switchSigns}
        >
          Switch Signs
        </button>
      </div>
    </div>
  );
}

export default Counter;
