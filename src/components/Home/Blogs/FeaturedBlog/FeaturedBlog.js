import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PostsContext } from '../../../../App';
import './FeaturedBlog.scss';

const FeaturedBlog = ({ userPosts }) => {
    const posts = useContext(PostsContext);

    return (
        <div className="FeaturedBlog">
            <Link to={
                userPosts ?
                    `post/${userPosts[0] && userPosts[0].id}` :
                    `post/${posts[0] && posts[0].id}`
            }>
                <div className="imgHolder">
                    {
                        userPosts ?
                            userPosts[0] && userPosts[0].id :
                            posts[0] && posts[0].id
                    }
                </div>
            </Link>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <Link to={
                    userPosts ?
                        `post/${userPosts[0] && userPosts[0].id}` :
                        `post/${posts[0] && posts[0].id}`
                }>
                    <h2>
                        {
                            userPosts ?
                                userPosts[0] && userPosts[0].title :
                                posts[0] && posts[0].title
                        }
                    </h2>
                </Link>
                <p>
                    {
                        userPosts ?
                            userPosts[0] && userPosts[0].body :
                            posts[0] && posts[0].body
                    }
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