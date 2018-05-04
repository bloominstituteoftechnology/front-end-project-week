import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const SideNav = props => {
    return (
        <div>
            <Nav className='viewNotes'>
            <NavItem>
                <NavLink href='#'>Notes List</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='#'>Notes List</NavLink>
            </NavItem>
            </Nav>

        </div>

    )
}

export default SideNav;