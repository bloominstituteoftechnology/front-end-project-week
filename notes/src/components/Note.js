import React from "react";
import { Page, PageHeader, NoteBody } from "./styles";

class Note extends React.Component {
 
  render() {
    console.log("PROPS", this.props.notes);
    const filteredNote = this.props.notes.filter(
      (note, index) =>  index == this.props.match.params.index
    );
    const currentNote = filteredNote[0];
    console.log(currentNote);
    return (
      <Page>
        <PageHeader>{currentNote.title}</PageHeader>
        <NoteBody>{currentNote.body}</NoteBody>
      </Page>
    );
  }
}

export default Note;
