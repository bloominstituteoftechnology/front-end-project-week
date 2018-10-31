import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 1px solid black;
  margin-left: 300px;
  margin-top: -610px;
  height: 610px;
`;

const Heading = styled.h2`
  display: flex;
  margin-left: 30px;
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.input`
  border-radius: 3px;
  width: 600px;
  height: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Content = styled.textarea`
  border-radius: 3px;
  width: 600px;
  height: 300px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const SaveButton = styled.button`
  width: 150px;
  height: 35px;
  margin-left: 30px;
  border: 1px solid gray;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    console.log('newNote: ', newNote);
    this.props.addNote(newNote);

    this.setState({
      title: '',
      textBody: ''
    });
  }

  render() {
    return (
      <FormContainer>
        <Heading>Create New Note:</Heading>
        <CreateForm onSubmit={this.addNote}>
          <InputTitle
            name='title'
            placeholder='Note Title'
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <Content
            name='textBody'
            placeholder='Note Content'
            value={this.state.textBody}
            onChange={this.handleInputChange}
          />
          <SaveButton type='submit'>Save</SaveButton>
        </CreateForm>
      </FormContainer>
    );
  }
}

export default NoteForm;