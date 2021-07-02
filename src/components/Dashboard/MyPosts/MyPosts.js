import React, { useContext, useEffect, useState } from 'react';
import { LoggedInContext, SearchContext } from '../../../App';

import PostInfo from '../PostInfo/PostInfo';
import './MyPosts.scss';

const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [searchTerm] = useContext(SearchContext);
    const [loggedIn] = useContext(LoggedInContext);
    // fetch data from the the server
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${parseInt(loggedIn.id)}`)
            .then(res => res.json())
            .then(data => {
                setMyPosts(data);
            });
    }, []);

    return (
        <div className="MyPosts">
            <div className="contentHolder">
                <h4>Dashboard</h4>
                <div className="header">
                    <span>
                        <strong>No</strong>
                        <strong>Title</strong>
                        <strong>Description</strong>
                        <strong>Catagory</strong>
                        <strong>Update</strong>
                        <strong>Delete</strong>
                    </span>
                </div>
                {
                    myPosts.length && myPosts.filter(post => {
                        if (searchTerm === "") {
                            return post;
                        } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return post;
                        }
                    }).map(myPost => <PostInfo key={myPost.id} myPost={myPost} />)
                }
            </div>
        </div>
    );
};

export default MyPosts;