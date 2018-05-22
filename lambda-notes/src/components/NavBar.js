import React from 'react';
import './NavBar.css';
import { Button } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <h2>Lambda Notes</h2>
            <Button>View Your Notes</Button>
            <br />
            <Button>+Create New Note</Button>
        </div>
    )
}


export default NavBar;