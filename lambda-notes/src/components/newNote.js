import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SideNav from './SideNav.js'; 
import newNote from './newNote.css'

class NewNote extends Component {
  render() {
    return (
      <div>
        <SideNav />
          <h2 className="header">Create New Note:</h2>        
          <form className="form">
            <input name="title" className="title" placeholder="Note Title"/>              
            <textarea name="body" className="body" placeholder="Note content" />
          </form>          
          <Link to="/">
          <button className="button3">Save</button>
          </Link>
      </div>
    );
  }
}

export default NewNote;