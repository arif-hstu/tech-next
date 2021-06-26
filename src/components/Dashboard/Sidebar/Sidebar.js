import React from 'react';

import './Sidebar.scss';
import dashboard from '../../../resources/icons/dashboard.svg';
import addPost from '../../../resources/icons/addPost.svg';
import myPosts from '../../../resources/icons/myPosts.svg';
import otherUsers from '../../../resources/icons/otherUsers.svg';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="logoHolder">
                <a href="/" alt="TechNext">TechNext</a>
                <p>MENU</p>
                <div className="menuHolder">
                    <div className="menu1">
                        <img src={dashboard} alt="Dashboard" />
                        <h4>Dashboard</h4>
                    </div>
                    <div className="menu2">
                        <img src={myPosts} alt="Post" />
                        <h4>My Posts</h4>
                    </div>
                    <div className="menu3">
                        <img src={addPost} alt="Add Post" />
                        <h4>Add Post</h4>
                    </div>
                    <div className="menu4">
                        <img src={otherUsers} alt="Other Users" />
                        <h4>Other Users</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar; // to Dashboard