import React from 'react'
import { Input, Form, Button, Alert } from 'reactstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            loginError: false
        }
    }
    // componentDidMount() {

    // }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
            // password: e.target.value
        })
        
    }
    loginHandler = e => {
        this.setState({ usernameError: '', passwordError: '', loginError: false })
        e.preventDefault();

        if (this.state.username.length === 0 && this.state.password.length === 0) {
            
            this.setState({
                usernameError: 'Please enter a username',
                passwordError: 'Please enter a password',
                loginError: false
            })
        }
        else if (this.state.username.length <= 3 && this.state.password.length === 0) {
            this.setState({
                usernameError: 'Username must be at least 4 caracters long',
                passwordError: 'Please enter a password',
                loginError: false
            })
            console.log(this.state.usernameError);
        }
        
        else if (this.state.username !== 'username' || this.state.password !== 'password') {
            if (this.state.username.length <= 3 && this.state.password.length === 0) {
                this.setState({
                    loginError: false,
                    usernameError: 'Username must be at least 4 caracters long',
                    passwordError: 'Please enter a password',
                })
            }
            else if (this.state.username.length >= 3 && this.state.password.length === 0) {
                this.setState({
                    loginError: false,
                    passwordError: 'Please enter a password',
                    usernameError: ''
                })
            }
            else if (this.state.username.length >= 3 && this.state.password.length > 0) {
                this.setState({
                    loginError: true,
                    usernameError: '',
                    passwordError: ''
                })
            }
        }
        
        else {
            if (this.state.username !== 'username' || this.state.username.length <=3 ) {
                this.setState({
                    loginError: true,
                    usernameError: 'Username must be at least 4 caracters long',
                })
            }
            else {
                this.setState({
                    loginError: false,
                    usernameError: '',
                    passwordError: ''
                })
                this.props.loginUser(this.state.username, this.state.password);
            }
            
        }
        
    }
    render() {
        return (
            <>
            <div className="container welcome" >
                <h1 style={{color: 'white'} } >Welcome to</h1>
            
                <Form onSubmit={this.loginHandler}>
                {/* <h2 className="text-center note-title">Login</h2> */}
                    <Input 
                        onChange={this.changeHandler}
                        placeholder="Username"
                        value={this.state.username}
                        name="username"
                    />
                    { this.state.usernameError ? <Alert color="danger">{this.state.usernameError}</Alert> : null }
                    
                    <Input 
                        onChange={this.changeHandler}
                        placeholder="Password"
                        value={this.state.password}
                        name="password"
                    />
                    { this.state.passwordError ? <Alert color="danger">{this.state.passwordError}</Alert> : null }
                    
                    <Button type="submit" color="info">Login</Button>
                    
                    {this.state.loginError === true ? <Alert className="login-error" color="danger">Username or password do not match.</Alert>: null }
                    
                </Form>
            </div>
            </>
        )
    }

}

export default LoginForm;