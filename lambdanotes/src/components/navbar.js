import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavbarAttrib = styled.div`
    width: 25%;
    background: #D3D2D3;
    height: 100vh;
    border: 2px solid #a6a6a6;
`

const NavTitle = styled.h1`
    color: #414141;
    text-align: left;
    padding-left: 10px;
    font-weight: bold;
    line-height: 90%;    
    margin: 20px 0 20px 5px;
`

const NavButton = styled.button`
    color: white;
    background: #24b8bd;
    width: 85%;
    height: 50px;
    margin: 10px 0;
    font-weight: bold;
    border: 2px solid #56aaad; 
`

const NavBar = (props) => {
    return (  
        <NavbarAttrib className="Navbar-Container">
            <NavTitle>Lambda Notes</NavTitle>
            <Link to="/"><NavButton onClick={props.edittoggle}>View Your Notes</NavButton></Link>
            <Link to="/form"><NavButton>+ Create New Note</NavButton></Link>
        </NavbarAttrib>
    );
}
 
export default NavBar;