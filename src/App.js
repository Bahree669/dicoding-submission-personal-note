import { useEffect, useRef, useState } from "react";

import { getInitialData } from "./Utils";
import { Header, ArchivesSection, NotesSection, NoNotesNotice, NotesGridLayout, InputForm } from "./Components/index";

function App() {
    const [notes, setNotes] = useState(getInitialData || []);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedNotes, setSearchedNotes] = useState([]);
    const [inputForm, setInputForm] = useState({
        id: +new Date(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
    });

    const [fromDialogVisibility, setFormDialogVisibility] = useState(false);

    useEffect(() => {
        if (searchQuery.length) setSearchedNotes(searchNotes(searchQuery));
        else setSearchedNotes([]);
    }, [searchQuery.length]);

    function toggleArchives(targetId) {
        setNotes((prevState) =>
            prevState.map((note) => (note.id === targetId ? { ...note, archived: !note.archived } : note))
        );
    }

    function deleteNote(targetId) {
        setNotes((prevState) => prevState.filter((note) => note.id !== targetId));
    }

    function getSearchQuery(e) {
        const query = e.target.value;
        setSearchQuery(query);
    }

    function searchNotes(query) {
        const searchTerm = query.trim().toLowerCase();
        const searchResults = notes.filter((note) => note.title.toLocaleLowerCase().includes(searchTerm));
        return searchResults;
    }

    function toggleFormDialog() {
        setFormDialogVisibility((prevState) => !prevState);
    }

    function getNoteInput(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setInputForm({ ...inputForm, [name]: value });
    }

    function createNote(e) {
        e.preventDefault();

        setNotes((prevState) => [...prevState, inputForm]);
        setInputForm({
            id: +new Date(),
            title: "",
            body: "",
            archived: false,
            createdAt: new Date().toISOString(),
        });
    }

    return (
        <div>
            <Header
                getSearchQuery={getSearchQuery}
                toggleFormDialog={toggleFormDialog}
                formVisibility={fromDialogVisibility}
            />

            <InputForm
                formVisibility={fromDialogVisibility}
                createNote={createNote}
                getNoteInput={getNoteInput}
                toggleFormDialog={toggleFormDialog}
                inputForm={inputForm}
            />

            <main>
                {searchedNotes.length === 0 && !searchQuery.length ? (
                    <>
                        <NotesSection
                            notes={notes.filter((note) => !note.archived)}
                            toggleArchives={toggleArchives}
                            deleteNote={deleteNote}
                        />

                        <ArchivesSection
                            archivedNotes={notes.filter((note) => note.archived)}
                            toggleArchives={toggleArchives}
                            deleteNote={deleteNote}
                        />
                    </>
                ) : searchedNotes.length > 0 ? (
                    <NotesGridLayout
                        sectionTitle={`Results for : "${searchQuery}"`}
                        notes={searchedNotes}
                        toggleArchives={toggleArchives}
                        deleteNote={deleteNote}
                    />
                ) : (
                    <NoNotesNotice noticeMessage={`Couldn't find any notes with title : ${searchQuery}`} />
                )}
            </main>
        </div>
    );
}

export default App;
