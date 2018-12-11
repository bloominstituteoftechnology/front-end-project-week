import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogin } from '../../actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        if (this.props.authenticated) {
            this.props.history.push('/app');
        }
    }

    changeHandler = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value})
    }
    
    render() {
        return (
            <Container 
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.authLogin({...this.state})
                }}>
                <StyledLabel htmlFor="username">Username</StyledLabel>
                <StyledInput 
                    type="text" 
                    name="username" 
                    id="username"
                    value={this.state.username}
                    onChange={this.changeHandler}
                />

                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput 
                    type="text" 
                    name="password" 
                    id="password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                />
                
                <StyledButton type="submit">Login</StyledButton>
                <Register to="/register">Register</Register>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { authenticated } = state.auth;
    return {
        authenticated
    }
}

export default connect(mapStateToProps, { authLogin })(Login);

const Register = styled(NavLink)`
    color: #bababa;
    font-size: 14px;
    margin-top: 10px;
`;

const StyledButton = styled.button`
    margin-top: 20px;
    height: 35px;
    border-radius: 6px;
    line-height: 35px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
`;

const StyledInput = styled.input`
    height: 35px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 6px;
    outline: none;
    line-height: 35px;
    padding: 0px 10px;
    font-size: 16px;
    width: 100%;
`;

const StyledLabel = styled.label`
    line-height: 35px;
    width: 100%;
`;

const Container = styled.form`
    position: absolute;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 350px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 25px 40px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
`