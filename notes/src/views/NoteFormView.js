import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addData } from '../actions';

import NoteForm from '../components/NoteForm';

class AddNoteView extends Component {
  state = {
    form: {
      title: '',
      textBody: '',
    },
  };

  resetForm() {
    this.setState({
      form: {
        titleInput: '',
        contentInput: '',
      },
    });
  }

  handleInput = (event) => {
    console.log('handleInput');
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

  render() {
    return (
      <Container>
        <NoteForm
          form={this.state.form}
          handleInput={this.handleInput}
          handleAddData={this.handleAddData}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  { addData }
)(AddNoteView);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
