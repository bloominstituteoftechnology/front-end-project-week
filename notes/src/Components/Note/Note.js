import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Note.css';

/* Wanted to pass the note as state from within the link, but it keeps
 * returning 'undefined'. Would be nice to use Redux here to eliminate
 * the new axios call. Will have to refactor later. */

/* Note/Note.js
 * Displays the individual note with options to edit & delete.
 */
class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: []
    };
  };

  /* Need to pull the individula note from axios GET */
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then( (response) => {
        this.setState( () => ({ note: response.data }) )
      })
      .catch( (error) => console.error(error) );
  };

  render() {
    return (
      <div className="viewNote">
        <div className="noteLinks">
          <Link to={`/edit/${this.state.note.id}`}>edit</Link>
          <Link to={`/delete/${this.state.note.id}`}>delete</Link>
        </div>
        <div className="viewNoteTitle">{this.state.note.title}</div>
        <div className="viewNoteText">{this.state.note.textBody}</div>
      </div>
    );
  }
};

export default Note;