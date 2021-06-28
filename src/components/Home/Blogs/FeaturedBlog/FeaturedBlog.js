import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PostsContext } from '../../../../App';
import './FeaturedBlog.scss';

const FeaturedBlog = () => {
    const posts = useContext(PostsContext);
    
    return (
        <div className="FeaturedBlog">
            <div id={posts[0].id} className="imgHolder">
                {posts[0] && posts[0].id}
            </div>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <Link to={`post/${2}`}>
                    <h2 id={posts[0].id}>
                        {posts[0] && posts[0].title}
                    </h2>
                </Link>
                <p>
                    {posts[0] && posts[0].body}
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