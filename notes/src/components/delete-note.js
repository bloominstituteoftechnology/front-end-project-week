import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import NoteForm from './note-form';
import styled from 'styled-components';

const DeleteNoteDiv = styled.div`
  border: 1px solid green;
  background: white;
  margin: 200px;
  padding: 50px;
  width: 1000px:
  height: 100vh:
  background: black;
  ${'' /* opacity: .5; */}
  z-index: 100;
  position:fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <DeleteNoteDiv>
        <h4>Are you sure you want to delete this?</h4>
        <div className='delete-buttons'>
          <Link to="/all-notes">Delete</Link>
          <Link to={`/all-notes/${this.state.note.id}`}>No</Link>
        </div>
      </DeleteNoteDiv>
    );
  }
}
