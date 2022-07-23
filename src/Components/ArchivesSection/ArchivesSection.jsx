import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";

function ArchivesSection({ archivedNotes, toggleArchives, deleteNote }) {
    return (
        <section>
            <NotesGridLayout
                sectionTitle='Your notes'
                notes={archivedNotes}
                toggleArchives={toggleArchives}
                deleteNote={deleteNote}
            />
        </section>
    );
}

export default ArchivesSection;
