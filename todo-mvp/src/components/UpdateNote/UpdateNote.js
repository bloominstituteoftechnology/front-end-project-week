import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './UpdateNote.css';

class UpdateNote extends Component {
  render() {
    console.log('UpdateNote note:', this.props.note);
    console.log(typeof this.props.note)
    return (
      <div className="UpdateNote">
        <h3>Edit Note:</h3>
        <form className="update-form">
        <input type="text" placeholder="Noted Title"/>
        <input type="text" placeholder="Note Content" />
        <Link to="/"><button type="submit">Update</button></Link>
        </form>
      </div>
    );
  }
}

export default UpdateNote;