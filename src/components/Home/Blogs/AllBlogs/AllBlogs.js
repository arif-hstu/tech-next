import React from 'react';

import Blog from '../Blog/Blog';
import './AllBlogs.scss';

const AllBlogs = () => {
    const color = 'red';

    return (
        <div className="AllBlogs">
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
            <Blog color={color} />
        </div>
    );
};

export default AllBlogs; // to Home