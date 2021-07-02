import React from 'react';

import './Comment.scss';
const Comment = ({ commentDt }) => {
    return (
        <div className="Comment">
            <hr />
            <div className="authorHolder">
                <div className="avatarHolder">
                    img
                </div>
                <div className="infoHolder">
                    <p className="paraLg">
                        {commentDt.name}
                    </p>
                    <p className="paraLg">
                        {commentDt.email}
                    </p>
                    <p>{commentDt.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment; // to Comments