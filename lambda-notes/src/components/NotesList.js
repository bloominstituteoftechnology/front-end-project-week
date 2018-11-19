import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNotes } from '../actions/index';
import Note from './Note';
import { Link } from 'react-router-dom';

class NotesList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getNotes()
  }

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
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes })(NotesList);