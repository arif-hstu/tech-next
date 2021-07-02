import React from 'react';

import './Banner.scss';
const Banner = ({ notFound }) => {
    return (
        <div className="Banner">
            <div className="heading">
                {
                    notFound ?
                        <div className="notFound">
                            <h1>
                                <span>Oops...</span><br />
                                We Couldn't Find Anything
                            </h1>
                        </div> :
                        <h1>
                            <span>Latest Blog</span><br />
                            Posts
                        </h1>
                }
            </div>
        </div>
    );
};

export default Banner; // to Home