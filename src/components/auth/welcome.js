import React, {Component} from 'react';
import styled from 'styled-components';
import { 
   Link, Route
    } from 'react-router-dom';

import Login from './login';
import Register from './register';

export default class Welcome extends Component{
    componentDidMount(){
        //check if token had previously existed then route to login automatically 
    }
    
    render(){
        return(
            <WelcomeDiv>
                <h1>Welcome to Lambda Notes</h1>
                <div className="links">
                    <Link to="/welcome/login" >Login</Link>
                    <Link to="/welcome/register" >Register</Link>
                </div>
                <Route path="/welcome/login" component={Login} />
                <Route path="/welcome/register" component={Register} />
            </WelcomeDiv>
        )
    }
}

const WelcomeDiv = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links{
        width: 100%;
        height: 40px;
        border: 1px solid green;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    Link{
        padding: 10px;
    }
`;