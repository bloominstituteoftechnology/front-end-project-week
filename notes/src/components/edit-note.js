import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import EditForm from './edit-form.js';

const EditNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: props.note,
      count: props.count
    }
  }

  sendToApp = () => {

  }

  render() {
    return (
      <EditNoteDiv>
        <Link to={`/all-notes/${this.state.note.id}`}>Back</Link>
        <h4>Edit Note</h4>
        <p>{this.state.note.title}</p>
        <EditForm button="Save" count={this.state.count} editNote={this.props.editNote} note={this.state.note}></EditForm>
      </EditNoteDiv>
    );
  }
}
