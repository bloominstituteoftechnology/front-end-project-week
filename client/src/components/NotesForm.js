import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../styles';

const StyledInput = styled.input`
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #9e9e9e;
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  width: 60%;
  margin-bottom: 2rem;

  &::placeholder {
    color: #ccc;
  }
`;

const StyledTextarea = styled.textarea`
  display: block;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #9e9e9e;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  height: 30rem;
  margin-bottom: 2rem;

  &::placeholder {
    color: #ccc;
  }
`;

const FormButton = Button.extend`
  width: 25rem;
`;

class NotesForm extends Component {
  state = {
    title: '',
    textBody: '',
  };
  render() {
    return (
      <form>
        <StyledInput type="text" name="title" placeholder="Note Title" />
        <StyledTextarea
          value={this.state.textBody}
          placeholder="Note Content"
        />
        <FormButton>Save</FormButton>
      </form>
    );
  }
}

export default NotesForm;
