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

    // hide placeholder if clicked on the input
    const hideThePlaceholder = () => {
        document.getElementById('placeholder').style.display = "none";
    }

    // show placeholder if the input is empty
    const showThePlaceholder = () => {
        if (searchTerm === "") {
            document.getElementById('placeholder').style.display = "block";
        }
    }

    return (
        <div className="Search">
            <form className="searchHolder">
                <input
                    onBlur={() => showThePlaceholder()}
                    onFocus={() => hideThePlaceholder()}
                    onChange={(event) => searchItem(event)}
                    type="text"
                />
                <img src={search} alt="Search" />
                <p id="placeholder" className="placeholder">
                    Search in this page...
                </p>
            </form>
        </div>
    );
};

export default Search; // to Home