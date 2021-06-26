import React from 'react';

import './Blog.scss';
const Blog = ({color}) => {
    return (
        <div className="Blog">
            <div className="imgHolder">
                this is image
            </div>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <h3>
                    Guide: How to add Lorem Ipsum Lorem Ipsum
                </h3>
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

export default Blog; // to AllBlogs