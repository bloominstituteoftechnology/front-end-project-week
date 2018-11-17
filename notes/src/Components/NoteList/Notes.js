import React, { Component } from 'react';
import axios from 'axios';

import Note from './Note';
import './Notes.css';

/* Notes.js
 * List all of the notes in one page.
 * Calls out to Note to display each block.
 */

class Notes extends Component {
  constructor(props) {
    super(props);

    // I'm not sure what we'll need in state just yet. 
    this.state = {
      notes: [],
    };
  };

  // Pull all notes from the API
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then( (response) => {
        this.setState( () => ({ notes: response.data }) )
      })
      .catch( (error) => console.error(error) );
  };

  render() {
    return(
      <div className="appNotes">
        <h2>Your Notes:</h2>
        <div className="noteList">
          {this.state.notes.map( (note) => {
            return (<Note key={note._id} title={note.title} textBody={note.textBody} id={note._id} />);
          })}
        </div>
      </div>
    );
  };
};

export default Notes;