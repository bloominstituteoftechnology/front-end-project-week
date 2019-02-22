import React from 'react'
import { Input, Form, Button } from 'reactstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }
    loginHandler = e => {
        e.preventDefault();
        this.props.loginUser(this.state.user);
        console.log(e);
    }
    render() {
        return (
            <Form onSubmit={this.loginHandler}>
                <Input 
                    placeholder="Username"
                    value={this.state.user.username}
                    name="username"
                />
                <Input 
                    placeholder="Password"
                    value={this.state.user.password}
                    name="password"
                />
                <Button type="submit" color="info">Login</Button>
            </Form>
        )
    }

}

export default LoginForm;