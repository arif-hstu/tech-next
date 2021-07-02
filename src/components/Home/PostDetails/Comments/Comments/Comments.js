import React from 'react';

import './Comments.scss';

const Comments = ({ children }) => {
    return (
        <div className="Comments">
            <h4>Comments</h4>
            {children}
        </div>
    );
};

export default Comments; // to Post;