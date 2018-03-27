import React, { Component } from 'react';
// import { Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from './notesActions';

class NotesForm extends Component {
  state = {
    title: '',
    content: '',
    key: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createNote}>
          <input type='text' placeholder='title' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

const actions = {
  addNote
}

export default connect(mapStateToProps, actions)(NotesForm);