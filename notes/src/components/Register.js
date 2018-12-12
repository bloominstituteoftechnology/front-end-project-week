import React from 'react';
import './LogReg.css';

const Register = (props) => {
    return (
        <div className ='registerpagecontainer'>
            <div className ='rcontent'>
                <h1>LAMBDA NOTES</h1>
                <form onSubmit={props.registerHandler}>
                    <input placeholder='Username' name='username' onChange={props.changeHandler}/>
                    <input placeholder='Password' name='password' onChange={props.changeHandler}/>
                    <button onClick={props.registerHandler}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;