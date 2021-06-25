import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../../Shared/Banner/Banner';
import Search from '../Search/Search';
import FeaturedBlog from '../Blogs/FeaturedBlog/FeaturedBlog';
import AllBlogs from '../Blogs/AllBlogs/AllBlogs';
import LoadMore from '../LoadMore/LoadMore';

import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Banner />
            <Search />
            <FeaturedBlog />
            <AllBlogs />
            <LoadMore />
        </div>
    );
};

export default Home; // to App