import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Navbar from '../Shared/Navbar/Navbar';

import './NotFound.scss';
const NotFound = ({ children }) => {
    return (
        <div className="NotFound">
            <Navbar />
            { children }
        </div>
    );
};

export default NotFound; // to App