import React from "react";
import { Link } from 'react-router-dom';

const LoginRegister = props => (
    <div className="login-register-page">
        <div className="content">
        <h1>WELCOME TO LAMBDA NOTES</h1>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    </div>
);

export default LoginRegister;