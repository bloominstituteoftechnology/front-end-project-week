import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CreateNewView.css'; 
import SideBar from './SideBar';

class CreateNewView extends Component {
  render() {
    return (
      <div>
        <SideBar />
          <h2 className="headerNewNote">Create New Note:</h2>        
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

export default CreateNewView;