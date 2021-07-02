import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './UserDetails.scss';
import Navbar from '../../../Shared/Navbar/Navbar';
import Search from '../../../Shared/Search/Search';
import FeaturedBlog from '../../Blogs/FeaturedBlog/FeaturedBlog';
import AllBlogs from '../../Blogs/AllBlogs/AllBlogs';
import UserCard from '../UserCard/UserCard';
import { UserPostsContext } from '../../../../App';
import Menu from '../../../Shared/Menu/Menu';

const UserDetails = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    const [userPosts, setUserPosts] = useContext(UserPostsContext);

    useEffect(() => {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setUserData(data[0]);
            setUserPosts(data[1]);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div className="UserDetails">
            <Menu />
            <Navbar />
            <UserCard userData={userData} />
            <Search />
            <FeaturedBlog userPosts={userPosts} />
            <AllBlogs />
        </div>
    );
};

export default UserDetails; // to App