import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './UserCard.scss';

const UserCard = () => {

    return (
        <div className="UserCard">
            <div className="imgHolder">
                img
            </div>
            <div className="infoHolder">
                <h2>Lorem Ipusum</h2>
                <p className="paraLg">User Name</p>
                <p className="catchPhrase">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, fugiat.</p>
                <span>
                    "Kulas Light", "Apt. 556",Gwenborough
                </span>
                <p className="paraLg">Website.com</p>
                <div className="contactInfo">
                    <p className="btnTag">
                        mail.com
                    </p>
                    <p className="btnTag">
                        01548852
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserCard; // to Home