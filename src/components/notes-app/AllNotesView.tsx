"use client";

import Link from "next/link";
import { noteHrefPrefix } from "@/lib/navigation";
import { useNotes } from "./NotesContext";
import NotesList from "./NotesList";

export default function AllNotesView() {
  const { notes } = useNotes();
  const totalNotes = notes.length;

  return (
    <div className="space-y-4">
      <Link
        href="/notes"
        className="inline-flex rounded-md border border-[var(--nav-border)] bg-[var(--background)] px-3 py-2 text-sm font-medium text-[var(--nav-text)] transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-strong)]"
      >
        Back to Notes
      </Link>

      <section className="rounded-xl border border-[var(--nav-border)] bg-[var(--background)] p-4">
        <p className="text-sm text-[var(--nav-muted)]">Total Notes</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--nav-strong)]">
          {totalNotes}
        </p>
      </section>

      <NotesList
        title="All Notes"
        description="Every note sorted from newest to oldest."
        limit={0}
        emptyMessage="No notes yet. Go back to add your first note."
        noteHrefPrefix={noteHrefPrefix}
      />
    </div>
  );
}
