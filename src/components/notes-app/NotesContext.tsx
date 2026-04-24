"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface Note {
  id: number;
  text: string;
  timestamp: number;
}

interface NotesContextType {
  notes: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: number) => void;
}

const Notescontext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const noteList: Note[] = [
    {
      id: 1,
      text: "Review Next.js routing notes.",
      timestamp: new Date("2026-04-08T09:00:00").getTime(),
    },
    {
      id: 2,
      text: "Record setup video intro.",
      timestamp: new Date("2026-04-08T09:30:00").getTime(),
    },
    {
      id: 3,
      text: "Draft lesson goals for students.",
      timestamp: new Date("2026-04-08T10:00:00").getTime(),
    },
    {
      id: 4,
      text: "Test notes add and delete flow.",
      timestamp: new Date("2026-04-08T10:30:00").getTime(),
    },
    {
      id: 5,
      text: "Prepare final demo checklist.",
      timestamp: new Date("2026-04-08T11:00:00").getTime(),
    },
  ];

  const [notes, setNotes] = useState<Note[]>(noteList);

  function addNote(text: string) {
    const timestamp = Date.now();

    const newNote: Note = {
      id: timestamp,
      text: text,
      timestamp,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function deleteNote(id: number) {
    function filter(note: Note) {
      return note.id !== id;
    }

    //Keep all notes except the one with the matching id.
    setNotes((prevNotes) => {
      return prevNotes.filter(filter);
    });
  }

  return (
    <Notescontext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </Notescontext.Provider>
  );
}

export function useNotes() {
  const context = useContext(Notescontext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return context;
}
