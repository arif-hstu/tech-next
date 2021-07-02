import React, { useContext } from 'react';
import { SearchContext } from '../../../App';

import search from '../../../resources/icons/search.svg';
import downArrow from '../../../resources/icons/downArrow.svg';
import './DashboardSearch.scss';
import { HashContext, SearchOnContext } from '../Dashboard/Dashboard';

const DashboardSearch = ({ allUsers }) => {
    const [searchTerm, setSearchTerm] = useContext(SearchContext);
    const [searchOn, setSearchOn] = useContext(SearchOnContext);
    const [hash, setHash] = useContext(HashContext);

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
                    Search {
                        hash === '#users' && 'on ' + searchOn
                    }
                </p>
                {
                    hash === '#users'
                    &&
                    <div className="dropdown">
                        <h3>Search on</h3>
                        <img src={downArrow} alt="Arrow" />
                        <div className="dropdown-content">
                            <span onClick={() => setSearchOn('name')}>Name</span>
                            <span onClick={() => setSearchOn('email')}>Email</span>
                            <span onClick={() => setSearchOn('website')}>Website</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default DashboardSearch; // to Home