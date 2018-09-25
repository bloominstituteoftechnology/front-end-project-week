import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

const Background = styled.div`
    font-weight: 800;
    width: 1200px;
    height: 100vh;
    padding: 1rem 10rem;
    color: white;
    background: #2AB4AE;
`;

const Title = styled.h1`
    margin: 0 auto;
    font-size: 4rem;
    font-weight: 800;
    width: 1200px;
`;

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    submit = e => {
        e.preventDefault();
        const { email, password } = this.state; 
        axios.post('http://localhost:8000/login', {
                email: email, 
                password: password 
            })
             .then( res => {
                 console.log( res.data )
                 this.setState({ email: '', password: ''});
                 window.location.href='http://localhost:3000/note/all'
                })
             .catch( err => console.log( err ));
    }
    render() {
        return (
            <Background>
                <Title>Lambda Notes</Title>
                <Form>
                    <FormGroup>
                        <Input placeholder='email'
                                name='email'
                                type='email'
                                onChange={this.handleChange}/>
                        <Input placeholder='password'
                                name='password'
                                type='password'
                                onChange={this.handleChange}/>
                        <Button onClick={this.submit}>
                            Login
                        </Button>
                    </FormGroup>
                </Form>
            </Background>
        );
    };
};

export default Login;