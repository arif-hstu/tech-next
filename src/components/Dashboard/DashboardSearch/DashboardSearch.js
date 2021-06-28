import React, { useContext } from 'react';
import { SearchContext } from '../../../App';

import search from '../../../resources/icons/search.svg';
import './DashboardSearch.scss';

const DashboardSearch = () => {
    const [searchTerm, setSearchTerm] = useContext(SearchContext);
    return (
        <div className="DashboardSearch">
            <div className="searchHolder">
            <input type="text" onChange={(event) => setSearchTerm(event.target.value)}/>
            <img src={search} alt="DashboardSearch" />
            <p className="placeholder">
                Search
            </p>
        </div>
        </div>
    );
};

export default DashboardSearch; // to Home