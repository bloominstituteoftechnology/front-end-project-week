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

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <StyledInput
          onChange={this.handleChange}
          value={this.state.title}
          type="text"
          name="title"
          placeholder="Note Title"
          autoComplete="off"
        />
        <StyledTextarea
          value={this.state.textBody}
          placeholder="Note Content"
          onChange={this.handleChange}
          name="textBody"
        />
        <FormButton>Save</FormButton>
      </form>
    );
  }
}

export default NotesForm;
