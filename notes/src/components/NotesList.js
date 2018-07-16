import React from 'react';
import '../App.css';
import NotesContainer from './NotesContainer';
import {NavLink} from 'react-router-dom';

class NotesList extends React.Component {
  render() {
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
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
