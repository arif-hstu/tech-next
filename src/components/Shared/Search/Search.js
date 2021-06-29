import React, { useContext } from 'react';
import { SearchContext } from '../../../App';

import search from '../../../resources/icons/search.svg';
import './Search.scss';
const Search = () => {
    const [searchTerm, setSearchTerm] = useContext(SearchContext);

    const searchItem = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    return (
        <div className="Search">
            <form className="searchHolder">
                <input onChange={(event) => searchItem(event)} type="text" />
                <img src={search} alt="Search" />
                <p className="placeholder">
                    Search in this page...
                </p>
            </form>
        </div>
    );
};

export default Search; // to Home