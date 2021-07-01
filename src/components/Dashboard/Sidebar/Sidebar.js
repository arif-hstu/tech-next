import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Sidebar.scss';
import addPost from '../../../resources/icons/addPost.svg';
import myPosts from '../../../resources/icons/myPosts.svg';
import otherUsers from '../../../resources/icons/otherUsers.svg';
import { HashContext } from '../Dashboard/Dashboard';

const Sidebar = () => {
    const history = useHistory();
    const [hash, setHash] = useContext(HashContext);

    const updateClass = (event) => {
        let destination = '';
        if (event.target.localName === 'h4' || event.target.localName === 'img') {
            // update location
            destination = event.target.parentNode.id;
            history.push(destination);
            setHash(destination);

            // remove active className from all menus
            const children = event.target.parentNode.parentNode.childNodes;
            children.forEach(child => {
                child.className = "";
            });

            // add active className to the clicked menu
            event.target.parentNode.className = 'active';

        } else {
            destination = event.target.id;
            history.push(destination);
            setHash(destination);

            // remove active className from all menus
            const children = event.target.parentNode.childNodes;
            children.forEach(child => {
                child.className = "";
            });

            event.target.className = "active"
        }
    }

    return (
        <div className="Sidebar">
            <div className="logoHolder">
                <a href="/" alt="TechNext">TechNext</a>
                <p>MENU</p>
                <div className="menuHolder">
                    <div
                        id="#myPosts"
                        className="active"
                        onClick={(event) => updateClass(event)}>
                        <img src={myPosts} alt="Post" />
                        <h4>My Posts</h4>
                    </div>
                    <div id="#addPost" onClick={(event) => updateClass(event)}>
                        <img src={addPost} alt="Add Post" />
                        <h4>Add Post</h4>
                    </div>
                    <div id="#users" onClick={(event) => updateClass(event)}>
                        <img src={otherUsers} alt="Other Users" />
                        <h4>Other Users</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar; // to Dashboard