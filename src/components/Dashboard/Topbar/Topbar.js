import React from 'react';

import DashboardSearch from '../DashboardSearch/DashboardSearch';
import './Topbar.scss';
import downArrow from '../../../resources/icons/downArrow.svg';

const Topbar = () => {
    return (
        <div className="Topbar">
            <DashboardSearch />
            <div className="userName">
                <h4>Lorem Ipsum</h4>
                <img src={downArrow} alt="Arrow" />
            </div>
        </div>
    );
};

export default Topbar; // to Dashboard