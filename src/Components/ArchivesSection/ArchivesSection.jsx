import React from "react";
import NotesGridLayout from "../NotesGridLayout/NotesGridLayout";
import Note from "../Note/Note";
import NoNotesNotice from "../NoNotesNotice/NoNotesNotice";

function ArchivesSection({ archivedNotes, toggleArchives, deleteNote }) {
    return (
        <section>
            <NotesGridLayout sectionTitle={"Your archives"}>
                <h1 className='notes-grid-title'>Your archives</h1>

                {archivedNotes.length ? (
                    archivedNotes.map((note) => (
                        <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            archived={note.archived}
                            createdAt={note.createdAt}
                            toggleArchives={toggleArchives}
                            deleteNote={deleteNote}
                        />
                    ))
                ) : (
                    <NoNotesNotice noticeMessage={"Your archive is empty. Try to add one."} />
                )}
            </NotesGridLayout>
        </section>
    );
}

export default ArchivesSection;
