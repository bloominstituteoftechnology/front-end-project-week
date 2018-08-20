import React, { Component } from 'react';
import NoteForm from './note-form';
import styled from 'styled-components';

const NewNoteDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

export default class NewNote extends Component {
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
      <NewNoteDiv>
        <h4>New Note</h4>
        <NoteForm button="Create" newNote={this.props.newNote}></NoteForm>
      </NewNoteDiv>
    );
  }
}
