import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Blog.scss';
const Blog = ({ post, color }) => {
    const history = useHistory();

    // route to the post
    const pushLocation = () => {
        history.push(`/post/${post.id}`);
    }

    return (
        <div className="Blog">
            <div onClick={(event) => pushLocation(event)} className="imgHolder">
                {post.id}
            </div>
            <div onClick={(event) => pushLocation(event)} className="infoHolder">
                <Link to="/" className="btnTag">News</Link>
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