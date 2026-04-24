"use client";

import Link from "next/link";
import { useNotes } from "./NotesContext";
import { formatNoteDate } from "@/lib/formatDate";

type NoteDetailViewProps = {
  noteId: number | null;
};

export default function NoteDetailView({ noteId }: NoteDetailViewProps) {
  const { notes } = useNotes();

  if (noteId === null) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-red-600">Invalid note id.</p>
        <Link
          href="/notes/all"
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
        >
          Back to All Notes
        </Link>
      </div>
    );
  }

  const note = notes.find((item) => item.id === noteId);

  if (!note) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-red-600">Note not found.</p>
        <Link
          href="/notes/all"
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
        >
          Back to All Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[var(--nav-border)] bg-[var(--background)] p-4">
        <p className="text-sm font-medium text-[var(--nav-strong)] break-words">{note.text}</p>
        <p className="mt-2 text-xs text-[var(--nav-muted)]">
          Created: {formatNoteDate(note.timestamp)}
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          href="/notes/all"
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
        >
          Back to All Notes
        </Link>
        <Link
          href="/notes"
          className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--nav-strong)] transition-colors hover:bg-[var(--nav-hover-bg)]"
        >
          Back to Notes
        </Link>
      </div>
    </div>
  );
}
