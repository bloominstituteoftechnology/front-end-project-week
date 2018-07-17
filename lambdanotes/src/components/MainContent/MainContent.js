import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main-container">
        {/* <NotesList /> */}
        <NoteView />
      </div>
    )
  }
}
