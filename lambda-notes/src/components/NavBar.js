import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, Nav} from '../style'


const NavBar = () => {
    return(
        <NavWrapper>
            <Nav>
                <h1>Lambda <br/> Notes</h1>
                    
                    <NavLink to='/' className='nav-links'>View Your Notes</NavLink>
                    <NavLink to='' className='nav-links'>+ Create New Note</NavLink>
                </Nav>
            
        </NavWrapper>
    );
};

export default NavBar