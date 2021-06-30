import React from 'react';

import './Banner.scss';
const Banner = ({ notFound }) => {
    return (
        <div className="Banner">
            <div className="heading">
                {
                    notFound ?
                        <h1>
                            <span>Oops...</span><br />
                            We Couldn't Find Anything
                        </h1> :
                        <h1>
                            <span>Latest News</span><br />
                            Updates
                        </h1>
                }
            </div>
        </div>
    );
};

export default Banner; // to Home