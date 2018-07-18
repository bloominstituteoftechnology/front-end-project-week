import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import styled from 'styled-components';

const Note = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: 250px;
  margin-right: 20px;
  margin-top: 44px;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

const TitleInput = styled.input`
  width: 346px;
  height: 36px;
  padding-left: 10px;
  margin-top: 5px;
  border: 1px solid rgb(151, 151, 151);
`;

const BodyInput = styled.input`
  margin-top: 15px;
  width: 604px;
  height: 344px;
  border: 1px solid rgb(151, 151, 151);
`;

const Button = styled.button`
  margin-top: 13px;
  width: 195px;
  height: 44px;
  background-color: #2bc1c4;
  font-size: 16px;
  color: #fff;
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
    // go home after
    this.props.history.push('/');
  };

  render() {
    return (
      <Note>
        <h2>Create New Note:</h2>
        <TitleInput
          onChange={this.handleInputChange}
          placeholder="Note Title"
          value={this.state.title}
          name="title"
        />
        <br />
        <BodyInput
          onChange={this.handleInputChange}
          placeholder="Note Content"
          value={this.state.textBody}
          name="textBody"
        />
        <br />
        <Button onClick={this.clickedSave}>Save</Button>
      </Note>
    );
  }
}

export default connect(
  null,
  { addNote },
)(NoteForm);
