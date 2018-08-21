import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return(
        <div className="NavBar">
            <h1>Lambda Notes</h1>
            <div className="btn"><Link to="/notes">View Your Notes</Link></div>
            <div className="btn"><Link to="/add">+ Create New Note</Link></div>         
        </div>
    )
}

 
export default NavBar; 