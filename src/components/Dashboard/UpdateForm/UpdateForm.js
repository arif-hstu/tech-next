import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './UpdateForm.scss';
const UpdateForm = ({ myPost, closeUpdateModal }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [updateMessage, setUpdateMessage] = useState(false);

    // handle submit data for patching
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setIsLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${data.postId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: data.postId,
                title: data.postTitle,
                body: data.postBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.id) {
                    setIsLoading(false);
                    setUpdateMessage(true);
                }
            });
    };

    return (
        <div className="UpdateForm">
            <span onClick={() => closeUpdateModal()}>X</span>
            <div className="formHolder">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="postIdHolder">
                        <h4>Post Id</h4>
                        <input defaultValue={parseInt(myPost.id)} {...register("postId")} />
                    </div>
                    <div className="descriptionHolder">
                        <h4>Description</h4>
                        <textarea
                            defaultValue={myPost.body}
                            {...register("postBody", { required: true })}
                        />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="titleHolder">
                        <h4>Post Title</h4>
                        <input defaultValue={myPost.title} {...register("postTitle")} />
                    </div>

                    <div
                        className="btnHolder"
                        style={
                            updateMessage ? { visibility: "hidden" }
                                : { display: "visible" }
                        }
                    >
                        <input
                            style={
                                isLoading ? { display: "none" }
                                    : { display: "block" }
                            }
                            className="btnPrimary"
                            type="submit" />
                        <div
                            style={
                                isLoading ? { display: "block" }
                                    : { display: "none" }
                            }
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
                <div
                    className="messageHolder"
                    style={
                        updateMessage ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    <h5>Your Post Updated Successfully!
                        <span onClick={() => closeUpdateModal()}> Go Back!</span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm; // to PostInfo