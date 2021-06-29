import React from 'react';
import { Link } from 'react-router-dom';

import './PostInfo.scss';

const PostInfo = ({ myPost }) => {
    return (
        <div className="PostInfo">
            <span>{myPost.id}</span>
            <Link to={`/post/${myPost.id}`}><span>{myPost.title.slice(0, 15) + '...'}</span></Link>
            <Link to={`/post/${myPost.id}`}><span>{myPost.body.slice(0, 25) + '...'}</span></Link>
            <span className="btnTag">Catagory</span>
            <span className="btnSuccess">Update</span>
            <span className="btnDanger">Delete</span>
        </div>
    );
};

export default PostInfo;