import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import { Link } from 'react-router-dom';

class NotesList extends Component {

  render(){
    return(
      <>
        <h1>Your Notes:</h1>
        <div className="notes-list">
          {this.props.notes.map(note => {
            return (
              <Link to={`/view/${note._id}`}>
                <Note key={note._id} note={note}/>
              </Link>
            )})}
        </div>
      </>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}

export default NotesList;