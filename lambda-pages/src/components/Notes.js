import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import NoteCard from './NoteCard';

const StyledNotes = styled.div`
  width: 30%;
  flex: 1;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
`;

class Notes extends Component {
  render() {
    const { notes } = this.props;
    return (
      <Droppable droppableId={this.props.id}>
        {provided => (
          <StyledNotes {...provided.droppableProps} ref={provided.innerRef}>
            {notes.map((note, index) => (
              <NoteCard
                index={index}
                key={note._id}
                note={note}
                handleRedirectToNoteView={this.props.handleRedirectToNoteView}
              />
            ))}
            {provided.placeholder}
          </StyledNotes>
        )}
      </Droppable>
    );
  }
}

export default Notes;
