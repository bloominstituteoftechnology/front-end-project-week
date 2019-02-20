import React from 'react';
import styled from "styled-components";

import auth0Client from './Auth0'


const Button = styled.button`
  display: flex;
  background: #00cec9;
  border: 1px solid rgb(167, 167, 167);
  padding: 15px;
  margin: 10px;
  width: 210px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
`;


const Login = () =>{

    return (
        <div>

                <Button onClick={auth0Client.login} >Login</Button>
    </div>
)
    };
export default Login;
