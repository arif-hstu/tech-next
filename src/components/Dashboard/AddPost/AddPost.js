import React from 'react';
import { useForm } from 'react-hook-form';

import './AddPost.scss';

const AddPost = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: data.postTitle,
            body: data.postBody          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          console.log('response: ' + JSON.stringify(json));
        })
    };

    return (
        <div className="AddPost">
            <div className="contentHolder">
                <h4>Add Post</h4>
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
                            <input className="btnPrimary" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost; // to Dashboard