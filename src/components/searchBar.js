import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
    return (
        <div className="search_bar">
            <input
                type="text"
                placeholder="What do you want to watch?"
            />
            <button type="button">
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </div>
    )
}

export default SearchBar;