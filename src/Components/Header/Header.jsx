import React from "react";
import "./Header.css";

import SearchBar from "./SearchBar/SearchBar";

function Header() {
    return (
        <header className='header'>
            <h1 className='header-logo'>My Notes</h1>

            <SearchBar />
        </header>
    );
}

export default Header;
