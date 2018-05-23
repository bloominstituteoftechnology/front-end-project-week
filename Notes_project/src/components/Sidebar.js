import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

const Sidebar = () => {
    return(
    
        <div className="sidebar-wrapper" >
            <header className="header">
                    <h1 className="headerText">Lambda Notes</h1>
            </header>
            <button className="viewNotes" > View Your Notes </button>
            <button className="createNote"> + Create New Note </button>
              
        </div>

    )
}


export default Sidebar;