import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './EditNote.css'; 

class EditNote extends Component {
  render() {
    return (
      <div>
          <h2 className="header">Edit Note:</h2>        
          <form className="form">
            <input name="title" className="title" placeholder="Note Title"/>              
            <textarea name="body" className="body" placeholder="Note content" />
          </form>          
          <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button3">Update</button>
          </Link>
      </div>
    );
  }
}

export default EditNote;