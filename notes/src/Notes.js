import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Notes.css';


class Notes extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          notes: [
              { id: 0, title: "Example Note", body: "here is an example note" }
          ],
        }
    }
    
    createNew = () => {
      // create new note
    }

    viewExisting = () => {
      // search for note
    }

    editExisting = () => {
      // edit note
    }

    deleteExisting = () => {
      // delete note
    }

    render() {
        return (
            <div className="MainView">
              <div className="ButtonColumn">
                <h1 className="LambdaNotes">Lambda Notes</h1>
                <div className="Button">Create New</div>
                <div className="Button">View Notes</div>
                <div className="Button">Edit Notes</div>
                <div className="Button">Delete Notes</div>
              </div>
              <div className="NoteSpace">
                <div className="YourNotes">Your Notes</div>
              </div>
            </div>
        );
    }

}

export default Notes;