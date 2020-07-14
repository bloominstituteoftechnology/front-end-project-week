import React from "react";
import { Page, PageHeader, NoteBody, ModeWrapper, ModeLink } from "./styles";
import EditNote from "./EditNote";
import Modal from "./Modal";

class Note extends React.Component {
  state = {
    editMode: false,
    deleteMode: false,
    _id: this.props.match.params.id,
  };

  handleEditMode = () => {
    this.setState(prevState => {
      return {
        editMode: !prevState.editMode
      };
    });
  };

  handleDeleteMode = () => {
    this.setState(prevState => {
      return {
        deleteMode: !prevState.deleteMode
      };
    });
  };

  handleSubmit = object => {
    this.props.handleSubmit(this.state._id, object);
    this.handleEditMode();
  };

  // currentNoteText = () => {
  //   const filteredNote = this.props.notes.filter(
  //     (note, index) => index == this.props.match.params.index
  //   );
  //   const currentNote = filteredNote[0];
  //   return currentNote;
  // };

  // add this prop to EditNote  handleCurrentNote={this.currentNoteText}

  render() {
    const note = this.props.notes.find(
			note => note._id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;
    return (
      <Page>
        {this.state.editMode ? (
          <EditNote
            note={note}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div>
            <ModeWrapper>
              <ModeLink onClick={this.handleEditMode}>Edit</ModeLink>
              <ModeLink onClick={this.handleDeleteMode}>Delete</ModeLink>
            </ModeWrapper>
            <PageHeader singleNote>{note.title}</PageHeader>
            <NoteBody>{note.textBody}</NoteBody>
          </div>
        )}
        <Modal
          deleteMode={this.state.deleteMode}
          handleClose={() => this.handleDeleteMode()}
          handleDelete={() => this.props.handleDelete(noteId)}
        />
      </Page>
    );
  }
}

export default Note;
