import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(props){
        return(
            <HeaderDiv>
                <h1>Welcome to Lambda Notes</h1>
                <div className="links">
                    <Link to="/welcome/login" >Login</Link>
                    <Link to="/welcome/register" >Register</Link>
                </div>
            </HeaderDiv>
        )
    }
}

const HeaderDiv = styled.div`
    ${'' /* border: 1px solid red; */}
`;