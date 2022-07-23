import { useEffect, useState } from "react";

import { getInitialData } from "./Utils";
import Header from "./Components/index";
import NotesSection from "./Components/NotesSection/NotesSection";
import ArchivesSection from "./Components/ArchivesSection/ArchivesSection";
import NotesGridLayout from "./Components/NotesGridLayout/NotesGridLayout";

function App() {
    const [notes, setNotes] = useState(getInitialData || []);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedNotes, setSearchedNotes] = useState([]);

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

    return (
        <>
            <Header getSearchQuery={getSearchQuery} />

            <main>
                {!searchedNotes.length ? (
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
                ) : (
                    <NotesGridLayout
                        sectionTitle={`Displaying result for : ${searchQuery}`}
                        notes={searchedNotes}
                        toggleArchives={toggleArchives}
                        deleteNote={deleteNote}
                    />
                )}
            </main>
        </>
    );
}

export default App;
