import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import NoteForm from './note-form';
import styled from 'styled-components';

const DeleteNoteDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

export default class DeleteNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: this.props.note,
    }
  }


  render() {
    console.log(this)
    return (
      <DeleteNote>
        <a>edit</a>
        <a>Delete</a>
        <h4>{this.state.note.title}</h4>
        <p>{this.state.note.body}</p>
      </DeleteNote>
    );
  }
}
