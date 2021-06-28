import React from 'react';

import search from '../../../resources/icons/search.svg';
import './Search.scss';
const Search = () => {
    return (
        <div className="Search">
            <div className="searchHolder">
            <input type="text" />
            <img src={search} alt="Search" />
            <p className="placeholder">
                Search
            </p>
        </div>
        </div>
    );
};

export default Search; // to Home