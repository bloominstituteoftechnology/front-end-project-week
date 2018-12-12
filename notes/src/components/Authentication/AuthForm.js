import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 30%;
    height: 200px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
`
const RegisterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-left: 35px;
    margin-top: 20px;
    
`
const Button = styled.button`
    width: 70%;
    border-radius: 10px;
    font-weight:bold;
    cursor: pointer;
    border: 1px solid black;
    color: white;
    background-color:#2bc1c4;
    font-size: 24px;
    height: 50px;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-100%);
    
`
const Input =styled.input`
    height: 30px;
    width:80%;
    margin-left: 30px;
    border: 1px solid black;
    margin-top: 15px;
    padding-left: 10px;
    border-radius: 20px;
    :focus{
        outline: none;
    }
`
const P = styled.p`
    cursor: pointer;
    
`
const NewLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const H1 = styled.h1`
    font-size: 30px;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-55%)
`
const AuthForm = (props) =>{
    return(
        <Form onSubmit = {props.submitHandler}>
            <H1>SIGN IN</H1>
            <Input 
                placeholder='Username'
                type="text"
                value={props.user}
                onChange={props.userHandler} 
                />
            <Input 
                placeholder='Password'
                type="password"
                value={props.pass}
                onChange={props.passHandler} 
            />
            <RegisterDiv>
                <P>Register</P>
                <NewLink to = 'forgot'><P>Forgot Password</P></NewLink>
            </RegisterDiv>
            <Button>Login</Button>
        </Form>
    )
}

export default AuthForm