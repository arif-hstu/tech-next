import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TweenMax, Power1 } from "gsap";

import "./Menu.scss";

const Menu = ({ dashboard }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseDown = () => {
        setIsVisible(!isVisible);
        if (isVisible) {
            TweenMax.to(document.getElementById('flyoutMenu'), 0.5, {
                x: "-100vw",
                borderRadius: "0 0 100% 0",
                ease: Power1.easeOut
            });
        } else {
            TweenMax.to(document.getElementById('flyoutMenu'), 0.1, {
                x: "0vw",
                borderRadius: "0",
                ease: Power1.easeIn
            });
            TweenMax.staggerFrom(
                document.getElementById('flyoutMenu').childNodes,
                0.5,
                { xPercent: -100 },
                0.1
            );
            TweenMax.staggerTo(document.getElementById('flyoutMenu').childNodes, 2.8, { x: 0 }, 0.7);
        }
    }
    let v = isVisible ? 'show' : 'hide';
    return (
        <div className="Menu">
            <div id="hambmenu" className={v} onClick={() => handleMouseDown()}>
                <span />
                <span />
                <span />
                <span />
            </div>

            {
                dashboard ?
                    <div
                        id="flyoutMenu"
                        onClick={() => handleMouseDown()}>
                        <Link to="/">
                            <h2>Home</h2>
                        </Link>
                        <Link to="#addPost">
                            <h2>Career</h2>
                        </Link>
                        <Link to="/pricing">
                            <h2>Pricing</h2>
                        </Link>
                        <Link to="/about">
                            <h2>About</h2>
                        </Link>
                        <Link to="/blog">
                            <h2>Blog</h2>
                        </Link>
                        <Link to="/dashboard">
                            <h2>Login</h2>
                        </Link>
                    </div> :
                    <div
                        id="flyoutMenu"
                        onClick={() => handleMouseDown()}>
                        <Link to="/">
                            <h2>Home</h2>
                        </Link>
                        <Link to="/career">
                            <h2>Career</h2>
                        </Link>
                        <Link to="/pricing">
                            <h2>Pricing</h2>
                        </Link>
                        <Link to="/about">
                            <h2>About</h2>
                        </Link>
                        <Link to="/blog">
                            <h2>Blog</h2>
                        </Link>
                        <Link to="/dashboard">
                            <h2>Login</h2>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Menu;

