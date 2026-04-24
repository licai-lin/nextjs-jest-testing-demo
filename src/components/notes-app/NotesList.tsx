"use client";

import { useNotes } from "./NotesContext";
import NotesListItem from "./NotesListItem";

type NotesListProps = {
  title?: string;
  description?: string;
  limit?: number;
  emptyMessage?: string;
  className?: string;
  showDeleteButton?: boolean;
  noteHrefPrefix?: string;
};

export default function NotesList({
  title = "Your Recent Notes",
  description,
  limit = 3,
  emptyMessage = "No notes yet. Add your first note above!",
  className,
  showDeleteButton = true,
  noteHrefPrefix,
}: NotesListProps) {

  const { notes, deleteNote } = useNotes();

  const sortedNotes = [...notes].sort((a, b) => b.timestamp - a.timestamp);
 
  const visibleNotes = limit > 0 ? sortedNotes.slice(0, limit) : sortedNotes;

  return (
    <section className={className}>
      <h2 className="text-xl font-semibold tracking-tight text-[var(--nav-strong)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-1 text-sm text-[var(--nav-muted)]">{description}</p>
      ) : null}
      {visibleNotes.length === 0 ? (
        <p className="mt-3 text-[var(--nav-muted)]">{emptyMessage}</p>
      ) : (
        <div className="mt-4 space-y-3">
          {visibleNotes.map((note) => (
            <NotesListItem
              key={note.id}
              note={note}
              onDelete={deleteNote}
              showDeleteButton={showDeleteButton}
              noteHref={noteHrefPrefix ? `${noteHrefPrefix}${note.id}` : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
