import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ViewNote.css';

class ViewNote extends Component {
  render() {
    console.log(this.props.note);

    return (
      <div className="ViewNote">
        <div className="note-form">
          <Link to='/'>Update</Link>
          <Link to='/'>Delete</Link>
        </div>
      </div>
    );
  }
}

export default ViewNote;