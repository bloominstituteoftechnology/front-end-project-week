import React from 'react';

const LoginPage = () => {
    return(
        <div className="loginFormWrapper">
            <div className="test">

            <div className="appName">
                <h1>Login to Lambda Notes</h1>
            </div>

            <div className="loginForm">
                    

                <h5 className="headingOne">Username:</h5>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username"  
                    className="loginInputs"
                />

                <h5 className="headingTwo">Password:</h5>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="loginInputs"
                />

                <br />

                <button 
                    className="loginSubmit"
                >
                    Login
                </button>

            </div> 
            </div>
        </div>
    )
}

export default LoginPage