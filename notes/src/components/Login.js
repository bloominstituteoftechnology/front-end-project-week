import React from 'react';
import './LogReg.css';

const Login = (props) => {
    return (
        <div className ='loginpagecontainer'>
            <div className ='lcontent'>
                <h1>JOTTER</h1>
                <form onSubmit={props.loginHandler}>
                    <div className='inputs'>
                        <input placeholder='Username' name='username' onChange={props.changeHandler}/>
                        <input placeholder='Password' name='password' onChange={props.changeHandler}/>
                    </div>
                    <button onClick={props.loginHandler}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;