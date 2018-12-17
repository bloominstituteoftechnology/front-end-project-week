import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNoteForm = styled.div`
background-color: blue;
`

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  submitChange = e => {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledNoteForm>
        <form onSubmit={this.submitChange}>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          />
          <NavLink to='/'>
          <button type="submit">Save</button>
          </NavLink>
        </form>
      </StyledNoteForm>
    );
  }
}

export default NoteForm;
