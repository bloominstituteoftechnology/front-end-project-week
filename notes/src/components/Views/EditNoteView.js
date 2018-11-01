import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, editNote } from '../../actions';

import EditNote from '../EditNote';

class EditNoteView extends Component {

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes
  }
}

export default connect(mapStateToProps, { getNotes, editNote })(EditNoteView);
