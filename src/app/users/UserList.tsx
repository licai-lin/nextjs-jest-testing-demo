import type { User } from "./types";

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <table className="w-full min-w-[360px] table-fixed border-collapse text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
        <tr>
          <th className="border-b border-slate-200 px-4 py-3 font-semibold">
            Name
          </th>
          <th className="border-b border-slate-200 px-4 py-3 font-semibold">
            Email
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {users.map((user) => (
          <tr key={user.email} className="transition hover:bg-slate-50">
            <td className="px-4 py-3 font-medium text-slate-950">
              {user.name}
            </td>
            <td className="px-4 py-3 text-slate-600">
              {user.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
