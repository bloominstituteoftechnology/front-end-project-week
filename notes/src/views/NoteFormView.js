import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addData, editData, fetchData } from '../actions';

import NoteForm from '../components/Notes/NoteForm';

class AddNoteView extends Component {
  state = {
    form: {
      title: '',
      textBody: '',
    },
    note: null,
  };

  componentDidMount() {
    if (this.props.editForm) {
      // console.log('editForm', this.props.notes);
      const note = this.props.notes.find(
        (note) => note.id.toString() === this.props.match.params.noteId
      );
      if (note) {
        // console.log(note);
        this.setState({
          form: {
            title: note.title,
            textBody: note.textBody,
          },
          note: note,
        });
      }
    }
  }

  resetForm() {
    this.setState({
      form: {
        titleInput: '',
        contentInput: '',
      },
    });
  }

  handleInput = (event) => {
    // console.log('handleInput');
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAddData = (event) => {
    // console.log('handleAddNote');
    event.preventDefault();
    this.props.addData(this.state.form);
    this.resetForm();
    this.props.history.push('/');
  };

  handleEdit = () => {
    console.log('handleEdit', this.state.note);
    this.props.editData(this.state.form, this.state.note.id);
    this.props.history.push(`/note/${this.state.note.id}`);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.editForm) {
      console.log('edit form submit test', this.state.note);
      this.handleEdit(this.state.note.id);
    } else {
      this.handleAddData(event);
    }
  };

  render() {
    console.log('NoteFormView', this.props, this.state);
    return (
      <Container>
        <NoteForm
          {...this.props}
          form={this.state.form}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          editForm={this.props.editForm}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.notesReducer.notes,
  };
};

export default connect(
  mapStateToProps,
  { addData, editData, fetchData }
)(AddNoteView);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
