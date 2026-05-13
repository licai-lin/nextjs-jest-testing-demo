"use client";

import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import type { User } from "./types";

const initialUsers: User[] = [
  { name: "Maya", email: "maya@gmail.com" },
  { name: "Noah", email: "noah@gmail.com" },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <section className="min-h-screen w-full bg-slate-100 px-4 py-10 font-sans text-slate-950 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              User directory
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Add a User
            </h1>
            <p className="mt-2 max-w-xl text-base text-slate-600">
              Manage your team contacts in one simple, easy-to-scan directory.
            </p>
          </div>

          <div className="rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total users</p>
            <p className="text-3xl font-bold text-slate-950">{users.length}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(260px,320px)_1fr] lg:items-start">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <UserForm onUserAdd={onUserAdd} />
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-2xl font-bold">List of Users</h2>
              <p className="mt-1 text-sm text-slate-500">
                Keep your saved contacts organized and ready to reference.
                Review names and email addresses for every saved user.
              </p>
            </div>

            <div className="overflow-x-auto p-5">
              <UserList users={users} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
