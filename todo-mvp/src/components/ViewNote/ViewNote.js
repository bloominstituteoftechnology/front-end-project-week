import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ViewNote.css';

class ViewNote extends Component {
  render() {
    console.log('ViewNote note: ', this.props.note);
    console.log(typeof this.props.note)
    return (
      <div className="ViewNote">
        {/* <div>{this.props.note.title}</div> */}
        <div>{this.props.note.content}</div>
        <div className="note-form">
          <Link to={`/update/${this.props.note.id}`}>Update</Link>
          <Link to='/'>Delete</Link>
        </div>
      </div>
    );
  }
}

export default ViewNote;