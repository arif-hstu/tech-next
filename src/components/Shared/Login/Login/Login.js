import React from 'react';
import Menu from '../../Menu/Menu';
import Navbar from '../../Navbar/Navbar';
import LoginForm from '../LoginForm/LoginForm';

import './Login.scss';
const Login = () => {
    return (
        <div className="Login">
            <Menu />
            <Navbar />
            <LoginForm />
        </div>
    );
};

export default Login;