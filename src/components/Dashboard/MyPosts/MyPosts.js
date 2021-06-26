import React from 'react';

import PostInfo from '../PostInfo/PostInfo';
import './MyPosts.scss';

const MyPosts = () => {
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
                <PostInfo />
            </div>
        </div>
    );
};

export default MyPosts;