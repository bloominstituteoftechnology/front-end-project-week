// React
import React from 'react';
// Componenst
import Button from '../Button';
// CSS
import './Navbar.css';

const Navbar = (props) => {
    const { classes } = props;
    return (
        <div className={`navbar ${classes}`}>
            <h1>Lambda<br/>Notes</h1>
            <Button>View Your Notes</Button>
            <Button>+ Create New Note</Button>
        </div>
    );
}

export default Navbar;