import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";

function NotesSection({ notes, toggleArchives, deleteNote }) {
    return (
        <section>
            <NotesGridLayout
                sectionTitle='Your notes'
                notes={notes}
                toggleArchives={toggleArchives}
                deleteNote={deleteNote}
            />
        </section>
    );
}

export default NotesSection;
