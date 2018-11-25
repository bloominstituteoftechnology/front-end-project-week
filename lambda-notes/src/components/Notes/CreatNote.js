import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
`;

export default class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
    }
  }

  handleInput() {

  }

  onSubmit() {

  }

  render() {
    return (
      <Form>
        <Label for="New Note">Create New Note:</Label>
        <TitleInput type="text" name="Title" placeholder="Note Title" />
        <NoteContent type="textarea" name="Note Content" placeholder="Note Content" />
        <SaveButton type="submit">Save</SaveButton>
      </Form>
    );
  }
}
