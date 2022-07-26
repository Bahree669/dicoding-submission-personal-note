import React, { useState } from "react";
import "./Note.css";

import { showFormattedDate } from "../../Utils";
import DeleteConfirmDialog from "./DeleteConfirmDialog/DeleteConfirmDialog";

function Note({
    id,
    title = "Lorem ipsum",
    body = "Lorem ipsum, dolor.",
    createdAt = "Selasa, 01 Oktober 2002",
    archived,
    toggleArchives,
    deleteNote,
}) {
    const [dialogState, setDialogState] = useState(false);

    function toggleDialog() {
        setDialogState((prevState) => !prevState);
    }

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
                <button className='btn btn-secondary' onClick={toggleDialog}>
                    Delete
                </button>
            </section>

            <DeleteConfirmDialog
                noteId={id}
                toggleDialog={toggleDialog}
                deleteFunction={deleteNote}
                state={dialogState}
            />
        </section>
    );
}

export default Note;
