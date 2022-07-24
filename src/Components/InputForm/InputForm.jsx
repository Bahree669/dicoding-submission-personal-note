import React from "react";
import "./InputForm.css";

function InputForm({ createNote, getNoteInput, formVisibility, toggleFormDialog, inputForm }) {
    return (
        <dialog open={formVisibility ? "open" : false} className='input-dialog'>
            <div className='input-content'>
                <button className='btn btn-icon input-close-btn' onClick={toggleFormDialog}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        style={{ fill: "rgba(255, 255, 255)" }}
                    >
                        <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
                    </svg>
                </button>

                <form className='input-form' onSubmit={(e) => createNote(e)}>
                    <div className='input-container'>
                        <div className='input-counter'>
                            <label htmlFor='title'>Note title</label>

                            <div className='input-counter-container'>
                                Characters left : <span>{50 - inputForm.title.length}</span>
                            </div>
                        </div>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            placeholder='Your note title'
                            onInput={(e) => getNoteInput(e)}
                            value={inputForm.title || ""}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='body'>Note</label>
                        <textarea
                            name='body'
                            id='body'
                            cols='30'
                            rows='8'
                            onInput={(e) => getNoteInput(e)}
                            value={inputForm.body || ""}
                            placeholder='Your awesome note body'
                            required
                        ></textarea>
                    </div>
                    <button type='submit' disabled={inputForm.title.length > 50} className='btn btn-main'>
                        Create note
                    </button>
                </form>
            </div>
        </dialog>
    );
}

export default InputForm;
