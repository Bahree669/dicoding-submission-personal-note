import React from "react";
import "./NotesGridLayout.css";

function NotesGridLayout({ sectionTitle, children }) {
    console.log(children);
    return (
        <article className='notes-grid-container'>
            {children[0]}
            <div className='notes-grid-layout'>{children[1]}</div>
        </article>
    );
}

export default NotesGridLayout;
