import React from 'react';
import { Form } from '../components';
import { connect } from 'react-redux';
import { editNote } from '../actions';

class EditView extends React.Component {
  render() {
    return(
      <Form history={this.props.history} match={this.props.match} note={this.props.note} submit={this.props.editNote}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    note: state.noteReducer.note,
  }
}

export default connect(
  mapStateToProps,
  {
    editNote
  }
)(EditView);
