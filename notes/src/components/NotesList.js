import React from 'react';
import '../App.css';
import NotesContainer from './NotesContainer';

class NotesList extends React.Component {
  render() {
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <button>+ Create New Note</button>
      </div>
      <div className="right-bar">
        <h3 className="note-list-header">Your Notes: </h3>
        <NotesContainer notes={this.props.notes} />
      </div>
    </div>
  )
  }
}

export default NotesList;
