import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";
import NoNotesNotice from "../NoNotesNotice/NoNotesNotice";

function NotesSection({ notes, toggleArchives, deleteNote }) {
    return (
        <section>
            <NotesGridLayout sectionTitle='Your notes'>
                <h1 className='notes-grid-title'>Your task</h1>

                {notes.length ? (
                    notes.map((note) => (
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
                    ))
                ) : (
                    <NoNotesNotice noticeMessage={"Your notes is empty. Try to create one."} />
                )}
            </NotesGridLayout>
        </section>
    );
}

export default NotesSection;
