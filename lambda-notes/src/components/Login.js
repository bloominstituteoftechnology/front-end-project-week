import React from 'react';

const Login = props => {

    return (
        <div>
            <h1>Login</h1>
                <form onSubmit={props.loginEvent}>
                    <input type="text" placeholder="Username" onChange={props.handleUsername} />
                    <input type="password" placeholder="Password" onChange={props.handlePassword} />
                    <button>Login</button>
                </form>

                <h3>Hint: user: shawn</h3>
                <h3>Hint: password: cat</h3>
        </div>
    );
}

export default Login;