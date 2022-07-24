import React from "react";
import "./Header.css";

import SearchBar from "./SearchBar/SearchBar";

function Header({ getSearchQuery, toggleFormDialog, formVisibility }) {
    return (
        <header className='header'>
            <div className='header-top'>
                <h1 className='header-logo'>My Notes</h1>

                <button className='btn btn-main' disabled={formVisibility} onClick={toggleFormDialog}>
                    Add note
                </button>
            </div>

            <SearchBar getSearchQuery={getSearchQuery} />
        </header>
    );
}

export default Header;
