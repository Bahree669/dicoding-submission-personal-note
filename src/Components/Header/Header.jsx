import React from "react";
import "./Header.css";

import SearchBar from "./SearchBar/SearchBar";

function Header({ getSearchQuery }) {
    return (
        <header className='header'>
            <h1 className='header-logo'>My Notes</h1>

            <SearchBar getSearchQuery={getSearchQuery} />
        </header>
    );
}

export default Header;
