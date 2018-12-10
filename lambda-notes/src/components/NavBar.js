import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, Nav, NavContent, NavHeader} from '../style'


const NavBar = () => {
    return(
        <NavWrapper>
            <Nav>
                <NavHeader>Lambda <br/> Notes </NavHeader>
                    <NavContent>
                        <NavLink to='/' className='nav-links'>View Your Notes</NavLink>
                        <NavLink to='/create-note' className='nav-links'>+ Create New Note</NavLink>
                    </NavContent>
                </Nav>
            
        </NavWrapper>
    );
};

export default NavBar