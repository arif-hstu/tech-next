import React, { useContext } from 'react';

import { PostsContext } from '../../../../App';
import Blog from '../Blog/Blog';
import './AllBlogs.scss';

const AllBlogs = () => {
    const posts = useContext(PostsContext);
    const color = 'red';

    console.log(posts.slice());

    return (
        <div className="AllBlogs">
            {
                posts[0] &&
                posts.slice(1).map( post => <Blog key={post.id} post={post} color={color} />)
            }
        </div>
    );
};

export default AllBlogs; // to Home