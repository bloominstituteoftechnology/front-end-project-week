import React from 'react';
import styled from 'styled-components'

const LoginField = styled.div`
    background: #24B8BD;
    width: 880px;
    margin: 100px auto;
    padding: 100px;
    padding-top: 20px;
`;

const LoginHeader = styled.h1`
    text-align: center;
    color: white;
    margin-bottom: 10px;
`;

const LoginForm = styled.form`
margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column
`;

const LoginInputs = styled.input`
    margin-bottom: 10px ;
    padding: 5px;
    border-radius: 6px;
`;

const LoginButton = styled.button`
margin-top: 10px;
    width: 200px;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    &:hover{background-color: lightgray;}
`;

const Login = props => {

    return(
        <LoginField>
            <LoginHeader>Welcome to LambdaNotes!</LoginHeader>
            <LoginHeader>Login</LoginHeader>
           <LoginForm onSubmit={props.login}>
            
            <LoginInputs 
                type='text'
                name='usernameText'
                placeholder="Username"
                value={props.usernameText}
                onChange={props.handleChange}
            />
            <LoginInputs 
                placeholder="Password"
                type='text'
                name='passwordText'
                value={props.passwordText}
                onChange={props.handleChange}
            />
            
            <LoginButton type='submit'>Login</LoginButton>
           </LoginForm>
            
        </LoginField>
    );
}

export default Login;