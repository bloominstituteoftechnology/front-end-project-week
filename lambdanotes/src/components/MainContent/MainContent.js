import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main-container">
        {/* <NotesList /> */}
        {/* <NoteView /> */}
        <CreateNote />
      </div>
    )
  }
}
