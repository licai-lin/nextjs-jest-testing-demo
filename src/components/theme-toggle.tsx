"use client";

import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "theme-preference";

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

function getStoredThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  return isThemePreference(savedTheme) ? savedTheme : "system";
}

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement;

  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>(getStoredThemePreference);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleThemeChange(nextTheme: ThemePreference) {
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-md border border-[var(--nav-border)] bg-[var(--surface)] px-2.5 py-1.5 text-sm text-[var(--nav-text)]">
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--nav-muted)]">
        Theme
      </span>
      <select
        aria-label="Theme"
        className="rounded bg-transparent text-sm font-medium outline-none"
        value={theme}
        onChange={(event) => handleThemeChange(event.target.value as ThemePreference)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
