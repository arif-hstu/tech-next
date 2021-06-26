import React from 'react';

import search from '../../../resources/icons/search.svg';
import './DashboardSearch.scss';
const DashboardSearch = () => {
    return (
        <div className="DashboardSearch">
            <div className="searchHolder">
            <input type="text" />
            <img src={search} alt="DashboardSearch" />
            <p className="placeholder">
                Search
            </p>
        </div>
        </div>
    );
};

export default DashboardSearch; // to Home