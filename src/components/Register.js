import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`

    display: flex;
    flex-direction: column;
    max-width: 300px;
    height: 300px;
    width: 100%;
    margin: 100px auto 0 auto;
    border: 1px solid silver;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);

`
const Input = styled.input`
    margin: 5px 0;
    height: 30px;
    max-width: 200px;
    padding-left: 10px;
    border-radius: 5px;
`
const Text = styled.p`

    >   a {
        text-decoration: none;
        color: #f4511e;
    }
`
const Button = styled.button`
    
    display: inline-block;
    border-radius: 4px;
    background-color: rgba(244, 81, 30, 1);
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    width: 100px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 10px;
    :hover {
        background-color: rgba(244, 81, 30, 0.7);
    }
`

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.replace('/notes')
        }
    }

    changeHandler = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });
    }

    submitHandler = async (event, user) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', user);
            const token = response.data;
            localStorage.setItem('token', token);
            this.props.history.push('/notes');
        } catch (error) {
            console.log(error);
        }
    }


    render() { 
        const LinkToLogin = <Link to='/login'>Login</Link>
        return ( 
            <Form className="login-form" onSubmit={(e) => this.submitHandler(e, this.state.user)}>
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    required
                    onChange={this.changeHandler}
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    required
                    onChange={this.changeHandler}
                />

                
                    <Button type="submit">Register</Button>
                    <Text>Already have an account? {LinkToLogin}</Text>
                
            </Form>
         );
    }
}
 
export default Register;
