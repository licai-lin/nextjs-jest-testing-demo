"use client";

import PageCard from "@/components/ui/page-card";
import { RegisterState } from "@/lib/actions/register-state";
import { registerUser } from "@/lib/actions/users";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function RegisterPage() {
  // Base state used before the first form submission.
  const initialRegisterState: RegisterState = {
    success: false,
    user: null,
    message: "",
    users: [],
  };

  // Connect the server action to this client form and receive the latest result state.
  const [state, formAction] = useActionState(
    registerUser,
    initialRegisterState,
  );

  return (
    <PageCard
      eyebrow="Authentication"
      title="Register"
      description="Create user account using server-side action."
    >
      <form action={formAction} className="mt-6 space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-sm font-medium text-[var(--nav-text)]"
          >
            User Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--nav-strong)] outline-none transition-colors focus:border-[var(--nav-strong)]"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[var(--nav-text)]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--nav-strong)] outline-none transition-colors focus:border-[var(--nav-strong)]"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[var(--nav-text)]"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--nav-strong)] outline-none transition-colors focus:border-[var(--nav-strong)]"
          />
        </div>

        <SubmitButton />
      </form>

      {/* Server action feedback message (success or error) after submit */}
      <p
        className={`mt-4 text-2xl ${state.success ? "text-emerald-400" : "text-red-500"}`}
        aria-live="polite"
      >
        {state.message}
      </p>

      {/* Render all users returned by the latest action response */}
      <h2 className="mt-6 text-lg font-semibold text-[var(--nav-strong)]">
        Our users ({state.users.length})
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-[var(--nav-text)]">
        {state.users.map((user) => (
          <li
            key={user.id}
            className="rounded-md border border-[var(--nav-border)] px-3 py-2"
          >
            <p className="font-medium text-[var(--nav-strong)]">{user.email}</p>
          </li>
        ))}
      </ul>
    </PageCard>
  );
}

function SubmitButton() {
  // Toggle submission state: if pending is true, button is disabled
  // If pending is false, button is enabled
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--nav-strong)] px-4 py-2 text-sm font-medium text-[var(--surface)] transition-opacity hover:opacity-90"
    >
      Create Account
    </button>
  );
}
