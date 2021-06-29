import React, { useEffect, useState } from 'react';

import PostInfo from '../PostInfo/PostInfo';
import './MyPosts.scss';

const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`)
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
                    myPosts.length && myPosts.map(myPost => <PostInfo key={myPost.id} myPost={myPost} />)
                }
            </div>
        </div>
    );
};

export default MyPosts;