import React, { createContext, useState } from 'react';

import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar.js';
import MyPosts from '../MyPosts/MyPosts.js';
import AddPost from '../AddPost/AddPost.js';
import AllUsers from '../AllUsers/AllUsers';
import './Dashboard.scss';

export const HashContext = createContext();
export const SearchOnContext = createContext();

const Dashboard = () => {
    const [hash, setHash] = useState('#myPosts');
    const [searchOn, setSearchOn] = useState('name');

    return (
        <div className="Dashboard">
            <HashContext.Provider value={[hash, setHash]}>
                <SearchOnContext.Provider value={[searchOn, setSearchOn]}>
                    <div className="sidebarHolder">
                        <Sidebar />
                    </div>
                    <div className="contentHolder">
                        <div className="topbarHolder">
                            <Topbar />
                        </div>
                        {
                            hash === '#myPosts' && <MyPosts />
                        }
                        {
                            hash === '#addPost' && <AddPost />
                        }
                        {
                            hash === '#users' && <AllUsers />
                        }
                    </div>
                </SearchOnContext.Provider>
            </HashContext.Provider>
        </div >
    );
};

export default Dashboard; // to Home