import React from 'react';
import './css/navig.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
    return (
    
        <div className="wrapper">

        <nav id="sidebar">
            <div className="sidebar-header">
                <h1>Lambda Notes</h1>
            </div>
            <ul className="list-unstyled components">
                <li><button className="buttonStyle"><Link to="/">View Your Notes</Link></button></li>
                <br />
                <li><button className="buttonStyle"><Link to="/createNote">+ Create new Note</Link></button></li>
            </ul>
        </nav>

        </div>

    )
}
 
export default Navigation;