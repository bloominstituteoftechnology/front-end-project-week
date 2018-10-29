import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    font-size: inherit;
    margin-bottom: 2rem;
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
      textBody: '',
      tags: []
    };
  }

  componentDidMount() {
    if (this.props.note) {
      const { title, textBody, tags } = this.props.note;
      this.setState({ title, textBody, tags });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = e => {
    const { title, textBody, tags } = this.state;
    e.preventDefault();
    if (this.props.addNewNote) {
      this.props.addNewNote({ title, textBody, tags });
    } else if (this.props.updateNote) {
      this.props.updateNote({ title, textBody, tags });
    }
  };
  render() {
    const { title, textBody } = this.state;
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
          name="textBody"
          value={textBody}
        />
        <Button>Save</Button>
      </StyledForm>
    );
  }
}

export default NoteForm;
