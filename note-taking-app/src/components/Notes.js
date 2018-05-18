import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes } from '../actions';

import Note from './Note';

class Notes extends Component {
  render() {
    return (
      <div>
        { this.props.notes.map(({id, title, content}) => 
          <Note key={id} title={title} content={content}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.notesReducer
}

export default connect(mapStateToProps, { getNotes })(Notes);