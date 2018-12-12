import React from 'react'
const AuthForm = (props) =>{
    return(
        <form onSubmit = {props.submitHandler}>
            Username: <input 
                placeholder='Username'
                type="text"
                value={props.user}
                onChange={props.userHandler} 
                />
            Password: <input 
                placeholder='Password'
                type="password"
                value={props.pass}
                onChange={props.passHandler} 
            />
            <button>Login</button>
        </form>
    )
}

export default AuthForm