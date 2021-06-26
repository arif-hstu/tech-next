import React from 'react';

import './PostInfo.scss';

const PostInfo = () => {
    return (
        <div className="PostInfo">
            <span>No</span>
            <span>Title</span>
            <span>Description</span>
            <span className="btnTag">Catagory</span>
            <span className="btnSuccess">Update</span>
            <span className="btnDanger">Delete</span>
        </div>
    );
};

export default PostInfo;