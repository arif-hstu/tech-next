import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import './PostInfo.scss';
import ModalMessage from '../ModalMessage/ModalMessage';
import UpdateForm from '../UpdateForm/UpdateForm';

// custom style for modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const PostInfo = ({ myPost }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [status, setStatus] = useState({ type: "" });

    // handle detele post
    const deletePost = (postId) => {
        setIsLoading(true);
        // Simple DELETE request with fetch
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE' })
            .then(() => {
                setStatus({ type: 'delete' });
                setIsOpen(true);
                setIsLoading(false);
            })
    }

    // close message Modal
    const closeModal = () => {
        setIsOpen(false);
    }

    // close update post Modal
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false)
    }
    return (
        <div className="PostInfo">
            {/* Modal to show messages */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Message"
            >
                <ModalMessage status={status} closeModal={closeModal} />
            </Modal>

            {/* Modal to update Posts */}
            <Modal
                isOpen={isUpdateModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Message"
            >
                <UpdateForm myPost={myPost} closeUpdateModal={closeUpdateModal} />

            </Modal>

            <span>{myPost.id}</span>
            <Link to={`/post/${myPost.id}`}>
                <span>{myPost.title.slice(0, 15) + '...'}</span>
            </Link>
            <Link to={`/post/${myPost.id}`}>
                <span>{myPost.body.slice(0, 25) + '...'}</span>
            </Link>
            <span className="btnTag">Catagory</span>
            <div className="updateBtnHolder loaderHolder">
                <span
                    onClick={() => setIsUpdateModalOpen(true)}
                    className="btnSuccess"
                >Update</span>
            </div>
            <div className="deleteBtnHolder loaderHolder">
                <span
                    onClick={() => deletePost(myPost.id)}
                    className="btnDanger"
                    style={
                        isLoading ?
                            { visibility: "hidden" } : { visibility: "visible" }
                    }
                >Delete</span>
                <div
                    className="loader"
                    style={
                        isLoading ?
                            { visibility: "visible" } : { visibility: "hidden" }
                    }
                ></div>
            </div>
        </div>
    );
};

export default PostInfo;