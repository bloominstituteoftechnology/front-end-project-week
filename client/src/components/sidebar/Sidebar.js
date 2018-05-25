import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

// components
import Button from '../misc/Button';
import TextField from '../misc/TextField';

// style
import './Sidebar.css';

const Sidebar = props => {
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

        <li>
          <CSVLink data={ props.noteList } separator=','>
            <Button
              buttonClassName='button'
              buttonContent='Download Notes'
            />
          </CSVLink>
        </li>

        <li>
          <TextField
            variant='input'
            inputClassName='button-container__input-search-notes'
            inputName='search'
            inputOnChange={ props.setInputVal }
            inputPlaceHolder='Search Notes'
            inputType='text'
            inputVal={ props.search }
          />
        </li>
      </ul>
    </nav>
  )
}
 
export default Sidebar;