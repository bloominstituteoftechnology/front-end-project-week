import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.js'
import './NewNoteForm.css';

const dummyData = [
    {
        id: 1,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 2,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 3,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
    {
        id: 4,
        tags: [],
        title: 'Note Title',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
     },
  ]

class BasicNoteForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            notes: dummyData,
           title: '',
           textBody: ''
        };
    }


handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };
  
  
handleAddNote = () => {
    console.log(this.state)
      let newNotes = this.state.notes.slice();
        newNotes.push({
        title: this.state.title,
        textBody: this.state.textBody,
        id: Date.now()
    });
      
      this.setState({
          notes: newNotes,
          title: '',
          textBody: ''
      })
      console.log(this.state)
  }

  render() {

    return (
        <div className = "new-note-container">
            <form>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleChange} 
                value = {this.title}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleChange} 
                value = {this.textBody}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/all"> 
                <button onClick = {this.state.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}
}

export default BasicNoteForm;