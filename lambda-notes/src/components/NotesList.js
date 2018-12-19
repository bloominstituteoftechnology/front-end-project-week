import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNotes } from '../actions/index';
import Note from './Note';
import { Link } from 'react-router-dom';

class NotesList extends Component {

  componentDidMount(){
    this.props.getNotes()
  }

  render(){
    const { notes } = this.props;

    return(
        <div className="main-container">
          <h2>Your Notes:</h2>
          <div className="notes-list">
            {notes.map(note => {
              console.log(note)
              return (
                <Link to={`/view/${note._id}`} key={note._id} className="note-link">
                  <Note note={note}/>
                </Link>
              )})}
            </div>
        </div>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes })(NotesList);