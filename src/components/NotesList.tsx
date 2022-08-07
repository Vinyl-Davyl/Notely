import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface  NotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC< NotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(notes => notes.id !== id))
    }
    const renderNotes = ():JSX.Element[] => {
      return notes.map(note => {
           return <Notes key={note.id} note={ note } handleDelete={ handleDelete }/>
        })
    }

  return (
    <>
        <h2 className="mt-5">
            What's your Schedule?
        </h2>
        <div>{ renderNotes() }</div>
    </>
  );
};

export default NotesList;
