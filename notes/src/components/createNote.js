import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './createNote.css';
import axios from 'axios';
const URL = 'http://localhost:3333/notes'

class CreateNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        noteTitle: '',
        noteContent: '',
      };
    }

    addNote = event => {
      event.preventDefault();
      const { noteTitle, noteContent } = this.state;
      const noteData = { noteTitle, noteContent };
      this.props.addNote(noteData);
      this.setState({
        noteTitle: '',
        noteContent: '',
      });
    } 
  
      addNote = note => {
      const myPromise = axios.post(URL, note);
      myPromise
        .then(response => {
          this.setState({ notes: response.data}); 
        })
        .catch(err => {
          console.error(err);
        });
  }

  handleAddNote = event => {
    event.preventDefault();
    const { noteTitle, noteContent } = this.state;
    const noteData = { noteTitle, noteContent };
    this.addNote(noteData);
    this.setState({
      noteTitle: '',
      noteContent: ''
    });
    event.preventDefault();
  }

  handleNoteChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
    /*handleNoteChange = event => {
      const fields = Object.assign({}, this.state.fields);
      fields[event.target.name] = event.target.value;
      this.setState({fields});
    };*/

    /*handleAddNote = event => {
      const noteList = [...this.state.noteList, this.state.fields];
      this.setState({
        noteList,
        fields: {
          noteTitle: '',
          noteContent: ''
        }
      });
      event.preventDefault();
    };*/
  
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
            <h4 className="mainBodyTitle2">Create New Note:</h4>
            <input className="noteTitle"
              placeholder="Note Title"
              type="text"
              value={this.state.noteTitle}
              name="noteTitle"
              onChange={this.handleNoteChange}
            />
          </div>

          <div>
            <textarea className="createNewNote"
              placeholder="Note Content"
              type="text"
              value={this.state.noteContent}
              name="noteContent"
              onChange={this.handleNoteChange}
          />
          </div>
          <div>
            {this.state.error ? <div>Error note must not be empty text</div> : null}
            
            <button type="button" className="saveButton" onClick={this.handleAddNote}>
            Save
            </button>
          
          </div>
        <div>
      </div>
    </div>
    </div>
  </body>
      );
    }
  }
export default CreateNote;