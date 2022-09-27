import React from "react";
import OnlyNameButton from "../Buttons/OnlyNameButton";

function DeleteConfirmDialog({ state, closeDialog, deleteNote, noteId }) {
    return (
        <dialog className='deleteDialog' open={state}>
            <div className='deleteDialog__content'>
                <p>Are you sure you wan't to delete this note?</p>

                <div className='deleteDialog__controll'>
                    <OnlyNameButton buttonName={"Yes, delete"} onClick={() => deleteNote(noteId)} />
                    <OnlyNameButton buttonName={"Cancel"} invers={"invers"} onClick={closeDialog} />
                </div>
            </div>
        </dialog>
    );
}

export default DeleteConfirmDialog;
