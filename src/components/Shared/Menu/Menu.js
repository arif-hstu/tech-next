import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TweenMax, Power1 } from "gsap";

import "./Menu.scss";

const Menu = () => {
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

            <div
                id="flyoutMenu"
                onClick={() => handleMouseDown()}
            >
                <h2>
                    <Link to="/">Home</Link>
                </h2>
                <h2>
                    <Link to="/career">Career</Link>
                </h2>
                <h2>
                    <Link to="/pricing">Pricing</Link>
                </h2>
                <h2>
                    <Link to="/about">About</Link>
                </h2>
                <h2>
                    <Link to="/blog">Blog</Link>
                </h2>
                <h2>
                    <Link to="/dashboard">Login</Link>
                </h2>
            </div>
        </div>
    );
};

export default Menu;

