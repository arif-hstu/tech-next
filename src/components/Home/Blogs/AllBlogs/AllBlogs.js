import React, { useContext } from 'react';

import { PostsContext } from '../../../../App';
import Blog from '../Blog/Blog';
import './AllBlogs.scss';

const AllBlogs = () => {
    const posts = useContext(PostsContext);
    const color = 'red';

    return (
        <div className="AllBlogs">
            {
                posts[0] &&
                posts.map( post => <Blog key={post.id} loadMore={loadMore} post={post} color={color} />)
            }
        </div>
    );
};

export default AllBlogs; // to Home