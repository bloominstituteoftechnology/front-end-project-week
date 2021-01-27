import React from 'react';
import './Style.css'
import { Link } from 'react-router-dom';

import Logout from '../Authenticate/Logout.js'

const NotesSideBar = (props) => {
    return (
        <div className = "side-bar">
            <h1>Notes <br/>App </h1>
                   
            <Link to = "/notes" className = "no-decoration">
                <button> View Your Notes </button>
            </Link>

            <Link to = "/create" className = "no-decoration">
                <button> Create New Note </button>
            </Link>

            <Logout />
           
        </div>
    )
}


export default NotesSideBar;

