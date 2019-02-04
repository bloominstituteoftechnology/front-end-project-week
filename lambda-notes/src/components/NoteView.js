import React, { Component } from 'react';
import './styles/NoteView.css';
import Note from './Note';

// TODO - Remove all the placeholder notes
class NoteView extends Component {
  render() {
    return (
      <div className="NoteViewMain">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    );
  }
}

export default NoteView;