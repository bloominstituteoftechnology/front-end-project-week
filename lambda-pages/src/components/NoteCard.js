import React, { Component } from 'react';
import StyledNoteCard from '../styles/StyledNoteCard';
// import ReactMarkdown from 'react-markdown';

class NoteCard extends Component {
  render() {
    const { note } = this.props;
    // const input = note.textBody;
    return (
      <StyledNoteCard
        onClick={() => this.props.handleRedirectToNoteView(note.id)}
      >
        <h3>{note.title}</h3>
        <hr />
        <span>{note.content}</span>
      </StyledNoteCard>
    );
  }
}

export default NoteCard;
