'use client'

import { useNotes } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

export default function NotesList() {
  const { notes } = useNotes();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
      <ul>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}