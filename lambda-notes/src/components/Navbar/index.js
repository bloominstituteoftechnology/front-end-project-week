// React
import React from 'react';
// Components
import Button from '../Button';
import { Link } from 'react-router-dom';
// CSS
import './Navbar.css';

const Navbar = (props) => {
    const { classes } = props;
    return (
        <div className={`navbar ${classes}`}>
            <h1>Lambda<br/>Notes</h1>
            <Link to="/"><Button>View Your Notes</Button></Link>
            <Button>+ Create New Note</Button>
        </div>
    );
}

export default Navbar;