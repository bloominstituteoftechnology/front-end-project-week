import React from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from'react-router-dom';


const SideNav = ()  =>  {
    return (
        <div className="sideNav">
        <div className="nav-header">Lambda Notes</div>
        <div className="nav-buttons">
        <Link to="/">
        <Button className="sideNav-button">View Your Notes</Button>
        </Link>

        <Link to="create">
        <Button className="sideNav-button">+Create New Note</Button>
        </Link>
        </div>
        </div>
    )
}

export default SideNav;


