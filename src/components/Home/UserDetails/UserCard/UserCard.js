import React from 'react';

import './UserCard.scss';

const UserCard = ({ userData }) => {
    return (
        <div className="UserCard">
            <div className="imgHolder">
                img
            </div>
            <div className="infoHolder">
                <h2>{userData.name}</h2>
                <p className="paraLg">{userData.username}</p>
                <p className="catchPhrase">{userData.company && userData.company.name}</p>

                <span>{
                    userData.address && userData.address.street + ", " + userData.address.suite + ", " + userData.address.city
                }</span>

                <p className="paraLg">{userData.website}</p>
                <div className="contactInfo">
                    <p className="btnTag">
                        {userData.email}
                    </p>
                    <p className="btnTag">
                        {userData.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard; // to Home