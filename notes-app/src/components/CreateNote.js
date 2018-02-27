import React from 'react';
import './CreateNote.css';
import { NavLink } from 'react-router-dom';

function CreateNote() {
  return (
    <div className="Home__Right">
      <div className="Right_Containers">
        <div className="CreateNote__Text">
          Create New Note:
        </div>
        <div className="CreateNote__Title">
          <textarea rows="1" cols="60">
            Note Title
          </textarea>
        </div>
        <div className="CreateNote__Content">
          <textarea rows="18" cols="85">
            Note Content
          </textarea>
        </div>
        <NavLink activeClassName='NavButton' to='/viewnotes'>
          <div className="button CreateNote__Save">
            <b>Save</b>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default CreateNote;
