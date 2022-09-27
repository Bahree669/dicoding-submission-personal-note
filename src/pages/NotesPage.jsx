import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Notes } from "../components";

import { SvgEl } from "../components";

import { getActiveNotes, getArchivedNotes } from "../utils/local-data";

function NotesPage({ pageTitle }) {
    const [notes, setNotes] = useState([]);
    const [searchedNote, setSearchedNote] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const { pathname } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchedNote([]);

        if (pathname === "/") setNotes(getActiveNotes());
        else if (pathname === "/archives") setNotes(getArchivedNotes());
    }, [pathname]);

    useEffect(() => {
        if ([...searchParams.entries()][0]) {
            const [query] = [...searchParams.entries()];
            const data = searchNote(query[1], notes);
            const filteredData = data.filter((data) => data !== null);

            setSearchQuery(query[1]);
            setIsSearching(true);
            setSearchedNote(filteredData);
        } else setIsSearching(false);
    }, [searchParams, notes]);

    function searchNote(query, notes) {
        return notes.map((note) => {
            const _t = note.title.toLowerCase();
            const _b = note.body.toLowerCase();
            const _q = query.split(" ");

            for (const s of _q) {
                if (_t.search(s) > -1 || _b.search(s) > -1) return note;
                return null;
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const query = value.toLowerCase();
        setSearchParams({ search: query });
        setSearchQuery(value);

        const data = searchNote(query, notes);
        const filteredData = data.filter((data) => data !== null);
        setSearchedNote(filteredData);
    }

    return (
        <main className='mainElement'>
            <div className='mainElement__header'>
                <h1 className='mainElement__title'>{pageTitle}</h1>

                <form onSubmit={handleSubmit}>
                    <div className='mainElement__input'>
                        <input
                            type='text'
                            name='searchQuery'
                            placeholder={"Click enter to search"}
                            onChange={handleChange}
                            value={searchQuery}
                        />

                        <SvgEl>
                            <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
                        </SvgEl>
                    </div>
                </form>
            </div>

            {isSearching ? <Notes notes={searchedNote} /> : <Notes notes={notes} />}
        </main>
    );
}

export default NotesPage;
