import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../App';

import search from '../../../resources/icons/search.svg';
import './Search.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useContext(SearchContext);
    const [isHidden, setIsHidden] = useState(false);

    const searchItem = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    // useEffect(() => {
    //     if (searchTerm === "" && isHidden) {
    //         document.getElementById('placeholder').style.display = "none";
    //     } else if (searchTerm !== "" && isHidden) {
    //         document.getElementById('placeholder').style.display = "block";
    //     }
    // }, [searchTerm, isHidden]);

    return (
        <div className="Search">
            <form className="searchHolder">
                <input onBlur={() => setIsHidden(false)} onFocus={() => setIsHidden(true)} onChange={(event) => searchItem(event)} type="text" />
                <img src={search} alt="Search" />
                <p id="placeholder" className="placeholder">
                    Search in this page...
                </p>
            </form>
        </div>
    );
};

export default Search; // to Home