import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavbarAttrib = styled.div`
    width: 25%;
    margin-left: 10px;
    background: #D3D2D3;
    height: 100vh;
`

const NavBar = () => {
    return (  
        <NavbarAttrib className="Navbar-Container">
            <h1>Lambda Notes</h1>
            <Link to="/"><button>View Your Notes</button></Link>
            <Link to="/form"><button>+ Create New Note</button></Link>
        </NavbarAttrib>
    );
}
 
export default NavBar;