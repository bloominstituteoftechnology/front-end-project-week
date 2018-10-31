import React, { Component } from 'react';
import StyledNoteCard from '../styles/StyledNoteCard';
// import { Draggable } from 'react-beautiful-dnd';
// import '../styles/noteCard.css';

class NoteCard extends Component {
  render() {
    const { note, index } = this.props;
    return (
      <StyledNoteCard
        onClick={() => this.props.handleRedirectToNoteView(note._id)}
      >
        <h3>{note.title}</h3>
        <hr />
        <span>{note.textBody}</span>
      </StyledNoteCard>
    );
  }
}

export default NoteCard;
