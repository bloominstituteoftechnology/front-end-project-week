import React from "react";
import { Page, PageHeader, NoteBody, ModeWrapper, ModeLink } from "./styles";
import EditNote from "./EditNote";
import styled from "styled-components";
import Modal from './Modal'

class Note extends React.Component {
  state = {
    editMode: false,
    deleteMode: false,
    index: this.props.match.params.index
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
		this.props.handleSubmit(this.state.index, object);
		this.handleEditMode();
	};

  render() {
    console.log("PROPS", this.props.notes);
    const filteredNote = this.props.notes.filter(
      (note, index) => index == this.props.match.params.index
    );
    const currentNote = filteredNote[0];
    const _index = this.props.match.params.index;
    console.log(currentNote);
    return (
      <Page>
        {this.state.editMode ? (
          <EditNote notes={this.props.notes} handleSubmit={this.handleSubmit} />
        ) : (
          <div>
            <ModeWrapper>
              <ModeLink onClick={this.handleEditMode}>Edit</ModeLink>
              <ModeLink onClick={this.handleDeleteMode}>Delete</ModeLink>
            </ModeWrapper>
            <PageHeader singleNote>{currentNote.title}</PageHeader>
            <NoteBody>{currentNote.body}</NoteBody>
          </div>
        )}
        <Modal
					deleteMode={this.state.deleteMode}
					handleClose={() => this.handleDeleteMode()}
					handleDelete={() => this.props.handleDelete(_index)}
				/>
      </Page>
    );
  }
}

export default Note;
