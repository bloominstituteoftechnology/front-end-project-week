import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../store/actions';

import { AddNoteForm } from '../components/AddNoteForm/AddNoteForm';

const resetForm = {
  title: '',
  textBody: ''
}

class AddNewNoteView extends React.Component {
  state = {

    note: {
      title: '',
      textBody: ''
    },
    isUpdating: false,

  }

  handleInput = e => {
    e.preventDefault();
    console.log('working in handle input');
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    });
  }

  handleAddNewNote = e => {
    e.preventDefault();
    console.log('boop boop: this is the handleAddNewNote');
    this.props.addNote(this.state.note);
    this.props.history.push('/notes');
  }

  // handleUpdateNote = () => {
  //   this.props.updateNote(this.state.note);
  //   this.props.history.push('/notes');
  // }

  render() {
    return (
      <AddNoteForm 
        {...this.props}
        note={this.state.note}
        handleInput={this.handleInput}
        handleAddNewNote={this.handleAddNewNote}
        // isUpdating={this.state.isUpdating}
      />
    )
  }
}

const mapStateToProps = state => ({
  // update here

})

export default connect(mapStateToProps, { addNote })(AddNewNoteView);