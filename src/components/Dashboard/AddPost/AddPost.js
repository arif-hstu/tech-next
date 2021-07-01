import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

import './AddPost.scss';

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

// bind modal with root element
Modal.setAppElement('#root');

const AddPost = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.postTitle,
                body: data.postBody
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    setIsLoading(false);
                    setIsOpen(true);
                }
            })
    };

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="AddPost">
            <div className="contentHolder">
                <h4>Add Post</h4>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Successful Message"
                >
                    <div style={{ textAlign: "center" }} className="infoHolder">
                        <h3>Your Post Published Successfully!</h3>
                        <button style={{ border: 'none' }} className="btnPrimary" onClick={closeModal}>Publish More!</button>
                    </div>
                </Modal>

                <div className="formHolder">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="titleHolder">
                            <h4>Post Title</h4>
                            <input defaultValue="" {...register("postTitle")} />
                        </div>
                        <div className="descriptionHolder">
                            <h4>Description</h4>
                            <textarea {...register("postBody", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="categoryHolder">
                            <h4>Select Category</h4>
                            <div className="tagHolder">
                                <p className="btnTag">NEWS</p>
                                <p className="btnTag">Tech</p>
                                <p className="btnTag">NEWS</p>
                                <p className="btnTag">NEWS</p>
                                <p className="btnTag">NEWS</p>
                            </div>
                        </div>
                        <div className="btnHolder">
                            <input
                                style={isLoading ? { display: "none" } : { display: "block" }}
                                className="btnPrimary"
                                type="submit" />

                            <div
                                style={isLoading ? { display: "block" } : { display: "none" }}
                                className="loader">

                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost; // to Dashboard