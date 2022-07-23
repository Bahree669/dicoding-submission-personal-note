import React from "react";
import "./NotesGridLayout.css";

function NotesGridLayout({ sectionTitle, children }) {
    return (
        <article className='notes-grid-container'>
            <h2 className='notes-grid-title'>{sectionTitle}</h2>

            <div className='notes-grid-layout'>{children}</div>
        </article>
    );
}

export default NotesGridLayout;
