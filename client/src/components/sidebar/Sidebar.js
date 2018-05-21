import React from 'react';
import { Link } from 'react-router-dom';

// components
import Button from '../misc/Button';

const Sidebar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Lambda Notes</h1>
      </div>

      <ul>
        <li>
          <Link to='/'>
            <Button
              buttonContent='View Your Notes'
              className='nav__view-notes-button'
            />
          </Link>
        </li>
        
        <li>
          <Link to='/new'>
            <Button
              buttonContent='+ Create new Note'
              className='nav_create-new-note-button'
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
 
export default Sidebar;