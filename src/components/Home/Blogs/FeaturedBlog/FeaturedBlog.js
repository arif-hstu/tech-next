import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { PostsContext } from '../../../../App';
import './FeaturedBlog.scss';

const FeaturedBlog = ({ userPosts }) => {
    const history = useHistory();
    const posts = useContext(PostsContext);

    // route to the post
    const pushLocation = (id) => {
        history.push(`/post/${id}`);
    }

    return (
        <div className="FeaturedBlog">
            <div onClick={
                userPosts ?
                    () => pushLocation(userPosts[0] && userPosts[0].id) :
                    () => pushLocation(posts[0] && posts[0].id)
            }>
                <div className="imgHolder">
                    {
                        userPosts ?
                            userPosts[0] && userPosts[0].id :
                            posts[0] && posts[0].id
                    }
                </div>
            </div>
            <div className="infoHolder">
                <a href="/" className="btnTag">News</a>
                <h2 onClick={
                    userPosts ?
                        () => pushLocation(userPosts[0] && userPosts[0].id) :
                        () => pushLocation(posts[0] && posts[0].id)
                }>
                    {
                        userPosts ?
                            userPosts[0] && userPosts[0].title :
                            posts[0] && posts[0].title
                    }
                </h2>
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