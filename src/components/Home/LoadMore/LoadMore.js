import React, { useContext } from 'react';
import { PageCountContext } from '../../../App';
import { Link } from 'react-router-dom';

import './LoadMore.scss';
const LoadMore = ({ addPost }) => {
    const [pageCount, setPageCount] = useContext(PageCountContext);
    const loadMore = () => {
        let tempCount = pageCount;
        tempCount = tempCount + 1;
        setPageCount(tempCount);
    }
    return (
        <div className='LoadMore'>
            <div className="btnHolder">
                <Link
                    className="btn btnWhite btnAnimate"
                    onClick={() => loadMore()}
                >load More</Link>
            </div>
        </div>
    );
};

export default LoadMore; // to Home