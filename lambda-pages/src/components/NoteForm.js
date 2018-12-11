import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
// var Markdown = require('react-markdown');

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: none;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    font-size: inherit;
    margin-bottom: 2rem;
    background: #2f3640;
    color: #f5f6fa;
    outline: none;
    font-family: monospace;
    font-weight: bold;
    letter-spacing: 1px;
  }
  textarea {
    resize: none;
  }
  .body-input {
    height: 50vh;
  }
`;

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    if (this.props.note) {
      const { title, content } = this.props.note;
      this.setState({ title, content });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = e => {
    const { title, content } = this.state;
    e.preventDefault();
    if (this.props.addNewNote) {
      this.props.addNewNote({ title, content });
    } else if (this.props.updateNote) {
      this.props.updateNote({ title, content });
    }
  };
  render() {
    const { title, content } = this.state;
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          onChange={this.handleInputChange}
          name="title"
          value={title}
        />

        <textarea
          className="body-input"
          type="text"
          placeholder="Note Content"
          onChange={this.handleInputChange}
          name="content"
          value={content}
        />

        <Button>Save</Button>
      </StyledForm>
    );
  }
}

export default NoteForm;
