import React from 'react';

import './UserInfo.scss';

const UserInfo = ({ index, user }) => {
    // console.log(user, index)
    return (
        <div className="UserInfo">
            <span>{index + 1}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.email}</span>
        </div>
    );
};

export default UserInfo;