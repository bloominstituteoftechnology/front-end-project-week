import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './createNote.css';


class CreateNote extends Component {
    constructor() {
      super();
      this.state = {
        noteList: [],
        fields:{
          noteTitle: '',
          noteContent: ''
        },

        note: "",
        error: false
      };
    }
  
   /* handleRemoveNote = noteId => {
      const noteList = this.state.noteList.map(note => {
        if (noteId === note.id) {
          note.completed = !note.completed;
        }
        return note;
      });
      this.setState({ noteList });
    };*/
   /* handleNoteChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };*/

    handleNoteChange = event => {
      const fields = Object.assign({}, this.state.fields);
      fields[event.target.name] = event.target.value;
      this.setState({fields});
    };

    handleAddNote = event => {
      const noteList = [...this.state.noteList, this.state.fields];
      this.setState({
        noteList,
        fields: {
          noteTitle: '',
          noteContent: ''
        }
      });
      event.preventDefault();
    };
  
    /*handleAddNote = () => {
      if (this.state.note === "") {
        this.setState({ error: true });
        setTimeout(() => {
          this.setState({ error: false });
        }, 2400);
      } else {
        const noteList = this.state.noteList.slice(); //reference note array
        const fields = {
          build  note object
          id: this.state.noteList.length + this.state.note,
          noteTitle: this.state.fields.noteTitle,
          noteContent: this.state.fields.noteContent,
          completed: false
        };
        noteList.push(fields); // add note to note list
        this.setState({ noteList, note: "" });
      }
    };*/
  
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
          <div>
            <h4 className="mainBodyTitle2">Create New Note:</h4>
            <input className="noteTitle"
              placeholder="Note Title"
              type="text"
              value={this.state.fields.noteTitle}
              name="noteTitle"
              onChange={this.handleNoteChange}
            />
          </div>

          <div>
            <textarea className="createNewNote"
              placeholder="Note Content"
              type="text"
              value={this.state.fields.noteContent}
              name="noteContent"
              onChange={this.handleNoteChange}
          />
          
          </div>
          <div>
            {this.state.error ? <div>Error note must not be empty text</div> : null}
            <button className="saveButton" onClick={this.handleAddNote}>Save</button>
          </div>
          <div>
          <ul>
            {this.state.noteList.map(({noteTitle, noteContent}, i) => (
              <li key={i}>
                <h4>{noteTitle}</h4>
                <h4>{noteContent}</h4>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      </body>
      );
    }
  }
export default CreateNote;