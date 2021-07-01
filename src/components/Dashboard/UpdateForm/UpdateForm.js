import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './UpdateForm.scss';
const UpdateForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    // handle submit data for patching
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setIsLoading(true);
        
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.id) {
                    setIsLoading(false);
                }
            });



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
                }
            })
    };
    return (
        <div className="UpdateForm">
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
    );
};

export default UpdateForm; // to PostInfo