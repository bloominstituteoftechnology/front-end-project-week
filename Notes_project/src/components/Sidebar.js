import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return(
    
        <div className="sidebar-wrapper" >
            <header className="header">
                    <h1 className="headerText">Lambda Notes</h1>
            </header>
            <Link to={'/NoteContainer'}><button className="viewNotes" > View Your Notes </button></Link>
            <Link to={'/CreateCard'}><button className="createNote"> + Create New Note </button></Link>
              
        </div>

    )
}


export default Sidebar;