import React from 'react';
import './LogReg.css';

const Register = (props) => {
    return (
        <div className ='registerpagecontainer'>
            <div className ='rcontent'>
                <h1>JOTTER</h1>
                <form onSubmit={props.registerHandler}>
                    <div className='inputs'>
                        <input placeholder='Username' name='username' onChange={props.changeHandler}/>
                        <input placeholder='Password' name='password' onChange={props.changeHandler}/>
                    </div>
                    <button onClick={props.registerHandler}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;