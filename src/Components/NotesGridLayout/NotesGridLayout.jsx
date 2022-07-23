import React from "react";
import NoNotesNotice from "../NoNotesNotice/NoNotesNotice";
import Note from "../Note/Note";
import "./NotesGridLayout.css";

function NotesGridLayout({ sectionTitle, notes, toggleArchives, deleteNote }) {
    console.log(notes);
    return (
        <article className='notes-grid-container'>
            <h2 className='notes-grid-title'>{sectionTitle}</h2>

            {notes.length ? (
                <div className='notes-grid-layout'>
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
                </div>
            ) : (
                <NoNotesNotice
                    noticeMessage={"Sorry there are not items in this category. Try to create or add one."}
                />
            )}
        </article>
    );
}

export default NotesGridLayout;
