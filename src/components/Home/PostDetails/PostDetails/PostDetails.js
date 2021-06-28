import React, { useEffect, useState } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Comment from '../Comments/Comment/Comment';
import Comments from '../Comments/Comments/Comments';
import Post from '../Post/Post';

import './PostDetails.scss';
const PostDetails = () => {
    const [postData, setPostData] = useState([]);
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${1}`),
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${1}`)
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setPostData(data[0]);
            setCommentData(data[1]);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    return (
        <div className="PostDetails">
            <Navbar />
            <Post postData={postData}/>

            {/* using composition to avoid props-drilling */}
            <Comments>
                {
                    commentData.map(commentDt => <Comment key={commentDt.id} commentDt={commentDt} />)
                }
            </Comments>
        </div>
    );
};

export default PostDetails;