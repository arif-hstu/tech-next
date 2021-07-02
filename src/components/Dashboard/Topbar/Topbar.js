import React, { useContext } from 'react';

import DashboardSearch from '../DashboardSearch/DashboardSearch';
import './Topbar.scss';
import downArrow from '../../../resources/icons/downArrow.svg';
import { LoggedInContext } from '../../../App';

const Topbar = () => {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

    // log out from the device
    const logout = () => {
        setLoggedIn({
            id: "",
            name: ""
        })
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
    }

    return (
        <div className="Topbar">
            <DashboardSearch />
            <div className="userName">
                <div className="dropdown">
                    <h4>{
                        loggedIn.id ? loggedIn.name
                            : "Lorem Ipsum"
                    }</h4>
                    <div class="dropdown-content">
                        <span onClick={() => logout()}>Logout</span>
                    </div>
                </div>
                <img src={downArrow} alt="Arrow" />
            </div>
        </div>
    );
};

export default Topbar; // to Dashboard