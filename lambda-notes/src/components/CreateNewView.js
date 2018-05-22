import React, { Component } from 'react';

// import './NoteView.css';
import SideBar from './SideBar.js';
import CreateNewViewForm from './CreateNewViewForm.js';

class CreateNewView extends Component {
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
            <CreateNewViewForm />
          </div>    
        </div>
      </div>
    );
  }
}

export default CreateNewView;