import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
    return (
        <div className="search_bar" id="searchBar">
            <input
                type="text"
                placeholder="What do you want to watch?"
            />
            <button type="button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}

export default SearchBar;