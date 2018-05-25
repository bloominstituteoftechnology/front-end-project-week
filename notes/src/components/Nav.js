import React from 'react';
import './Nav.css'
import {
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="Nav">
            <h2>Lambda <br />Notes</h2>
            <Link to="/"><Button color="info" className="Nav-button">View Your Notes</Button></Link>
            <br />
            <br />

            <Link to="/AddNote"><Button color="info" className="Nav-button">+Create New Note</Button></Link>
        </div>
    )
}

export default Nav;

// makes lambda Note and view btn and create new note