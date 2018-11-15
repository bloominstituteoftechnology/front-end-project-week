import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NotesList extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div className="notes-list">
        {this.props.notes.map(note => <Note key={note.id} note={note}/>)}
      </div>
    )
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}

export default NotesList;