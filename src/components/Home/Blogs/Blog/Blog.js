import React from 'react';

import './Blog.scss';
const Blog = ({ post, color }) => {
    return (
        <div className="Blog">
            <div className="imgHolder">
                {post.id}
            </div>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
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
    );
};

export default Blog; // to AllBlogs