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
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [status, setStatus] = useState({ type: "" });

    // handle detele post
    const deletePost = () => {
        // Simple DELETE request with fetch
        fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
            .then(() => {
                setStatus({ type: 'delete'});
                setIsOpen(true);
            })
            .then(err => {
                setStatus({ type: 'deleteFailed'});
                setIsOpen(true);
            });
    }

    // close modal
    function closeModal() {
        setIsOpen(false);
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
                <UpdateForm />
                
            </Modal>

            <span>{myPost.id}</span>
            <Link to={`/post/${myPost.id}`}>
                <span>{myPost.title.slice(0, 15) + '...'}</span>
            </Link>
            <Link to={`/post/${myPost.id}`}>
                <span>{myPost.body.slice(0, 25) + '...'}</span>
            </Link>
            <span className="btnTag">Catagory</span>
            <span onClick={()=> setIsUpdateModalOpen(true)} className="btnSuccess">Update</span>
            <span onClick={() => deletePost(myPost.id)} className="btnDanger">Delete</span>
        </div>
    );
};

export default PostInfo;