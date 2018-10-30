import React, { Component } from 'react';
import StyledNoteCard from '../styles/StyledNoteCard';
import { Draggable } from 'react-beautiful-dnd';
// import '../styles/noteCard.css';

class NoteCard extends Component {
  render() {
    const { note, index } = this.props;
    return (
      <Draggable draggableId={note._id} index={index}>
        {provided => (
          <StyledNoteCard
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => this.props.handleRedirectToNoteView(note._id)}
          >
            <h3>{note.title}</h3>
            <hr />
            <span>{note.textBody}</span>
          </StyledNoteCard>
        )}
      </Draggable>
    );
  }
}

export default NoteCard;
// export default NoteCard;
