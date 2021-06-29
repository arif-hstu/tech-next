import React from 'react';

import './PostInfo.scss';

const PostInfo = ({ myPost }) => {
    return (
        <div className="PostInfo">
            <span>{myPost.id}</span>
            <span>{myPost.title.slice(0, 15)+ '...'}</span>
            <span>{myPost.body.slice(0, 25)+ '...'}</span>
            <span className="btnTag">Catagory</span>
            <span className="btnSuccess">Update</span>
            <span className="btnDanger">Delete</span>
        </div>
    );
};

export default PostInfo;