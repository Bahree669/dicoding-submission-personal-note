import React from "react";
import "./DeleteConfirmDialog.css";

function DeleteConfirmDialog({ state, deleteFunction, noteId, toggleDialog }) {
    function deleteItem(id) {
        deleteFunction(id);
        toggleDialog();
    }

    return (
        <dialog open={state}>
            <div className='dialog-content delete'>
                <h4>Proceed to delete this item?</h4>

                <div className='del-conf-dialog-btns'>
                    <button className='btn btn-main' onClick={toggleDialog}>
                        Cancel
                    </button>
                    <button className='btn btn-secondary' onClick={() => deleteItem(noteId)}>
                        Yes, delete
                    </button>
                </div>
            </div>
        </dialog>
    );
}

export default DeleteConfirmDialog;
