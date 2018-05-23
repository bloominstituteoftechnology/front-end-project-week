import React from 'react';
import { Link } from 'react-router-dom';

// components
import Button from '../misc/Button';

// style
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__logo'>
        <h1 className='logo__h1'>Lambda Notes</h1>
      </div>

      <ul className='navigation__button-container'>
        <li>
          <Link to='/'>
            <Button
              buttonContent='View Your Notes'
              buttonClassName='button button-container__view-notes-button'
            />
          </Link>
        </li>

        <li>
          <Link to='/note/new'>
            <Button
              buttonContent='+ Create New Note'
              buttonClassName='button button-container_create-new-note-button'
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
 
export default Sidebar;