import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";

function NotesSection({ notes, toggleArchives, deleteNote }) {
    return (
        <section>
            {notes.length ? (
                <NotesGridLayout sectionTitle='Your notes'>
                    {notes.map((note) => (
                        <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                            archived={note.archived}
                            toggleArchives={toggleArchives}
                            deleteNote={deleteNote}
                        />
                    ))}
                </NotesGridLayout>
            ) : (
                <div>
                    <p>There are no note.</p>
                </div>
            )}
        </section>
    );
}

export default NotesSection;
