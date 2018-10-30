import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions';
import { DragDropContext } from 'react-beautiful-dnd';
import Notes from '../components/Notes';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// dummy data
// import notesData from '../notes';

class NotesView extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.setState({ notes: this.props.notes });
    return !this.props.notes.length ? this.props.getAllNotes() : null;
  }

  handleRedirectToNoteView = id => {
    this.props.history.push(`/note/${id}`);
  };

  onDragEnd = result => {
    // const { destination, source, draggableId } = result;
    // if (!destination) {
    //   return;
    // }
    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }
    // const notes = this.state.notes;
    // const newNoteIds = notes.map(note => note._id);
    // newNoteIds.splice(source.index, 1);
    // newNoteIds.splice(destination.index, 0, draggableId);
    // const newNotes = notes.map((note, index) => {
    //   return {
    //     ...note,
    //     _id: newNoteIds[index]
    //   };
    // });
    // this.setState({ notes: newNotes });
  };

  render() {
    const { notes, isFetching } = this.props;
    // const thirdNotes = notes.filter((note, index) => index % 3 === 0);
    // const twoThirdNotes = notes.filter((note, index) => index % 3 === 1);
    // const threeThirdNotes = notes.filter((note, index) => index % 3 === 2);
    // console.log(thirdNotes, twoThirdNotes, threeThirdNotes);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="View NoteView">
          <h2>Your Notes:</h2>
          {isFetching ? (
            <div>Loading Your Notes...</div>
          ) : (
            <ColumnContainer>
              <Notes
                id="1"
                notes={notes.filter((note, index) => index % 3 === 0)}
                handleRedirectToNoteView={this.handleRedirectToNoteView}
              />
              <Notes
                id="2"
                notes={notes.filter((note, index) => index % 3 === 1)}
                handleRedirectToNoteView={this.handleRedirectToNoteView}
              />
              <Notes
                id="3"
                notes={notes.filter((note, index) => index % 3 === 2)}
                handleRedirectToNoteView={this.handleRedirectToNoteView}
              />
            </ColumnContainer>
          )}
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    isFetching: state.notes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getAllNotes }
)(NotesView);
