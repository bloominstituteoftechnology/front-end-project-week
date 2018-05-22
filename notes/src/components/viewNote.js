import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './viewNote.css';


class ViewNote extends Component {
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
            <h4 className="mainBodyTitle">Note Name:</h4>
        </div>
        </div>
      </body>
 )} }    
  
 

export default ViewNote;
