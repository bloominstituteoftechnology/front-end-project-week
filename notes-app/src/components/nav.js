import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const NavBar = styled.nav`
    position: fixed;
    width: 224px;
    height: 100%;
    background: #D3D2D3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 18px;
    a{
        text-decoration: none;
    }
`;

const NavHeader = styled.h1`
    font-size: 35px;
    text-align: left;
    margin: 15px 0;
    line-height: 2rem;
`;

const NavButton = styled(NavLink)`
    text-align: center;
    width: 190px;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    text-decoration: none;
    padding: 10px;
    margin: 10px 10px 10px 0;
    text-decoration: none;
    &:hover {
        color: #24B8BD;
        background: white;
    }
`;
const NavDropdownBtn = styled.button`
    width: 190px;
    margin-top: 30px;
    background-color: white;
    color: #24B8BD;
    padding: 5px;
    font-size: 18px;
    border: 1px solid gray;
`;

const NavDropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover{
        .dropdown-content{display:block}
        .dropbtn{background-color: lightgray;}
    }
`;

const Nav = props => {
    
    return (
        <NavBar>
            <NavHeader>Lambda<br/>Notes</NavHeader>
            <NavButton to='/'>View Your Notes</NavButton>
            <NavButton to='/form'>+ Create New Note</NavButton>
            <NavDropdown >
                <NavDropdownBtn className="dropbtn">{localStorage.getItem('username')} &ensp;&ensp;|&ensp;  v</NavDropdownBtn>
                <div class="dropdown-content">
                    <NavLink to="/" onClick={()=> console.log(localStorage.getItem('username'))}>Profile</NavLink>
                    <NavLink to="/" onClick={()=> {localStorage.clear();document.location.reload();}}>Log Out</NavLink>
                    
                </div>
            </NavDropdown>
        </NavBar>
    )
}

export default Nav;