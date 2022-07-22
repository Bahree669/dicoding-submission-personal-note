import React from "react";
import "./SearchBar.css";

function SearchBar() {
    return (
        <form>
            <label htmlFor='search-note' className='sr-only'>
                Search notes
            </label>

            <div className='input-w-icon'>
                <div>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style={{ fill: "#313233" }}>
                        <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
                    </svg>
                </div>
                <input
                    id='search-note'
                    type='text'
                    placeholder='Search note'
                    className='header-input'
                    autoComplete='off'
                />
            </div>
        </form>
    );
}

export default SearchBar;
