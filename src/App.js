import { useEffect, useState } from "react";

import { getInitialData } from "./Utils";
import Header from "./Components/index";
import NotesSection from "./Components/NotesSection/NotesSection";
import ArchivesSection from "./Components/ArchivesSection/ArchivesSection";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(getInitialData);
    }, []);

    function toggleArchives(targetId) {
        setNotes((prevState) =>
            prevState.map((note) => (note.id === targetId ? { ...note, archived: !note.archived } : note))
        );
    }

    function deleteNote(targetId) {
        setNotes((prevState) => prevState.filter((note) => note.id !== targetId));
    }

    return (
        <>
            <Header />

            <main>
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
            </main>
        </>
    );
}

export default App;
