import React from 'react';

import './Navbar.scss';
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logoHolder">
                <a href="/" alt="TechNext">TechNext</a>
            </div>
            <div className="navHolder">
                <a href="/">Career</a>
                <a href="/">Pricing</a>
                <a href="/">About</a>
                <a
                    className="btnTag"
                    href="/"
                >Blog</a>
            </div>
            <a
                className="btnTag"
                href="/"
            >Login</a>
        </div>
    );
};

export default Navbar;