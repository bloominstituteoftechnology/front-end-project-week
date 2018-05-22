import React, { Component } from 'react';

import './NoteView.css';
import SideBar from './SideBar.js';
import SingleNoteView from './SingleNoteView.js';

class NoteView extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="main-content-container">          
          <div className="side-menu">
            <SideBar />
          </div>
          <div className="list-view">      
            <h1 className="app-intro">
              Note View:
            </h1>
            <SingleNoteView />
          </div>    
        </div>
      </div>
    );
  }
}

export default NoteView;