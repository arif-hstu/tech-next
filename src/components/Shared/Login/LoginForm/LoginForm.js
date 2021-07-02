import React from 'react';
import { useForm } from 'react-hook-form';

import './LoginForm.scss';
const LoginForm = () => {

    // handle submit data for logging in
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('data..............', data);
    };

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <h4>Your Id</h4>
                <input
                    {...register("UserId")} />
                <div className="keepLoggedIn">
                    <label className="checkboxHolder">
                        <input
                            name="keepLoggedIn"
                            type="checkbox"
                            {...register("keepLoggedIn")}
                        />{' '}
                    </label>
                    <p>Keep Me Logged In</p>
                </div>
                <input className="btnPrimary" type="submit" />
            </form>
        </div>
    );
};

export default LoginForm; // to App