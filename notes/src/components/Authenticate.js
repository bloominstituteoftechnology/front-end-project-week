import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                loggedIn: false
            }
        }

        responseGoogle = (response) => {
            this.props.handleLogin(response.googleId)
            console.log(response);
            this.forceUpdate();
            this.props.history.push('/');
        }

        handleChange = (event) => {
            this.setState({username: event.target.value})
        }

        render() {
            return (
                <div>
                    <h1>Please log in</h1>
                    <GoogleLogin
                    clientId="708243962597-kv2d1370mrc5ud39h9s39iqq6odkht3p.apps.googleusercontent.com"
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