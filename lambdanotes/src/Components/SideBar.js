import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
   return ( 
       <div>
           <h1>Lambda</h1>
            <h1>Notes</h1>
            <div className='sidebar-buttons'>
                <Link to="/" className='view-your-notes'>View Your Notes</Link>
                <Link to="/NoteForm" className='create-new-note'>+Create New Note</Link>
            </div>
        </div>
   )
}
export default SideBar;

//view routes to list
//create routes to noteform


//js in css style?