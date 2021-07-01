import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logoHolder">
                <a href="/" alt="TechNext">TechNext</a>
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
            >Login</Link>
        </div>
    );
};

<NavLink
    to="/faq"
    activeStyle={{
        fontWeight: "bold",
        color: "red"
    }}
>
    FAQs
</NavLink>

export default Navbar;