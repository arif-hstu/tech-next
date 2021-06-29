import React, { useContext } from 'react';

import { PostsContext, UserPostsContext } from '../../../../App';
import Blog from '../Blog/Blog';
import './AllBlogs.scss';

const AllBlogs = () => {
    const posts = useContext(PostsContext);
    const [userPosts] = useContext(UserPostsContext);
    const color = 'red';

    return (
        <div className="AllBlogs">
            {
                userPosts[0] ?
                    userPosts[0] &&
                    userPosts.slice(1).map(post => <Blog key={post.id} post={post} color={color} />) :
                    posts[0] &&
                    posts.slice(1).map(post => <Blog key={post.id} post={post} color={color} />)
            }
        </div>
    );
};

export default AllBlogs; // to Home