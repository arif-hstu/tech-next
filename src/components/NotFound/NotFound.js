import React from 'react';
import Menu from '../Shared/Menu/Menu';
import Navbar from '../Shared/Navbar/Navbar';

import './NotFound.scss';
const NotFound = ({ children }) => {
    return (
        <div className="NotFound">
            <Menu />
            <Navbar />
            {children}
        </div>
    );
};

export default NotFound; // to App