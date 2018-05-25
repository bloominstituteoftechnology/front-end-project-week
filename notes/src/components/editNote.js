import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './editNote.css';


class EditNote extends Component {
    constructor() {
      super();
      };
    
  
    render() {
      return (
      <body>  
        <div className="container">
            <div className="sideBar">
                <div className="sideBarTitle">
                    <h1 className="sideBarTitle1">Lonnie's</h1>
                    <h1 className="sideBarTitle2">Notes</h1>
                </div>
                <Link to="/">
                <button type="button" className="viewNotesButton">
                View Your Notes
                </button>
                </Link>
                <Link to="/createNote">
                <button type="button" className="createNoteButton">
                + Create New Note
                </button>
                </Link>
          </div>
        <div className="mainBody">
            <div>
            <h4 className="mainBodyTitle2">Edit Note:</h4>
            <div>
              <input className="noteTitle"
                placeholder="Note Title"
                type="text"
                name="noteTitle"
                onChange={this.handleNoteChange}
              />
            </div>
            <div>
            <textarea className="createNewNote"
                placeholder="Note Content"
                type="text"
                name="noteContent"
                onChange={this.handleNoteChange}
            />
            </div>
            <div>
              <Link to="/viewNote">
              <button className="saveButton" type="button">Update</button>
              </Link>
            </div>
          </div>
          </div>
          </div>
      </body>
)} }    
  
export default EditNote; 


