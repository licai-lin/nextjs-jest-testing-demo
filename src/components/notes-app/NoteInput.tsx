"use client";

import { SyntheticEvent, useState } from "react";
import { useNotes } from "./NotesContext";
import NoteButton from "./NoteButton";

export default function NoteInput() {
  const { notes, addNote } = useNotes();
  const [text, setText] = useState("");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    addNote(trimmed);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label
        htmlFor="note-input"
        className="block text-sm font-medium text-[var(--nav-strong)]"
      >
        Add a new note:
      </label>

      <textarea
        id="note-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write your note here..."
        rows={4}
        className="w-full resize-y rounded-lg border border-[var(--nav-border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--nav-strong)] focus:ring-2 focus:ring-[var(--nav-hover-bg)]"
      />

      <p className="text-xs text-[var(--nav-muted)]">
        {notes.length} note{notes.length === 1 ? "" : "s"} in your list
      </p>

      <NoteButton type="submit">
        Add Note
      </NoteButton>
    </form>
  );
}
