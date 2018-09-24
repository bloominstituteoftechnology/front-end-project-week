import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: ''
            }
        }

        responseGoogle = (response) => {
            this.props.handleLogin(response.googleId)
            console.log(response);
            window.location.reload();
        }

        handleChange = (event) => {
            this.setState({username: event.target.value})
        }

        render() {
            return (
                <div>
                    <h1>Please log in</h1>
                    <GoogleLogin
                    clientId="82812314384-pd0mig537qa6b5o6pdn79nb31i7k7k23.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    />
                    <form className="loginForm" onSubmit={() => {this.props.handleLogin(this.state.username)}}>
                        
                        <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                        <input name="password" type="password" placeholder="password" />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            )
        }
    }

    export default Authenticate;