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
                    <h1 className="sideBarTitle1">Lambda</h1>
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
            <h4 className="mainBodyTitle">Edit Note:</h4>
            <div>
              <h4 className="mainBodyTitle">Create New Note:</h4>
              <input className="noteTitle"
                placeholder="Note Title"
                type="text"
            
                name="noteTitle"
                onChange={this.handleNoteChange}
              />
            </div>

            <div>
              <input className="createNewNote"
                placeholder="Note Content"
                type="text"
                
                name="noteContent"
                onChange={this.handleNoteChange}
            />
            </div>

            <div>
              
              <button className="saveButton" onClick={this.handleAddNote}>Update</button>
            </div>
          </div>
          </div>
      </body>
 )} }    
  
export default EditNote; 