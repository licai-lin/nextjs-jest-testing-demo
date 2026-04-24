"use client";

import Link from "next/link";
import type { Note } from "./NotesContext";
import { formatNoteDate } from "@/lib/formatDate";

interface NotesListItemProps {
  note: Note;
  onDelete?: (id: number) => void;
  noteHref?: string;
  showDeleteButton?: boolean;
}

export default function NotesListItem({
  note,
  onDelete,
  noteHref,
  showDeleteButton = true,
}: NotesListItemProps) {
  console.log("View note href", noteHref);
  
  const createdAt = formatNoteDate(note.timestamp);
  const noteText = (
    <p className="text-sm font-medium text-[var(--nav-strong)] break-words">
      {note.text}
    </p>
  );

  return (
    <article className="flex items-start justify-between gap-3 rounded-lg border border-[var(--nav-border)] bg-[var(--surface)] p-4 shadow-sm transition hover:shadow-md">
      <div className="min-w-0">
        {noteText}
        <p className="mt-1 text-xs text-[var(--nav-muted)]">
          Created: {createdAt}
        </p>
      </div>

      <div className="shrink-0 space-x-2">
        {noteHref ? (
          <Link
            href={noteHref}
            className="inline-flex rounded-md border border-[var(--nav-border)] px-2 py-1 text-xs font-medium text-[var(--nav-strong)] transition hover:bg-[var(--nav-hover-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-strong)]"
          >
            View
          </Link>
        ) : null}

        {showDeleteButton && onDelete ? (
          <button
            type="button"
            onClick={() => onDelete(note.id)}
            aria-label={`Delete note: ${note.text}`}
            className="rounded-md border border-red-200 px-2 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Delete
          </button>
        ) : null}
      </div>
    </article>
  );
}
