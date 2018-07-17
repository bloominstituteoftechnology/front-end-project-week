import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import styled from 'styled-components';

const Note = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: 300px;
  margin-right: 20px;
  margin-top: 30px;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      edit: false,
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clickedSave = () => {
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    this.setState({ title: '', textBody: '' });
    this.props.addNote(newNote);
  };

  render() {
    return (
      <Note>
        <h2>Create New Note:</h2>
        <input
          onChange={this.handleInputChange}
          placeholder="New Title"
          value={this.state.title}
          name="title"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="Note Content"
          value={this.state.textBody}
          name="textBody"
        />
        <button onClick={this.clickedSave}>Save</button>
      </Note>
    );
  }
}

export default connect(
  null,
  { addNote },
)(NoteForm);
