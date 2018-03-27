import React, { Component } from 'react';
import Notes from './Note';
import notestyles from './notestyles.css';

class NotesPage extends Component {
  render() {
    return (
      <div className="notepage">
        <h3>Your Notes:</h3>
        <Notes />
      </div>
    );
  }
}

export default NotesPage;
