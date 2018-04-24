import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <Link to='/'> {props.view} </Link>
                </NavItem>
                <NavItem>
                    <Link to='/CreateNote'> {props.create} </Link>
                </NavItem>
            </Nav>
        </div>
    );
};


export default Navigation;