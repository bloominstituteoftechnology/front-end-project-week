import React from 'react';
import { Nav, NavItem, /* NavLink */ } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className="w-100 ">
            <Nav className="w-100 ">
                <NavItem className="w-100 ">
                    <Link to='/YourNotes'> {props.view} </Link>
                </NavItem>
                <NavItem className="w-100">
                    <Link to='/CreateNote'> {props.create} </Link>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Navigation;