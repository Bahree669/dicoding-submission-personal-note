import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";

import "./NotesSection.css";

function NotesSection({ notes }) {
    return (
        <section className='notes-section'>
            <h2>Your notes</h2>

            <NotesGridLayout>
                {notes.map((note) => (
                    <Note key={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
                ))}
            </NotesGridLayout>
        </section>
    );
}

export default NotesSection;
