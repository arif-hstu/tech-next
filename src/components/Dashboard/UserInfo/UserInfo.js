import React from 'react';

import './UserInfo.scss';

const UserInfo = ({ user }) => {
    return (
        <div className="UserInfo">
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.website}</span>
        </div>
    );
};

export default UserInfo;