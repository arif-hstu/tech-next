import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LoggedInContext } from '../../../App';

import './Navbar.scss';
const Navbar = () => {
    const [loggeIn] = useContext(LoggedInContext);
    return (
        <div className="Navbar">
            <div className="logoHolder">
                <Link to="/">TechNext</Link>
            </div>
            <div className="navHolder">
                <NavLink
                    to="/career"
                    activeStyle={{
                        color: '#279EFF',
                        backgroundColor: '#F8F8F8'
                    }} > Career</NavLink>
                <NavLink
                    to="/pricing"
                    activeStyle={{
                        color: '#279EFF',
                        backgroundColor: '#F8F8F8'
                    }}>Pricing</NavLink>
                <NavLink
                    to="/about"
                    activeStyle={{
                        color: '#279EFF',
                        backgroundColor: '#F8F8F8'
                    }}>About</NavLink>
                <NavLink
                    to="/"
                    activeStyle={{
                        color: '#279EFF',
                        backgroundColor: '#F8F8F8'
                    }}>Blog</NavLink>
            </div>
            <Link
                to="/dashboard#myPosts"
                className="btnTag"
            >
                {
                    loggeIn.id ? loggeIn.name
                        : 'Login'
                }
            </Link>
        </div>
    );
};

export default Navbar; // shared