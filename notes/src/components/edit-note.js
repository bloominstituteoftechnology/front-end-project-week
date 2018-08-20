import React, { Component } from 'react';
import styled from 'styled-components';

import NoteForm from './note-form';

const EditNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: props.notes,
    }
  }

  sendToApp = () => {

  }

  render() {
    return (
      <EditNoteDiv>
        <h4>Edit Note</h4>
        <NoteForm button="Save" ></NoteForm>
      </EditNoteDiv>
    );
  }
}
