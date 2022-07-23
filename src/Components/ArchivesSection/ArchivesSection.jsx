import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";

import "./ArchivesSection.css";

function ArchivesSection({ archivedNotes, toggleArchives, deleteNote }) {
    return (
        <section className='notes-section'>
            <h2>Archived notes</h2>

            {archivedNotes.length ? (
                <NotesGridLayout>
                    {archivedNotes.map((note) => (
                        <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            archived={note.archived}
                            createdAt={note.createdAt}
                            toggleArchives={toggleArchives}
                            deleteNote={deleteNote}
                        />
                    ))}
                </NotesGridLayout>
            ) : (
                <div>
                    <p>There are no archived note.</p>
                </div>
            )}
        </section>
    );
}

export default ArchivesSection;
