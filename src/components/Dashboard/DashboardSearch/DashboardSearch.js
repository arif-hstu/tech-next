import React, { useContext } from 'react';
import { SearchContext } from '../../../App';

import search from '../../../resources/icons/search.svg';
import './DashboardSearch.scss';

const DashboardSearch = () => {
    const [searchTerm, setSearchTerm] = useContext(SearchContext);

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
        <div className="DashboardSearch">
            <div className="searchHolder">
                <input
                    type="text"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onBlur={() => showThePlaceholder()}
                    onFocus={() => hideThePlaceholder()}
                />
                <img src={search} alt="DashboardSearch" />
                <p id="placeholder" className="placeholder">
                    Search
                </p>
            </div>
        </div>
    );
};

export default DashboardSearch; // to Home