import { useEffect, useState } from "react";

import { getInitialData } from "./Utils";
import Header from "./Components/index";
import NotesSection from "./Components/NotesSection/NotesSection";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(getInitialData());
    }, []);

    return (
        <>
            <Header />

            <main>
                <NotesSection notes={notes} />
            </main>
        </>
    );
}

export default App;
