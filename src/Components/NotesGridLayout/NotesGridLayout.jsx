import React from "react";
import Note from "../Note/Note";

import "./NotesGridLayout.css";

function NotesGridLayout() {
    return (
        <div className='notes-grid-layout'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
}

export default NotesGridLayout;
