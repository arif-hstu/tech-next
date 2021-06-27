import React from 'react';
import { useForm } from 'react-hook-form';

import './AddPost.scss';

const AddPost = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch);
    
    return (
        <div className="AddPost">
            <div className="contentHolder">
                <h4>Add Post</h4>
                <div className="formHolder">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="titleHolder">
                            <h4>Post Title</h4>
                            <input defaultValue="" {...register("example")} />
                        </div>
                        <div className="descriptionHolder">
                            <h4>Description</h4>
                            <textarea {...register("exampleRequired", { required: true })} />
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