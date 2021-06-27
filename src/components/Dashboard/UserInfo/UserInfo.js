import React from 'react';

import './UserInfo.scss';

const UserInfo = ({ user }) => {
    // console.log(user, index)
    return (
        <div className="UserInfo">
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.email}</span>
        </div>
    );
};

export default UserInfo;