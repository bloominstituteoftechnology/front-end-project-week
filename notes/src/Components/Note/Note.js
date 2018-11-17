import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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

    /* note{}:
     *  _id: 0
     *  textBody: ""
     *  title: ""
     */
    this.state = {
      note: {},
      redirect: false
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

  /* Handle deleting a note without redirecting to a different page. */
  handleDelete = (event) => {
    event.preventDefault();
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };

  /* Cancel the deletion */
  cancelDelete = (event) => {
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };

  /* Deletion was confirmed, now delete it from the API */
  confirmedDelete = (event) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
      .then( () => {
        this.setState( () => ({ redirect: true }) );
      })
      .catch( (error) => console.error(error) );
  };

  render() {
    if ( this.state.redirect === true ) {
      return (<Redirect to="/" />);
    }

    return (
      <>
      <div className="deleteOverlay hidden">
        <div className="deleteBox">
          <div>Are you sure you want to delete this?</div>
          <div className="deleteBoxButtons">
            <div className="navButton buttonRed" onClick={this.confirmedDelete}>Delete</div>
            <div className="navButton" onClick={this.cancelDelete}>No</div>
          </div>
        </div>
      </div>
      <div className="viewNote">
        <div className="noteLinks">
          <Link to={`/edit/${this.state.note._id}`}>edit</Link>
          <Link to={`/delete/${this.state.note._id}`} onClick={this.handleDelete}>delete</Link>
        </div>
        <div className="viewNoteTitle">{this.state.note.title}</div>
        <div className="viewNoteText">{this.state.note.textBody}</div>
      </div>
      </>
    );
  }
};

export default Note;