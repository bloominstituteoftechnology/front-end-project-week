import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const SideBar = () => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <Button color="info">
                <NavLink to={'/'}> View Your Notes</NavLink>
            </Button>
            <Button color="info">
                <NavLink to={'/notes/create'}> + Create Your Note</NavLink>
            </Button>
        </div>
    )
}

export default SideBar;