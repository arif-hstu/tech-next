import React from 'react';

import './Post.scss';

const Post = ({ postData }) => {
    console.log(postData);
    return (
        <div className="Post">
            <div className="imgHolder">
                {postData && postData.id}
            </div>
            <div className="infoHolder">

                <div className="titleHolder">
                    <a href="/" className="btnTag">News</a>
                    <h2>
                        {postData && postData.title}
                    </h2>
                </div>

                <div className="authorHolder">
                    <div className="avatarHolder">
                        img
                    </div>
                    <div className="infoHolder">
                        <p className="paraLg">
                            Lorem Ipsum
                        </p>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <p className="postBody">
                    {postData && postData.body}
                </p>
            </div>
        </div>
    );
};

export default Post; // to PostDetails