import React from "react";
import "./Note.css";

import { showFormattedDate } from "../../Utils";

function Note({
    id,
    title = "Lorem ipsum",
    body = "Lorem ipsum, dolor.",
    createdAt = "Selasa, 01 Oktober 2002",
    archived,
    toggleArchives,
    deleteNote,
}) {
    return (
        <section className='note'>
            <header className='note-detail'>
                <h2 className='note-title'>{title}</h2>
                <p className='note-date'>{showFormattedDate(createdAt)}</p>
            </header>

            <section className='note-body'>
                <p>{body}</p>
            </section>

            <section className='note-controll'>
                <button className='btn btn-main' onClick={() => toggleArchives(id)}>
                    {archived ? "Unarchive note" : "Archive note"}
                </button>
                <button className='btn btn-secondary' onClick={() => deleteNote(id)}>
                    Delete
                </button>
            </section>
        </section>
    );
}

export default Note;
