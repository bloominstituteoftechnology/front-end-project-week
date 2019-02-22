import React from 'react'
import { Input, Form } from 'reactstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <Form>
                <Input 
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                />
                <Input 
                    placeholder="Password"
                    value={this.state.password}
                    name="password"
                />
            </Form>
        )
    }

}

export default LoginForm;