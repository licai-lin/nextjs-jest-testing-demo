"use client";

import { FormEvent, useState } from "react";
import type { User } from "./types";

type UserFormProps = {
  onUserAdd: (user: User) => void;
};

export default function UserForm({ onUserAdd }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onUserAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-slate-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Smith"
          className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-3 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="jane@example.com"
          className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-3 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="h-11 w-full rounded-md bg-blue-700 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-3 focus:ring-blue-200"
      >
        Submit
      </button>
    </form>
  );
}
