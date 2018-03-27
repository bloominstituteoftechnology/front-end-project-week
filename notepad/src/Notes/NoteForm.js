import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { createNote } from '../Actions';

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

export default connect(mapStateToProps, { createNote })(NotesForm);