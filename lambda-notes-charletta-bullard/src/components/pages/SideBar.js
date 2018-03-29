import React  from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  
    return (
      <div className='sidebar'>
        <h1 className='title'>Lambda Notes</h1>
        <Link to='/NotesList'>
          <button className='view-btn'>View Your Notes</button>
        </Link>
        <Link to='/NoteForm'>
          <button className='create-btn'>+Create New Note</button>
        </Link>
      </div>
    );
}


export default SideBar;