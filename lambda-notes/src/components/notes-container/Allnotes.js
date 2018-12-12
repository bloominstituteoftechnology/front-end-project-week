//created in NotesContainer
// Renders a single note for each note in 'notes' array

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NoteWrap = styled.div `
width: 130px;
height: 130px;
display: flex;
justify-content: flex-start;
flex-direction: row;
background-color: white;
padding: 0px;
`

export default class AllNotes extends Component {
  constructor(props) {
    super(props);
  }
  

 

  render() {
    return (
      <div className="notes-list">
        {this.props.notes.map(note => (
         <Link to={`/notes/${note.id}`} key={note.id}>
          <SingleNoteDetails key={note.id} note={note}/>
         </Link>
        ))}
      </div>
    );
  }
}

function SingleNoteDetails({ note }) {
  //function styles a single note from rendering above
  const { title, content } = note;
  return (
    <div className="note-card">
      <div className="note-title">
        <h2>{title}</h2>
        </div>
        <div className="note-body">
          <p>{content}</p>
        </div>
      <div className="save-button">Save</div>
      </div>
  );
}
