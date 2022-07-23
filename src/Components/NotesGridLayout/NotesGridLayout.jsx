import React from "react";
import "./NotesGridLayout.css";

function NotesGridLayout(props) {
    return <article className='notes-grid-layout'>{props.children}</article>;
}

export default NotesGridLayout;
