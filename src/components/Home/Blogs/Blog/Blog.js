import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Blog.scss';
const Blog = ({ post, color }) => {
    const history = useHistory();

    return (
        <div className="Blog">
            <Link to={`post/${post.id}`}>
                <div className="imgHolder">
                    {post.id}
                </div>
            </Link>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <Link to={`post/${post.id}`} Z>
                    <h3>
                        {post.title}
                    </h3>
                </Link>
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