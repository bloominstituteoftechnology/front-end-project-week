import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes, selectNote } from '../actions';

class Notes extends Component {
  render() {
    const { notes, selectNote } = this.props
    return (
      <div>
        { notes.map(({id, title, content}) => 
          <div key={id} onClick={() => selectNote({id, title, content})}>
            <div> {title} </div>
            <div>{content} </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.notesReducer
}

export default connect(mapStateToProps, { getNotes, selectNote })(Notes);