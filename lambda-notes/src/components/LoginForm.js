import React from 'react'
import { Input, Form, Button } from 'reactstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        e.preventDefault();
        if (!(this.state.username === '' || this.state.password === '')) {
            this.props.loginUser(this.state.username, this.state.password);
        }
    }
    render() {
        return (
            <Form onSubmit={this.loginHandler}>
                <Input 
                    onChange={this.changeHandler}
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                />
                <Input 
                    onChange={this.changeHandler}
                    placeholder="Password"
                    value={this.state.password}
                    name="password"
                />
                <Button type="submit" color="info">Login</Button>
            </Form>
        )
    }

}

export default LoginForm;