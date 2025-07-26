'use client'

import { Note } from '@/types';
import Button from '@/components/ui/Button';
import { useNotes } from '@/contexts/NotesContext';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes();

  return (
    <li className="flex justify-between items-center p-4 bg-white shadow mb-2 rounded">
      <div>
        <h3 className="font-bold">{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <Button variant="ghost" onClick={() => deleteNote(note.id)}>Delete</Button>
    </li>
  );
}