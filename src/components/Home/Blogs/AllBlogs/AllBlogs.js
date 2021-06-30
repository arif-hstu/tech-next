import React, { useContext } from 'react';

import { PostsContext, SearchContext, UserPostsContext } from '../../../../App';
import Blog from '../Blog/Blog';
import './AllBlogs.scss';

const AllBlogs = () => {
    const posts = useContext(PostsContext);
    const [userPosts] = useContext(UserPostsContext);
    const [searchTerm] = useContext(SearchContext);
    const color = 'red';

    // filter data depending upon searchTerm
    const filterData = (dataArr) => {
        const temp = [...dataArr];
        const filteredItems = temp.filter(el => {
            if (searchTerm === "") {
                return el;
            } else if (el.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return el;
            }
        });
        return filteredItems;
    }

    return (
        <div className="AllBlogs">
            {
                userPosts[0] ?
                    userPosts[0] &&
                    // filter data depending upon searchTerm
                    filterData(userPosts.slice(1)).map(post => <Blog key={post.id} post={post} color={color} />) :

                    posts[0] &&
                    filterData(posts.slice(1)).map(post => <Blog key={post.id} post={post} color={color} />)
            }
        </div>
    );
};

export default AllBlogs; // to Home