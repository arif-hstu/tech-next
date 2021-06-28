import React from 'react';

import './UserDetails.scss';
import Navbar from '../../../Shared/Navbar/Navbar';
import Search from '../../../Shared/Search/Search';
import FeaturedBlog from '../../Blogs/FeaturedBlog/FeaturedBlog';
import AllBlogs from '../../Blogs/AllBlogs/AllBlogs';
import LoadMore from '../../LoadMore/LoadMore';
import UserCard from '../UserCard/UserCard';

const UserDetails = () => {
    return (
        <div className="UserDetails">
            <Navbar />
            <UserCard/>
            <Search />
            <FeaturedBlog />
            <AllBlogs />
            <LoadMore />
        </div>
    );
};

export default UserDetails; // to App