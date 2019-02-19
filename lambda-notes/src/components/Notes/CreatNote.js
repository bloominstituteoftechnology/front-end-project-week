import React, { Component } from 'react';
import { instance } from '../../utils';
import styled, { css } from 'styled-components';

export default class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    instance.post('/notes', {
      title: this.state.noteTitle,
      textBody: this.state.noteContent
    })
      .then(response => {
        console.log(response);
        console.log(this.props.history);
        this.props.history.push(`/notes/${response.data[0]}`);
      })
      .catch(err => {
        console.log('Whoops, unable to create a note!', err);
      })
    this.setState({
      noteTitle: '',
      noteContent: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label for="New Note">Create New Note:</Label>
        <TitleInput
          type="text"
          name="noteTitle"
          placeholder="Note Title"
          value={this.state.noteTitle}
          onChange={this.handleInput} />
        <NoteContent
          type="textarea"
          name="noteContent"
          placeholder="Note Content"
          value={this.state.noteContent}
          onChange={this.handleInput} />
        <SaveButton type="submit" onClick={this.onSubmit}>Save</SaveButton>
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #F2F1F2;
  border: 1px solid #B7B7B7;
  padding: 85px 25px 20px 20px;
  width: 80%;
`;

const Label = styled.label`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 40px;
`;

const TitleInput = styled.input`
  line-height: 25px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  width: 57%;
`;

const NoteContent = styled.textarea`
  font-family: inherit;
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background: #24B8BD;
  border: 1px solid #B7B7B7;
  height: 25px;
  width: 200px;
  padding: 10px 0;
  margin: 15px 0;
  cursor: pointer;
`;
