import React from "react";
import { Page, PageHeader, NoteBody } from "./styles";
import EditNote from "./EditNote";

class Note extends React.Component {
  state = {
    editMode: false,
    deleteMode: false
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
          <EditNote />
        ) : (
          <div>
            <PageHeader>{currentNote.title}</PageHeader>
            <NoteBody>{currentNote.body}</NoteBody>
          </div>
        )}
      </Page>
    );
  }
}

export default Note;
