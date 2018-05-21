import React from 'react';

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
          <Button
            buttonContent='View Your Notes'
            className='nav__view-notes-button'
          />
        </li>
        <li>
          <Button
            buttonContent='+ Create new Note'
            className='nav_create-new-note-button'
          />
        </li>
      </ul>
    </nav>
  )
}
 
export default Sidebar;