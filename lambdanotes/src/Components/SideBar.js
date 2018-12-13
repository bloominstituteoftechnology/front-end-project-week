import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

const SideBar = () => {
   return ( 
       <div className="sidebar-container">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <div className='sidebar-buttons'>
                <Link to="/" className='view-your-notes'>View Your Notes</Link>
                <Link to="/NoteForm" className='create-new-note-button'>+Create New Note</Link>
            </div>
        </div>
   )
}
export default SideBar;




//js in css style?