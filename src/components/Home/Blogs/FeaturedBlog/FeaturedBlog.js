import React from 'react';

import './FeaturedBlog.scss';
const FeaturedBlog = () => {
    return (
        <div className="FeaturedBlog">
            <div className="imgHolder">
                this is image
            </div>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <h2>
                    Guide: How to add Lorem Ipsum Lorem Ipsum
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur repellat esse sapiente commodi sint eligendi nulla non distinctio exercitationem.
                </p>
                <div className="authorHolder">
                    <div className="avatarHolder">
                        img
                    </div>
                    <div className="infoHolder">
                        <p className="paraLg">
                            Lorem Ipsum
                        </p>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog; // to Home