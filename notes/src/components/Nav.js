import React from 'react';
import './Nav.css'
import {
    Button
} from 'reactstrap';


const Nav = () => {
    return (
        <div className="Nav">
            <h2>Lambda <br />Notes</h2>
            <Button color="info" className="Nav-button">View Your Notes</Button>
            <br />
            <br />
            <Button color="info" className="Nav-button">+Create New Note</Button>
        </div>
    )
}

export default Nav;