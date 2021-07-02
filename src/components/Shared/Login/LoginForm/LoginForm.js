import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../../../App';

import './LoginForm.scss';
const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

    // handle submit data for logging in
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then(res => res.json())
            .then(json => {
                setLoggedIn({
                    id: json.id,
                    name: json.name
                });
                if (data.keepLoggedIn) {
                    localStorage.setItem("userId", json.id);
                    localStorage.setItem("userName", json.name);
                }
                history.replace(from);
            })
    };

    // get data to redirect from login page
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <h4>Your Id</h4>
                <input
                    type="number"
                    {...register("userId", { required: 'Please input you User ID' })} />
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