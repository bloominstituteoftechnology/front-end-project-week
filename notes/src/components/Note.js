import React from "react";
import { Page, PageHeader, NoteBody, ModeWrapper, ModeLink } from "./styles";
import EditNote from "./EditNote";
import styled from "styled-components";

class Note extends React.Component {
  state = {
    editMode: false,
    deleteMode: false
  };

  handleEditMode = () => {
    this.setState(prevState => {
      return {
        editMode: !prevState.editMode
      };
    });
  };

  render() {
    console.log("PROPS", this.props.notes);
    const filteredNote = this.props.notes.filter(
      (note, index) => index == this.props.match.params.index
    );
    const currentNote = filteredNote[0];
    console.log(currentNote);
    return (
      <Page>
        {this.state.editMode ? (
          <EditNote notes={this.props.notes} />
        ) : (
          <div>
            <ModeWrapper>
              <ModeLink onClick={this.handleEditMode}>Edit</ModeLink>
              <ModeLink>Delete</ModeLink>
            </ModeWrapper>
            <PageHeader>{currentNote.title}</PageHeader>
            <NoteBody>{currentNote.body}</NoteBody>
          </div>
        )}
      </Page>
    );
  }
}

export default Note;
