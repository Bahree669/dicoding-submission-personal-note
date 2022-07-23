import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";

function NotesSection({ notes }) {
    return (
        <NotesGridLayout>
            {notes.map((note) => (
                <Note key={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
            ))}
        </NotesGridLayout>
    );
}

export default NotesSection;
