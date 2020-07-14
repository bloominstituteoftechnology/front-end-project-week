import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './nav.css';

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    margin: 10px auto;
    padding: 10px 0;
    background-color: teal;
`;


class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="nav">
            <div className="nav__logo">
                <h1>User Notes</h1>
            </div>
                <StyledLink to="/">View Your Note</StyledLink>
                <StyledLink to="/new">+ Create New Note </StyledLink>
             </div>
        )
    }
}
export default Nav;